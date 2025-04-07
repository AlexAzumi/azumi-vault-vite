import {
  faDiagramProject,
  faEnvelope,
  faHome,
  faIdCardClip,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface Item {
  title: string
  icon: IconDefinition
}

const NAVBAR_ITEMS: Item[] = [
  {
    title: 'Inicio',
    icon: faHome,
  },
  {
    title: 'Sobre mí',
    icon: faIdCardClip,
  },
  {
    title: 'Mis proyectos',
    icon: faDiagramProject,
  },
  {
    title: 'Contacto',
    icon: faEnvelope,
  },
]

const Navbar: FC = () => {
  return (
    <div className='bg-black px-6'>
      <div className='container mx-auto flex justify-end'>
        {NAVBAR_ITEMS.map((data, idx) => (
          <NavbarItem key={`navbar-item-${idx}`} {...data} />
        ))}
      </div>
    </div>
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
