import {
  faBars,
  faDiagramProject,
  faEnvelope,
  faHome,
  faIdCardClip,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Item {
  title: string
  icon: IconDefinition
}

const Navbar: FC = () => {
  const [collapsed, setCollapsed] = useState(true)

  const { t, i18n } = useTranslation()

  const NAVBAR_ITEMS = useMemo(
    () => [
      {
        title: t('navbar.home'),
        icon: faHome,
      },
      {
        title: t('navbar.aboutMe'),
        icon: faIdCardClip,
      },
      {
        title: t('navbar.myProjects'),
        icon: faDiagramProject,
      },
      {
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

  return useMemo(
    () => (
      <div className='fixed top-0 right-0 left-0 z-20'>
        {/* Desktop navbar */}
        <div className='container mx-auto mt-3 hidden rounded bg-black px-8 shadow-xl lg:flex'>
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
        <div className='mx-4 mt-3 flex flex-col rounded bg-black px-8 py-4 shadow-xl lg:hidden'>
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
            className={`h-full overflow-y-hidden transition-all ${collapsed ? 'max-h-0' : 'max-h-full'}`}
          >
            {NAVBAR_ITEMS.map((data, idx) => (
              <NavbarItem key={`navbar-item-${idx}`} {...data} />
            ))}
          </div>
        </div>
      </div>
    ),
    [NAVBAR_ITEMS, i18n.language, collapsed],
  )
}

interface NavbarItemProps extends Item {}

const NavbarItem: FC<NavbarItemProps> = ({ title, icon }) => {
  return (
    <div className='group relative py-4 text-center text-lg font-semibold text-white uppercase last-of-type:mr-0 last-of-type:pb-0 hover:cursor-pointer lg:mr-8 lg:text-left'>
      <FontAwesomeIcon icon={icon} className='mr-2' />
      {title}
      <hr className='absolute right-0 bottom-0 left-0 w-0 border-white transition-all group-hover:w-full group-hover:border-b' />
    </div>
  )
}

export default Navbar
