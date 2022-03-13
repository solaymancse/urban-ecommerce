import styled from 'styled-components'


const Container = styled.div``;
const Circle = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Icon = styled.div``;

export const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon></Icon>
            
        </Info>

    </Container>
  )
}
