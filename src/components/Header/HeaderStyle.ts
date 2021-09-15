import styled from 'styled-components'

export const StyledHeader = styled.div`
  background: ${props => props.theme.colors.header};
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.7rem;
  box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.25);

  div:not(.menu) {
    display: flex;
    align-items:center;
  }

  div:not(.menu) button {
    margin-left: 1rem;
    border: none;
    background: transparent;
    width: 24px;
    height: 24px;
  }

  div:not(.menu) button img {
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

  .menu a {
    margin: 0 0.4rem;
  }

  @media (max-width: 580px) {
    .social a {
      display: none;
    }
  }
`
