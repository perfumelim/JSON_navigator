import React, { useState } from "react";
import styled from "styled-components";

function ItemList({ flatObj }) {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const onLoadMore = (key) => {
    const matchValue = flatObj[key];
    setIsClicked(true);
    setSelectedValue(matchValue);

    console.log("log", flatObj[key]);
  };

  return (
    <Container>
      <StyledUl>
        {Object.keys(flatObj).map((key) => (
          <>
            <StyledLi key={key}>
              <button
                key={key}
                onClick={() => {
                  onLoadMore();
                }}
              >
                <p>{key}</p>
                <span>{typeof flatObj[key] !== "string" && "▶"}</span>
              </button>
            </StyledLi>
            {isClicked && <p>{selectedValue}</p>}
          </>
        ))}
      </StyledUl>
    </Container>
  );
}

export default ItemList;

const Container = styled.div`
  margin-left: 27px;
  width: 360px;
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
  background-color: #f1ddbf;
  width: 100%;
  border-radius: 12px;

  button {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    width: 100%;
  }
`;
