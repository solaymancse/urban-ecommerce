import styled from "styled-components";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(0, 0, 0, 0.2);
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  background-color: #f5fbfd;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
`;
const Circle = styled.div``;
const Image = styled.img`
  height: 75%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  padding: 10px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <AiOutlineShoppingCart />
        </Icon>
        <Icon>
          <AiOutlineSearch />
        </Icon>
        <Icon>
          <AiOutlineHeart />
        </Icon>
      </Info>
    </Container>
  );
};
