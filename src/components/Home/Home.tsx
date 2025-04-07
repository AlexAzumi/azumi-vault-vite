import { Canvas, ThreeElements, useFrame } from '@react-three/fiber'
import { FC, useRef } from 'react'
import * as THREE from 'three'

const Home: FC = () => {
  return (
    <div className='relative flex h-screen w-screen max-w-full'>
      {/* Three.js canvas */}
      <div className='container mx-auto'>
        <Canvas
          camera={{
            fov: 60,
          }}
        >
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[5, 5, 5]}
            angle={0.25}
            penumbra={1}
            decay={0}
            intensity={Math.PI * 4}
          />
          <Box position={[2.3, -0.2, 0]} rotation={[0.1, 0, 0.1]} />
        </Canvas>
      </div>
      {/* On top data */}
      <div className='absolute top-20 right-0 bottom-20 left-0 flex'>
        <div className='container mx-auto flex flex-col items-start justify-center'>
          <h1 className='mb-4 text-7xl font-semibold text-green-600'>
            Alejandro Suárez
          </h1>
          <h3 className='text-xl text-white'>Desarrollador de software</h3>
        </div>
      </div>
    </div>
  )
}

const Box = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    meshRef.current.rotateY(delta * 0.2)
  })

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[1.8]} />
      <meshStandardMaterial
        color='green'
        wireframe={true}
        wireframeLinewidth={1}
      />
    </mesh>
  )
}

export default Home
