import {
  faEnvelope,
  faEnvelopeOpen,
  faSquareArrowUpRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import CONTACT_DATA from '../../data/contact.json'

const Contact: FC = () => {
  const { t } = useTranslation()

  return (
    <div className='container mx-auto my-8 flex flex-col'>
      <div id='contact' className='-translate-y-26' />

      <h1 className='relative mb-6 flex justify-center text-center text-2xl font-extrabold text-gray-900 uppercase md:text-3xl lg:text-4xl'>
        <div className='z-10 flex items-center justify-center rounded-full bg-green-600 px-10 py-4'>
          <FontAwesomeIcon icon={faEnvelope} className='mr-4' />
          {t('contact.title')}
        </div>
        <hr className='absolute top-1/2 w-full translate-y-[-2px] rounded-full border-2 border-green-600' />
      </h1>

      <div className='my-auto grid grid-cols-1 px-4 pt-8 pb-14 text-2xl text-white lg:grid-cols-6'>
        <div className='text-center lg:col-span-2 lg:col-start-2 lg:translate-x-4'>
          <div className='flex items-center justify-center rounded bg-black p-4'>
            <FontAwesomeIcon icon={faEnvelopeOpen} className='mr-3' />
            {CONTACT_DATA.email}
          </div>
        </div>
        <div className='translate-y-[50%] text-center lg:col-span-2 lg:-translate-x-4'>
          <a
            className='flex items-center justify-center rounded bg-green-600 p-4 transition-all hover:-translate-y-1 hover:bg-green-500'
            href={`mailto:${CONTACT_DATA.email}`}
            onClick={(event) => {
              window.location.href = `mailto:${CONTACT_DATA.email}`
              event.preventDefault()
            }}
            target='_blank'
          >
            {t('contact.sendEmail')}
            <FontAwesomeIcon className='ml-3' icon={faSquareArrowUpRight} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
