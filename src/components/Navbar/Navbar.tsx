import {
  faBars,
  faDiagramProject,
  faEnvelope,
  faHome,
  faIdCardClip,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { NavbarItem } from '../NavbarItem'

import useScrollPosition from '../../hooks/useScrollPosition'

const Navbar: FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const scrollPosition = useScrollPosition()

  const { t, i18n } = useTranslation()

  const NAVBAR_ITEMS = useMemo(
    () => [
      {
        id: 'home',
        title: t('navbar.home'),
        icon: faHome,
      },
      {
        id: 'about-me',
        title: t('navbar.aboutMe'),
        icon: faIdCardClip,
      },
      {
        id: 'my-projects',
        title: t('navbar.myProjects'),
        icon: faDiagramProject,
      },
      {
        id: 'contact',
        title: t('navbar.contact'),
        icon: faEnvelope,
      },
    ],
    [t],
  )

  const changeLanguage = useCallback((language: string) => {
    i18n.changeLanguage(language)
  }, [])

  const toggleCollapse = useCallback(() => {
    setCollapsed((value) => !value)
  }, [collapsed])

  const scrollToElement = useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

      if (!collapsed) {
        toggleCollapse()
      }
    },
    [collapsed],
  )

  useEffect(() => {
    if (scrollPosition >= 100 && !scrolled) {
      setScrolled(true)
    } else if (scrollPosition < 100 && scrolled) {
      setScrolled(false)
    }
  }, [scrollPosition])

  return useMemo(
    () => (
      <div className='fixed top-0 right-0 left-0 z-20'>
        {/* Desktop navbar */}
        <div
          className={`container mx-auto my-3 hidden rounded px-8 transition-colors lg:flex ${scrolled ? 'bg-black/70 shadow-xl backdrop-blur-lg' : ''}`}
        >
          {/* i18n configuration */}
          <div className='mr-auto flex items-center text-white'>
            <div
              className={`hover:cursor-pointer ${i18n.language.includes('en') ? 'underline' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              ENGLISH
            </div>
            <div className='mx-2'>|</div>
            <div
              className={`hover:cursor-pointer ${i18n.language.includes('es') ? 'underline' : ''}`}
              onClick={() => changeLanguage('es')}
            >
              ESPAÑOL
            </div>
          </div>
          {NAVBAR_ITEMS.map((data, idx) => (
            <NavbarItem
              {...data}
              key={`navbar-item-${idx}`}
              onClick={() => scrollToElement(data.id)}
            />
          ))}
        </div>
        {/* Mobile navbar */}
        <div
          className={`mx-4 mt-3 flex flex-col rounded px-8 py-4 lg:hidden ${scrolled || !collapsed ? 'bg-black/70 shadow-xl backdrop-blur-lg' : ''}`}
        >
          <div className='flex'>
            {/* i18n configuration */}
            <div className='mr-auto flex items-center text-white'>
              <div
                className={`hover:cursor-pointer ${i18n.language.includes('en') ? 'underline' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                EN
              </div>
              <div className='mx-2'>|</div>
              <div
                className={`hover:cursor-pointer ${i18n.language.includes('es') ? 'underline' : ''}`}
                onClick={() => changeLanguage('es')}
              >
                ES
              </div>
            </div>
            <div className='flex w-full justify-end'>
              <FontAwesomeIcon
                className='text-white'
                icon={faBars}
                size='xl'
                onClick={toggleCollapse}
              />
            </div>
          </div>
          {/* Collapse items */}
          <div
            className={`flex h-full flex-col overflow-y-hidden ${collapsed ? 'max-h-0' : 'max-h-full'}`}
          >
            {NAVBAR_ITEMS.map((data, idx) => (
              <NavbarItem
                {...data}
                key={`navbar-item-${idx}`}
                onClick={() => scrollToElement(data.id)}
              />
            ))}
          </div>
        </div>
        {!collapsed && (
          <div
            className='w-max-full h-screen w-screen'
            onClick={toggleCollapse}
          />
        )}
      </div>
    ),
    [NAVBAR_ITEMS, i18n.language, collapsed, scrolled],
  )
}

export default Navbar
