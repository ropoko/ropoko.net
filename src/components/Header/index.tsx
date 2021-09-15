import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { StyledHeader } from './HeaderStyle'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext)

  const img =
    'https://avatars.githubusercontent.com/u/49417432?s=400&u=af9ff6eddae3945c6eb61b4ee4a8db97b426bf7a&v=4'

  const [theme, setTheme] = useState('dark')
  
  function changeTheme() {
    toggleTheme()

    if (theme === "/sun.svg") {
      setTheme("/moon.svg")
    } else {
      setTheme("/sun.svg")
    }
  }

  return (
    <StyledHeader>
      <div>
        <Image id="avatar" src={img} alt="Me" width="52" height="52" />
      
        <button onClick={changeTheme}>
          <img src={theme} alt="theme" />
        </button>
      </div>

      {/* <div className="social">
        <Image id="avatar" src={img} alt="Me" width="52" height="52" /> */}

        {/* <Link href="https://twitter.com/ropoko_">
          <a>
            <Image
              src="/twitter.svg"
              alt="twitter"
              width="24"
              height="24"
            ></Image>
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/rodrigo-maganha/">
          <a>
            <Image
              src="/linkedin.svg"
              alt="Linkedin"
              width="24"
              height="24"
            ></Image>
          </a>
        </Link>

        <Link href="https://github.com/ropoko">
          <a>
            <Image
              src="/github.svg"
              alt="Github"
              width="24"
              height="24"
            ></Image>
          </a>
        </Link> */}
      {/* </div> */}

      <div className="menu">
        <Link href="/projects"> [ Projects ] </Link>
        <Link href="/about"> [ About me ] </Link>

        {/* <Switch
          checked={title === 'dark'}
          onChange={toggleTheme}
          handleDiameter={17}
          offColor="#262a2e"
          onColor="#f6f6f6"
          offHandleColor="#f6f6f6"
          onHandleColor="#262a2e"
          height={26}
          width={54}
          uncheckedIcon={false}
          checkedIcon={false}
        /> */}
      </div>
    </StyledHeader>
  )
}

export default Header
