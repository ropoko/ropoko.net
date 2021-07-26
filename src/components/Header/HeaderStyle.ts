import styled from 'styled-components'

export const StyledHeader = styled.div`
  background: ${props => props.theme.colors.background};
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  a:hover {
    color: ${props => props.theme.colors.text};
    text-decoration: underline;
  }

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
    margin: 0 0.4rem;
  }

  .menu a + a {
    margin-right: 1.2rem;
  }

  @media (max-width: 580px) {
    .social a {
      display: none;
    }
  }
`
