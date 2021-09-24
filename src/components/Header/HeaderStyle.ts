import styled from 'styled-components'

export const StyledHeader = styled.div`
  background: ${props => props.theme.colors.header};
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.7rem;
  box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.25);

  .theme-switch {
    display: flex;
    align-items:center;
  }

  .theme-switch button {
    margin-left: 1rem;
    border: none;
    background: transparent;
    width: 24px;
    height: 24px;
  }

  .theme-switch button img {
    width: inherit;
  }

  a:hover {
    color: ${props => props.theme.colors.text};
    text-decoration: underline;
  }

  #avatar {
    border-radius: 10px;
  }

  a:first-child() {
    margin-left: 1rem;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu select {
    padding: 0 0.2rem;
    outline: none;
    border: none;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.header};

    margin: 0 0.4rem;
    cursor: pointer;
  }

  .menu select option {
    text-align:center;
  }

  .menu select:hover {
    text-decoration: underline;
  }

  .menu a {
    margin: 0 0.4rem;
  }

  @media (max-width: 580px) {
    .social a {
      display: none;
    }
  }
`
