import styled from 'styled-components'

export const ListPostStyle = styled.div`
  margin: 3rem auto;
  width: 60%;
  min-width: 60%;
  max-width: 95%;

  h1 {
    font-size: 3.2rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer .tags a {
    padding: 0.2rem;
    margin: 0 0.2rem;
    text-decoration: none;

    color: #d2259a;
    border: #cfcfcf 1px solid;
  }

  a {
    color: ${props => props.theme.colors.highlight};
    text-decoration: underline;
    transition: font-size 0.2s;
  }

  a:hover {
    font-size: 1.6rem;
  }

  @media (max-width: 1080px) {
    width: 80%;
  }

  @media (max-width: 720px) {
    width: 95%;
  }
`
