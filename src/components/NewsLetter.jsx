
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';

import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    border: none;
    flex: 9;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    background-color: #FF6362;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products</Desc>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <AiOutlineSend/>
            </Button>
        
        </InputContainer>

    </Container>
  )
}
