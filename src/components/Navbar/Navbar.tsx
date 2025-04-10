import {
  faBars,
  faDiagramProject,
  faEnvelope,
  faHome,
  faIdCardClip,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import useScrollPosition from '../../hooks/useScrollPosition'

interface Item {
  title: string
  icon: IconDefinition
  href: string
}

const Navbar: FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const scrollPosition = useScrollPosition()

  const { t, i18n } = useTranslation()

  const NAVBAR_ITEMS = useMemo(
    () => [
      {
        title: t('navbar.home'),
        icon: faHome,
        href: '#home',
      },
      {
        title: t('navbar.aboutMe'),
        icon: faIdCardClip,
        href: '#about-me',
      },
      {
        title: t('navbar.myProjects'),
        icon: faDiagramProject,
        href: '#my-projects',
      },
      {
        title: t('navbar.contact'),
        icon: faEnvelope,
        href: '#contact',
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
          className={`container mx-auto my-3 hidden rounded px-8 transition-colors lg:flex ${scrolled ? 'bg-black/80 shadow-xl backdrop-blur-lg' : ''}`}
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
            <NavbarItem key={`navbar-item-${idx}`} {...data} />
          ))}
        </div>
        {/* Mobile navbar */}
        <div
          className={`mx-4 mt-3 flex flex-col rounded px-8 py-4 lg:hidden ${scrolled || !collapsed ? 'bg-black/80 shadow-xl backdrop-blur-lg' : ''}`}
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
                key={`navbar-item-${idx}`}
                {...data}
                onClick={toggleCollapse}
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

interface NavbarItemProps extends Item {
  onClick?(): void
}

const NavbarItem: FC<NavbarItemProps> = ({ title, icon, href, onClick }) => {
  return (
    <a
      className='group relative py-4 text-center text-lg font-semibold text-white uppercase transition-colors last-of-type:mr-0 last-of-type:pb-0 hover:cursor-pointer hover:text-green-500 lg:mr-8 lg:text-left'
      href={href}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className='mr-2' />
      {title}
      <hr className='absolute right-0 bottom-0 left-0 w-0 border-green-500 transition-all group-hover:w-full group-hover:border-b' />
    </a>
  )
}

export default Navbar
