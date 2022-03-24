import React from 'react';
import { useDropzone } from 'react-dropzone';
import xlsxicon from 'assets/images/icon/icon-xls.svg';
import styled from 'styled-components';
import './DropUpload.scss';
const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  }
  return '#eeeeee';
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

function DropUpload({ onDrop, file, removeFile }) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, acceptedFiles } =
    useDropzone({ onDrop, maxFiles: 1 });

  const files = file?.map((file) => {
    return (
      <div key={file.path} className="item-uploaded mt-20">
        <div className="flex-x align-center">
          <img src={xlsxicon} alt="icon" height="32" width="24" />
          <span className="file-name-custom-upload ml-14 fw-500">{file.path}</span>
        </div>
        <div className="flex-x align-center action">
          <div className="action-icon" onClick={removeFile(file)}>
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <Container
        {...getRootProps({ isFocused, isDragAccept, isDragReject, className: 'dropzoned' })}>
        <input id="file" name="file" {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
      <div>{files}</div>
    </div>
  );
}

export default DropUpload;
