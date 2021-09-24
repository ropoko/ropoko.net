import React, { useState } from 'react'
import { StyledHeader } from './HeaderStyle'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const img =
    'https://avatars.githubusercontent.com/u/49417432?s=400&u=af9ff6eddae3945c6eb61b4ee4a8db97b426bf7a&v=4'

  const [theme, setTheme] = useState('/sun.svg')

  function changeTheme() {
    toggleTheme()

    setTheme(theme === '/sun.svg' ? '/moon.svg' : '/sun.svg')
  }

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    window.location.href = event.target.value
  }

  return (
    <StyledHeader>
      <div className="theme-switch">
        <Image id="avatar" src={img} alt="Me" width="52" height="52" />

        <button onClick={changeTheme}>
          <img src={theme} alt="theme" />
        </button>
      </div>

      <div className="menu">
        <select id="tags" onChange={handleChange}>
          <option disabled selected hidden> [ Tags ] </option>
          <option value="https://google.com"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
        </select>


        <Link href="/projects"> [ Projects ] </Link>
        <Link href="/about"> [ About me ] </Link>
      </div>
    </StyledHeader>
  )
}

export default Header
