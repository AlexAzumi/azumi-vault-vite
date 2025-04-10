import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { MyProjects } from './components/MyProjects'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <AboutMe />

      <MyProjects />

      <Contact />

      <Footer />
    </>
  )
}

export default App
