import React from 'react';
import { ButtonStyled } from 'stylesheet/Button/Button.styled';
import DropUpload from 'modules/dashboard/components/DropUpload/DropUpload';
import './ProcessOne.scss';
import { useDispatch, useSelector } from 'react-redux';
import DashboardAction from 'modules/dashboard/action/action';
import { FORMAT_DATE } from 'helper/constant';
import moment from 'moment';
import { getCurrentStep } from 'modules/dashboard/saga/dashboardSaga';

export default function ProcessOne() {
  const dispatch = useDispatch();
  const [file, setFile] = React.useState([]);
  const onDrop = React.useCallback(
    (acceptedFiles) => {
      setFile([...acceptedFiles]);
    },
    [file]
  );
  const removeFile = (fileRemove) => () => {
    const newFiles = [...file];
    newFiles.splice(newFiles.indexOf(fileRemove), 1);
    setFile(newFiles);
  };

  const params = {
    name: '',
    date: moment().format(FORMAT_DATE),
    clinic: ''
  };
  const currentStep = useSelector(getCurrentStep);

  const handleSubmit = () => {
    dispatch(DashboardAction.doingStepOne(file[0], params));
    dispatch(DashboardAction.updateProcess(currentStep + 1));
  };

  return (
    <div className="pa-40 process-one-container">
      <div className="mx-auto w-50">
        <div className="mb-5 row d-flex mx-auto" style={{ marginTop: '10em' }}>
          <DropUpload onDrop={onDrop} file={file} removeFile={removeFile} />
        </div>
      </div>
      <ButtonStyled
        onClick={handleSubmit}
        className="process-next"
        primary
        disabled={file.length === 0 ? true : false}>
        Next
      </ButtonStyled>
    </div>
  );
}
