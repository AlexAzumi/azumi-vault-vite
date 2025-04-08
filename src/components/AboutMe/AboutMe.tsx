import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import profileImg from '../../assets/img/profile.jpg'

const AboutMe: FC = () => {
  const { t } = useTranslation()

  return (
    <div id='about-me' className='container mx-auto px-2 py-8 lg:px-0'>
      <div className='grid grid-cols-6 gap-4 px-4 md:px-2 xl:px-0'>
        <div className='col-span-6 md:col-span-3 xl:col-span-2 xl:col-start-2'>
          <img src={profileImg} className='rounded shadow-lg' />
        </div>
        <div className='col-span-6 flex flex-col items-start justify-center text-xl text-white md:col-span-3 xl:col-span-2'>
          <div
            className='mb-4 rounded bg-black p-4 shadow'
            dangerouslySetInnerHTML={{
              __html: t('aboutMe.firstText'),
            }}
          />
          <div
            className='mb-4 rounded bg-black p-4 shadow'
            dangerouslySetInnerHTML={{ __html: t('aboutMe.secondText') }}
          />
          <div
            className='mb-4 rounded bg-black p-4 shadow'
            dangerouslySetInnerHTML={{ __html: t('aboutMe.thirdText') }}
          />
          <div
            className='rounded bg-black p-4 shadow'
            dangerouslySetInnerHTML={{ __html: t('aboutMe.fourthText') }}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
