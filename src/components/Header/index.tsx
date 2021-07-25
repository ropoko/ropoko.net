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
          handleDiameter={28}
          offColor="#08f"
          onColor="#0ff"
          offHandleColor="#0ff"
          onHandleColor="#08f"
          height={40}
          width={70}
          borderRadius={6}
          activeBoxShadow="0px 0px 1px 2px #fffc35"
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: 'orange',
                paddingRight: 2
              }}
            >
              Off
            </div>
          }
          checkedIcon={
            <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
              <circle r={3} cx={5} cy={5} />
            </svg>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 20
              }}
            >
              ☹
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                color: 'red',
                fontSize: 18
              }}
            >
              ♥
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />

        {/* <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.primary}
          onColor={colors.secondary}
          className="switch"
        /> */}
      </div>
    </StyledHeader>
  )
}

export default Header
