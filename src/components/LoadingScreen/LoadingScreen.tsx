import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

const LoadingScreen: FC = () => {
  return (
    <div className='w-max-full text-whit flex h-screen w-screen flex-col items-center justify-center text-green-500'>
      <FontAwesomeIcon
        className='mb-6'
        icon={faSpinner}
        size='6x'
        spinPulse={true}
      />
      <p className='text-3xl'>Loading...</p>
    </div>
  )
}

export default LoadingScreen
