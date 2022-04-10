import React from "react";
import styled from "styled-components";

function ItemList({ objKeys }) {
  return (
    <Container>
      <StyledUl>
        {objKeys.map((item) => (
          <StyledLi>{item}</StyledLi>
        ))}
      </StyledUl>
    </Container>
  );
}

export default ItemList;

const Container = styled.div`
  margin-left: 27px;
  width: 380px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const StyledLi = styled.li`
  padding: 10px;
  font-size: 20px;
  background-color: #f1ddbf;
  width: 100%;
  border-radius: 12px;
`;
