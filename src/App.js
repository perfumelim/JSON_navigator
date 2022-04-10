import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemList from "components/itemList";

function App() {
  const [fileData, setFileData] = useState({
    file: "",
    fileContent: "{}",
  });
  const [objKeys, setObjKeys] = useState([]);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setFileData({ fileName: file.name, fileContent: reader.result });
    };
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  };

  useEffect(() => {
    const intermediateFormat = Object.values(fileData.fileContent).join("");
    setObjKeys(Object.keys(JSON.parse(intermediateFormat)));
  }, [fileData]);

  return (
    <Container>
      <FileBox>
        <StyledLabel htmlFor="file">🔎</StyledLabel>
        <input type="file" id="file" accept=".json" onChange={onUpload} />
      </FileBox>
      <ItemList objKeys={objKeys} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20vh;
`;

const FileBox = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #525e75 50%, #f1ddbf 50%);
  background-size: 100% 200%;
  transition: all 1s;
  color: #ffffff;
  font-size: 100px;

  &:hover {
    background-position: 0 -100%;

    color: #525e75;
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  color: #fff;
  vertical-align: middle;
  cursor: pointer;
`;
