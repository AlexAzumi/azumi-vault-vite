import { AnimatePresence } from 'motion/react'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import { LoadingScreen } from './components/LoadingScreen'

import './i18n.ts'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <AnimatePresence mode='wait'>
        <App />
      </AnimatePresence>
    </Suspense>
  </StrictMode>,
)
