import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
    background-color: #FF6362;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Annoucment = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $100

    </Container>
  )
}
