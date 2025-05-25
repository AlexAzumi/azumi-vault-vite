import {
  faGithub,
  faItchIo,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Canvas, ThreeElements, useFrame, useThree } from '@react-three/fiber'
import { FC, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as THREE from 'three'

const Home: FC = () => {
  const { t } = useTranslation()

  const scrollToElement = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div id='home' className='relative flex h-screen w-screen max-w-full'>
      {/* Three.js canvas */}
      <div className='container mx-auto'>
        <Canvas
          camera={{
            fov: 60,
          }}
        >
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[1, 2, 10]}
            angle={0.3}
            penumbra={1}
            decay={0}
            intensity={Math.PI * 4}
          />
          <Box position={[0, 0, 0]} rotation={[0.1, 0, 0.1]} />
        </Canvas>
      </div>
      {/* On top data */}
      <div className='absolute top-20 right-0 bottom-20 left-0 flex'>
        <div className='container mx-auto flex -translate-y-10 flex-col items-start justify-center px-6'>
          <h1 className='mb-2 text-7xl font-semibold text-green-600 text-shadow-lg/50'>
            Alejandro Suárez
          </h1>
          <h3 className='mb-6 text-xl text-white text-shadow-lg/40'>
            {t('home.career')}
          </h3>
          <div className='text-3xl lg:text-2xl'>
            <a
              href='https://www.linkedin.com/in/alexazumi/'
              target='_blank'
              className='mr-4 text-gray-400 transition-colors hover:text-white'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href='https://github.com/alexazumi'
              target='_blank'
              className='mr-4 text-gray-400 transition-colors hover:text-white'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href='https://alexazumi.itch.io/'
              target='_blank'
              className='mr-4 text-gray-400 transition-colors hover:text-white'
            >
              <FontAwesomeIcon icon={faItchIo} />
            </a>
          </div>
          {/* More information */}
          <div className='flex translate-y-20 self-center text-lg text-white md:self-auto'>
            <div
              className='animate-bounce hover:cursor-pointer'
              onClick={() => scrollToElement('about-me')}
            >
              <FontAwesomeIcon icon={faArrowDown} className='mr-3' />
              {t('home.scrollForMore')}
              <FontAwesomeIcon icon={faArrowDown} className='ml-3' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Box = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  const { width } = useThree((state) => state.viewport)

  useFrame((_, delta) => {
    meshRef.current.rotateY(delta * 0.1)
  })

  return (
    <mesh {...props} ref={meshRef} position={[width / 4.5, 0, 0]}>
      <sphereGeometry args={[1.8]} />
      <meshStandardMaterial color='green' wireframe={true} />
    </mesh>
  )
}

export default Home
