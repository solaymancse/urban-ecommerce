import styled  from "styled-components"

import { categories } from '../data'
import { CatagoryItem } from './CatagoryItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

export const Catagories = () => {
  return (
    <Container>
    {categories.map((item)=> (
        <CatagoryItem item={item} key={item.id}/>
    ))}
    </Container>
  )
}
