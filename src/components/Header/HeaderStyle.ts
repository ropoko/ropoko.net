import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.8rem 0;

  .theme-switch {
    display: flex;
    align-items: center;
  }

  .theme-switch img {
    border-radius: 1rem;
  }

  .theme-switch button {
    width: 24px;
    height: 24px;
    padding: 0 0 0 1rem;
    border: none;
    background: transparent;
    outline: none;
  }

  .theme-switch button img {
    width: inherit;
    height: inherit;
  }

  .menu a {
    margin: 0 0.3rem;
  }

  .menu a:hover {
    text-decoration: underline;
  }
`
