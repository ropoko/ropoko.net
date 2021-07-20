import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { StyledHeader } from './HeaderStyle'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <StyledHeader>
      <h3> oi sou o header </h3>
      <Switch
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
      />
    </StyledHeader>
  )
}

export default Header
