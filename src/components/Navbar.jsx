import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Badge } from "@material-ui/core";

export const Navbar = () => {
  const Container = styled.div`
    height: 60px;
  `;
  const Wrapper = styled.div`
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;
  const Input = styled.input`
    border: none;
  `;
  const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-content: center;
    padding: 5px;
    margin-left: 25px;
  `;
  const Center = styled.div`
    flex: 1;
  `;
  const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
  `;
  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
  `;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color: 'gray', fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Urban.</Logo>
        </Center>
        <Right>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
