import { useState } from 'react'
import { Welcome } from './components/welcome'
import { Menu } from './components/menu'
import { Alphabet } from './components/alphabet'
import { Tone } from './components/tone'

function App() {

  const [nav, setNav] = useState<number>(0)

  const handleNav = (navTo: number) => {
    setNav(navTo)
  }

  return (
    <>
      <Welcome hidden={nav !== 0} handleNav={handleNav} />
      <Menu hidden={nav !== 1} handleNav={handleNav} />
      <Alphabet hidden={nav !== 2} handleNav={handleNav} />
      <Tone hidden={nav !== 3} handleNav={handleNav} />
    </>
  )
}

export default App
