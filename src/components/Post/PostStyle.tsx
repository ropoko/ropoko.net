import styled from 'styled-components'

export const PostStyled = styled.div`
  width: 60%;
  margin: 2.4rem auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme.colors.highlight};
  }

  header a {
    transition: font-size 0.2s;
  }

  header a:hover {
    text-decoration: underline;
  }

  main {
    margin: 1.6rem 0;
    text-align: justify;
  }

  main h1 {
    font-size: 3.2rem;
    text-align: left;
    margin: 1rem 0;
  }
`
