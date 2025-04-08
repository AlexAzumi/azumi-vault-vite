import { FC } from 'react'

import profileImg from '../../assets/img/profile.jpg'

const AboutMe: FC = () => {
  return (
    <div id='about-me' className='container mx-auto px-2 py-8 lg:px-0'>
      <div className='grid grid-cols-6 gap-4'>
        <div className='lg:col-span-1' />
        <div className='col-span-2'>
          <img src={profileImg} className='rounded shadow-lg' />
        </div>
        <div className='col-span-2 flex translate-y-6 flex-col items-start text-xl text-white'>
          <div className='mb-4 -translate-x-10 rounded bg-black p-4 shadow'>
            ¡Hola!, mi nombre es{' '}
            <div className='inline-block text-green-500'>Alejandro Suárez</div>.
          </div>
          <div className='mb-4 -translate-x-10 rounded bg-black p-4 shadow'>
            Soy{' '}
            <div className='inline-block text-blue-500'>desarrollador web</div>{' '}
            desde 2018.
          </div>
          <div className='mb-4 -translate-x-10 rounded bg-black p-4 shadow'>
            Tengo más de dos años de experiencia laboral trabajando con{' '}
            <div className='inline-block text-green-500'>React</div>,{' '}
            <div className='inline-block text-blue-500'>Tailwind</div>,{' '}
            <div className='inline-block text-green-500'>Node.js</div> y{' '}
            <div className='inline-block text-blue-500'>TypeScript</div>.
          </div>
          <div className='-translate-x-10 rounded bg-black p-4 shadow'>
            También tengo experiencia usando herramientas como{' '}
            <div className='inline-block text-green-500'>Unity Engine</div>,{' '}
            <div className='inline-block text-blue-500'>React Native</div>,{' '}
            <div className='inline-block text-green-500'>Git</div>,{' '}
            <div className='inline-block text-blue-500'>
              bases de datos relacionales
            </div>{' '}
            y <div className='inline-block text-green-500'>C#</div>.
          </div>
        </div>
        <div className='lg:col-span-1' />
      </div>
    </div>
  )
}

export default AboutMe
