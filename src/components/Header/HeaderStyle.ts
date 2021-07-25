import styled from 'styled-components'

export const StyledHeader = styled.div`
  background: ${props => props.theme.colors.background};
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .social #avatar {
    border-radius: 1.6rem;
  }

  .social > a {
    margin-left: 1rem;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu a {
    margin: 0 0.8rem;
  }
`
