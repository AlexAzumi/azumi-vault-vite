import {
  faArrowUpRightFromSquare,
  faDiagramProject,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'

import PROJECTS from '../../data/projects.json'

const MyProjects: FC = () => {
  const { t } = useTranslation()

  return (
    <div className='container mx-auto my-8 flex min-h-screen flex-col justify-center'>
      <div id='my-projects' className='-translate-y-26' />

      <h1 className='relative mb-10 flex justify-center text-center text-2xl font-extrabold text-gray-900 uppercase md:text-3xl lg:text-4xl'>
        <div className='z-10 flex items-center justify-center rounded-full bg-green-600 px-10 py-4'>
          <FontAwesomeIcon icon={faDiagramProject} className='mr-4' />
          {t('myProjects.title')}
        </div>
        <hr className='absolute top-1/2 w-full translate-y-[-2px] rounded-full border-2 border-green-600' />
      </h1>

      {PROJECTS.map((item, idx) => (
        <ProjectItem key={`project-${idx}`} t={t} {...item} />
      ))}
    </div>
  )
}

interface ProjectItemProps {
  name: string
  cover: string
  descriptionKey: string
  url: string
  videoUrl: string
  t: TFunction<'translation', undefined>
}

const ProjectItem: FC<ProjectItemProps> = ({
  name,
  cover,
  descriptionKey,
  url,
  videoUrl,
  t,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [videoPaused, setVideoPaused] = useState(true)

  const togglePlayback = (play?: boolean) => {
    if (!videoRef.current) return

    if (videoRef.current.paused || play) {
      videoRef.current.play()
      setVideoPaused(false)
    } else {
      videoRef.current.pause()
      setVideoPaused(true)
    }
  }

  return (
    <div className='group grid grid-cols-1 px-4 last-of-type:mb-0 lg:mb-6 lg:grid-cols-2'>
      <div
        className='group/thumbnail relative lg:translate-x-3 lg:group-even:order-2 lg:group-even:-translate-x-3'
        {...(videoUrl
          ? {
              onMouseEnter: () => togglePlayback(true),
              onMouseLeave: () => togglePlayback(false),
              onClick: () => togglePlayback(true),
            }
          : null)}
      >
        <img
          src={cover}
          className={`aspect-video rounded opacity-100 transition-opacity ${!videoPaused && 'opacity-0!'}`}
        />

        {videoUrl && (
          <>
            <video
              ref={videoRef}
              className='absolute top-0 -z-10 rounded'
              loop={true}
              muted={true}
              preload='auto'
            >
              <source src={videoUrl} type='video/mp4' />
            </video>
            <div
              className={`absolute right-0 bottom-0 left-0 bg-black/30 p-3 text-white transition-opacity ${!videoPaused && 'opacity-0!'}`}
            >
              {t('myProjects.hoverForPreview')}
            </div>
          </>
        )}
      </div>
      <div className='z-10 flex flex-col py-6 lg:-translate-x-3 lg:items-start lg:group-even:order-1 lg:group-even:translate-x-3 lg:group-even:items-end'>
        <div className='mb-4 rounded bg-black p-4 lg:group-even:text-right'>
          <h2 className='mb-4 text-3xl font-extrabold text-green-600'>
            {name}
          </h2>
          <p
            className='text-base/tight text-white'
            dangerouslySetInnerHTML={{ __html: t(descriptionKey) }}
          />
        </div>
        {url && (
          <div className='bg-back group/link rounded bg-black text-center text-green-600'>
            <a href={url} target='_blank' className='block p-4'>
              {url} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              <hr className='w-0 transition-all group-hover/link:w-full' />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyProjects
