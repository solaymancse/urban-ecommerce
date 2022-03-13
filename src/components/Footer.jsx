import styled from "styled-components";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Container = styled.div`
  display: flex;

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    color: #333;
    margin-bottom: 30px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;

`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Urban.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
          architecto repudiandae saepe nostrum necessitatibus alias incidunt.
          Animi
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999"> 
            <GrFacebookOption />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <AiOutlineInstagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <AiOutlineTwitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <BsPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};
