import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   flex: 1;
   margin: 3px;
   height: 70vh;
   position: relative;
   
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
const Title = styled.h1`
    color: #fff;
    font-weight: 600;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    color: gray;
    cursor: pointer;

    &:hover{
        background-color: #FF6362;
        transition: all .5s;
        color: #fff;
    }
`;

export const CatagoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>

    </Container>
  )
}
