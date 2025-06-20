import { faArrowDown, faIdCardClip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useCallback } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import profileImg from '../../assets/img/profile.jpg'

const AboutMe: FC = () => {
  const { t } = useTranslation()

  const hightlightElement = <div className='inline-block text-green-600' />

  const scrollToElement = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className='container mx-auto my-8 flex min-h-screen flex-col lg:px-0'>
      <div id='about-me' className='-translate-y-26' />

      <h1 className='relative mb-10 flex justify-center text-center text-2xl font-extrabold text-gray-900 uppercase md:text-3xl lg:text-4xl'>
        <div className='z-10 flex items-center justify-center rounded-full bg-green-600 px-10 py-4'>
          <FontAwesomeIcon icon={faIdCardClip} className='mr-4' />
          {t('aboutMe.title')}
        </div>
        <hr className='absolute top-1/2 w-full translate-y-[-2px] rounded-full border-2 border-green-600' />
      </h1>

      <div className='grid grid-cols-6 gap-4 px-4 md:px-2 xl:px-0'>
        <div className='col-span-6 md:col-span-3 xl:col-span-2 xl:col-start-2'>
          <img src={profileImg} className='rounded drop-shadow-xl/50' />
        </div>
        <div className='col-span-6 flex flex-col items-start justify-center text-xl text-white md:col-span-3 xl:col-span-2'>
          <div className='mb-4 rounded bg-black p-4 shadow'>
            <Trans
              i18nKey='aboutMe.firstText'
              components={{
                hightlight: hightlightElement,
              }}
            />
          </div>
          <div className='mb-4 rounded bg-black p-4 shadow'>
            <Trans
              i18nKey='aboutMe.secondText'
              components={{
                hightlight: hightlightElement,
              }}
            />
          </div>
          <div className='mb-4 rounded bg-black p-4 shadow'>
            <Trans
              i18nKey='aboutMe.thirdText'
              components={{
                hightlight: hightlightElement,
              }}
            />
          </div>
          <div className='mb-4 rounded bg-black p-4 shadow'>
            <Trans
              i18nKey='aboutMe.fourthText'
              components={{
                hightlight: hightlightElement,
              }}
            />
          </div>
        </div>
      </div>

      <div className='mt-12 mb-8 flex justify-center'>
        <div
          className='flex animate-bounce items-center justify-center p-4 text-white hover:cursor-pointer'
          onClick={() => scrollToElement('my-projects')}
        >
          <FontAwesomeIcon icon={faArrowDown} className='mr-3' />
          {t('aboutMe.checkProjects')}
          <FontAwesomeIcon icon={faArrowDown} className='ml-3' />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
