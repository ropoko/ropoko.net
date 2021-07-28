import styled from 'styled-components'

export const PostStyle = styled.div`
  margin: 3rem auto;
  width: 60%;

  // h1 {
  //  font-size: ;
  // }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: ${props => props.theme.colors.highlight};
    text-decoration: underline;
  }
`
