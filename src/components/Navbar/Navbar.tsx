import {
  faDiagramProject,
  faEnvelope,
  faHome,
  faIdCardClip,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

interface Item {
  title: string
  icon: IconDefinition
}

const Navbar: FC = () => {
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

  return useMemo(
    () => (
      <div className='bg-black px-6'>
        <div className='container mx-auto flex'>
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
      </div>
    ),
    [NAVBAR_ITEMS, i18n.language],
  )
}

interface NavbarItemProps extends Item {}

const NavbarItem: FC<NavbarItemProps> = ({ title, icon }) => {
  return (
    <div className='group relative mr-8 py-2 text-lg font-semibold text-white uppercase last-of-type:mr-0 hover:cursor-pointer'>
      <FontAwesomeIcon icon={icon} className='mr-2' />
      {title}
      <hr className='absolute right-0 bottom-0 left-0 w-0 border-white transition-all group-hover:w-full group-hover:border-b' />
    </div>
  )
}

export default Navbar
