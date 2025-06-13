import {
  faGithub,
  faItchIo,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGLTF } from '@react-three/drei'
import { Canvas, ThreeElements, useFrame, useThree } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { FC, Suspense, useCallback, useRef } from 'react'
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
      <div className='animate-fade-in container mx-auto opacity-0'>
        <Canvas
          camera={{
            fov: 60,
          }}
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
            failIfMajorPerformanceCaveat: true,
          }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener('webglcontextlost', (event) => {
              event.preventDefault()
              console.warn('WebGL context lost. Attempting to restore...')
            })
            gl.domElement.addEventListener('webglcontextrestored', () => {
              console.log('WebGL context restored')
            })
          }}
        >
          <Suspense fallback={null}>
            <spotLight
              position={[1, 2, 10]}
              angle={0.5}
              penumbra={1}
              decay={0}
              intensity={Math.PI * 0.5}
            />
            <ComputerMesh rotation={[0, 0, 0]} />
          </Suspense>
          <EffectComposer>
            <Bloom
              intensity={0.1}
              blurPass={undefined}
              kernelSize={3}
              luminanceThreshold={0.5}
              luminanceSmoothing={0.5}
            />
          </EffectComposer>
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
              className='animate-bounce rounded bg-black/40 px-3 py-1 backdrop-blur-sm hover:cursor-pointer md:bg-transparent md:p-0'
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

const ComputerMesh = (props: ThreeElements['mesh']) => {
  const computer = useGLTF('/models/retro-computer.glb')

  const meshRef = useRef<THREE.Mesh>(null!)

  const { width } = useThree((state) => state.viewport)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotateY(delta * -0.4)
    }
  })

  return (
    <mesh {...props} ref={meshRef} position={[width / 5, -1.3, 0]}>
      <primitive object={computer.scene} scale={4} />
    </mesh>
  )
}

export default Home
