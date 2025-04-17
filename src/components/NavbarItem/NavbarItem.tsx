import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface Item {
  title: string
  icon: IconDefinition
  id: string
}

interface NavbarItemProps extends Item {
  onClick?(): void
}

const NavbarItem: FC<NavbarItemProps> = ({ title, icon, onClick }) => {
  return (
    <div
      className='group relative py-4 text-center text-lg font-semibold text-white uppercase transition-colors last-of-type:mr-0 last-of-type:pb-0 hover:cursor-pointer hover:text-green-500 lg:mr-8 lg:text-left'
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className='mr-2' />
      {title}
      <hr className='absolute right-0 bottom-0 left-0 w-0 border-green-500 transition-all group-hover:w-full group-hover:border-b' />
    </div>
  )
}

export default NavbarItem
