import React, { useState, useEffect } from "react";

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
    console.log("should be valid", intermediateFormat);
    setObjKeys(Object.keys(JSON.parse(intermediateFormat)));

    console.log("key", objKeys);
    console.log("file Data", fileData.fileContent);
  }, [fileData]);

  return (
    <div className="App">
      <form id="upload">
        <label htmlFor="file">File to upload</label>
        <input type="file" id="file" accept=".json" onChange={onUpload} />
        <button>Upload</button>
      </form>
      <p>{objKeys}</p>
    </div>
  );
}

export default App;
