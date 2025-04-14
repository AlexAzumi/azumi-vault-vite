import {
  faArrowUpRightFromSquare,
  faDiagramProject,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import PROJECTS from '../../data/projects.json'

const MyProjects: FC = () => {
  const { t } = useTranslation()

  return (
    <div className='container mx-auto my-8 flex min-h-screen flex-col justify-center'>
      <div id='my-projects' className='-translate-y-26' />

      <h1 className='text-shadow-xl relative mb-10 flex justify-center text-center text-2xl font-extrabold text-gray-900 uppercase md:text-3xl lg:text-4xl'>
        <div className='z-10 flex items-center justify-center rounded bg-green-600 px-10 py-4'>
          <FontAwesomeIcon icon={faDiagramProject} className='mr-4' />
          {t('myProjects.title')}
        </div>
        <hr className='absolute top-1/2 w-full rounded border-2 border-green-600' />
      </h1>

      {PROJECTS.map((item, idx) => (
        <div
          key={`project-${idx}`}
          className='group grid grid-cols-1 px-4 last-of-type:mb-0 lg:mb-6 lg:grid-cols-2'
        >
          <div className='lg:translate-x-3 lg:group-even:order-2 lg:group-even:-translate-x-3'>
            <img src={item.cover} className='aspect-video rounded shadow-2xl' />
          </div>
          <div className='z-10 flex flex-col py-6 lg:-translate-x-3 lg:items-start lg:group-even:order-1 lg:group-even:translate-x-3 lg:group-even:items-end'>
            <div className='mb-4 rounded bg-black p-4 lg:group-even:text-right'>
              <h2 className='mb-4 text-3xl font-extrabold text-green-600 shadow-2xl'>
                {item.name}
              </h2>
              <p
                className='text-base/tight text-white'
                dangerouslySetInnerHTML={{ __html: t(item.descriptionKey) }}
              />
            </div>
            {item.url && (
              <div className='bg-back group/link rounded bg-black text-center text-green-600'>
                <a href={item.url} target='_blank' className='block p-4'>
                  {item.url} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  <hr className='w-0 transition-all group-hover/link:w-full' />
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyProjects
