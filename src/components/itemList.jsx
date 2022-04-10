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
  display: flex;
  justify-content: center;
  width: 380px;
`;

const StyledUl = styled.ul``;

const StyledLi = styled.li`
  display: flex;
  height: 2.25rem;
  gap: 0.75rem;
  align-items: center;
`;
