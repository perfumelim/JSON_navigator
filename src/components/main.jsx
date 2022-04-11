import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemList from "components/itemList";
import { convertObj } from "utils/convertObj";

function Main() {
  const [fileData, setFileData] = useState({
    file: "",
    fileContent: "{}",
  });
  const [flatObj, setFlatObj] = useState({});
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setFileData({ fileName: file.name, fileContent: reader.result });
      setIsFileUploaded(true);
    };
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  };

  console.log("is", flatObj.name);

  useEffect(() => {
    const intermediateFormat = Object.values(fileData.fileContent).join("");
    setFlatObj(convertObj(JSON.parse(intermediateFormat)));
  }, [fileData]);

  return (
    <Container>
      <FileWrapper>
        <h2>JSON navigator</h2>
        <FileBox>
          <StyledLabel htmlFor="file">🔎</StyledLabel>
          <input type="file" id="file" accept=".json" onChange={onUpload} />
        </FileBox>
      </FileWrapper>
      {isFileUploaded && <ItemList flatObj={flatObj} />}
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20vh;
  width: 100vw;
`;

const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 450px;
  border-radius: 15px;
  background-color: #525e75;

  h2 {
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 60px;
  }
`;

const FileBox = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 100px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 3px solid #f1ddbf;
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
  font-size: 5rem;
`;
