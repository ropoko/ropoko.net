import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { StyledHeader } from './HeaderStyle'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  const img =
    'https://avatars.githubusercontent.com/u/49417432?s=400&u=af9ff6eddae3945c6eb61b4ee4a8db97b426bf7a&v=4'

  return (
    <StyledHeader>
      <div className="social">
        <Image id="avatar" src={img} alt="Me" width="52" height="52" />

        <Link href="https://www.linkedin.com/in/rodrigo-maganha/">
          <a>
            <Image
              src="/linkedin.png"
              alt="Linkedin"
              width="40"
              height="40"
            ></Image>
          </a>
        </Link>

        <Link href="https://github.com/ropoko">
          <a>
            <Image
              src="/github.png"
              alt="Github"
              width="40"
              height="40"
            ></Image>
          </a>
        </Link>

        <Link href="https://twitter.com/ropoko_">
          <a>
            <Image
              src="/twitter.png"
              alt="twitter"
              width="40"
              height="40"
            ></Image>
          </a>
        </Link>
      </div>

      <div className="menu">
        <Link href="/projects"> [ Projects ] </Link>
        <Link href="/about"> [ About me ] </Link>

        <Switch
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
        />
      </div>
    </StyledHeader>
  )
}

export default Header
