import { faBriefcase, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

import bixdyLogo from '../../assets/img/bixdy-logo.png'
import cfeLogo from '../../assets/img/cfe-logo.png'
import tSmartLogo from '../../assets/img/t-smart-logo.png'

const WorkExperience = () => {
  const { t } = useTranslation()

  return (
    <div className='container mx-auto my-8 flex flex-col justify-center'>
      <div id='work-experience' className='-translate-y-26' />

      <h1 className='relative mb-10 flex justify-center text-center text-2xl font-extrabold text-gray-900 uppercase md:text-3xl lg:text-4xl'>
        <div className='z-10 flex items-center justify-center rounded-full bg-green-600 px-10 py-4'>
          <FontAwesomeIcon icon={faBriefcase} className='mr-4' />
          {t('work-experience.title')}
        </div>
        <hr className='absolute top-1/2 w-full -translate-y-0.5 rounded-full border-2 border-green-600' />
      </h1>
      <div className='grid grid-cols-6 px-4 md:px-2 xl:px-0'>
        <div className='col-span-6 rounded bg-black/60 p-2 text-white md:col-span-4 md:col-start-2 md:p-4'>
          <div className='grid grid-cols-2'>
            <div className='col-span-1 border-r-4 p-6'>
              <div className='flex justify-center'>
                <img src={cfeLogo} width={250} />
              </div>
              <p className='mt-6 text-center font-bold'>
                {t('work-experience.cfe.name')}
              </p>
              <p className='text-center'>
                {t('work-experience.cfe.job-title')}
              </p>
            </div>
            <div className='col-span-1 flex -translate-x-3.5 items-center'>
              <FontAwesomeIcon
                className='mr-4 text-green-600'
                icon={faCircle}
                size='xl'
              />
              <p className='text-green-600'>{t('work-experience.cfe.time')}</p>
            </div>
            <div className='z-10 col-span-1 flex translate-x-2.5 items-center justify-end'>
              <p className='text-right text-green-600'>
                {t('work-experience.t-smart.time')}
              </p>
              <FontAwesomeIcon
                className='ml-4 text-green-600'
                icon={faCircle}
                size='xl'
              />
            </div>
            <div className='col-span-1 col-start-2 row-start-2 -translate-x-1 border-l-4 p-6'>
              <div className='flex justify-center'>
                <img src={tSmartLogo} width={120} />
              </div>
              <p className='mt-6 text-center font-bold'>
                {t('work-experience.t-smart.name')}
              </p>
              <p className='text-center'>
                {t('work-experience.t-smart.job-title')}
              </p>
            </div>
            <div className='col-span-1 row-start-3 border-r-4 p-6'>
              <div className='flex justify-center'>
                <img src={bixdyLogo} width={120} />
              </div>
              <p className='mt-6 text-center font-bold'>
                {t('work-experience.bixdy.name')}
              </p>
              <p className='text-center'>
                {t('work-experience.bixdy.job-title')}
              </p>
            </div>
            <div className='col-span-1 flex -translate-x-3.5 items-center'>
              <FontAwesomeIcon
                className='mr-4 text-green-600'
                icon={faCircle}
                size='xl'
              />
              <p className='text-green-600'>
                {t('work-experience.bixdy.time')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
