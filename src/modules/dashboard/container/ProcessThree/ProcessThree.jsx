import DashboardAction from 'modules/dashboard/action/action';
import BarChart from 'modules/dashboard/components/BarChart/BarChart';
import BarChartSearch from 'modules/dashboard/components/BarChartSearch/BarChartSearch';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonStyled } from 'stylesheet/Button/Button.styled';
import './ProcessThree.scss';
import ExportDropdown from 'modules/dashboard/components/ExportDropdown/ExportDropdown';

export default function ProcessThree() {
  const dispatch = useDispatch();
  const { data: dataUpload } = useSelector((state) => state.dashboard.upload);
  const { chart, maxRange } = useSelector((state) => state.dashboard.stepThree);
  React.useEffect(() => {
    dispatch(DashboardAction.getChartData(dataUpload));
  }, []);

  const [file, setFile] = useState(null);
  const [key, setKey] = useState(Date.now());
  const ref = useRef();

  useEffect(() => {
    if (file) importExcelDownload(file);
  }, [file]);

  const onChangeInputFile = (e) => {
    const arrayFile = [...e.target.files];
    setFile(arrayFile.slice(-1));
    setKey(Date.now());
  };

  const importExcelDownload = (file) => {
    dispatch(DashboardAction.importExcelAndDownload(file));
  };

  const exportExcelDownload = () => {
    console.log('dispatch');
    dispatch(DashboardAction.downloadExcelProcessThree(chart));
  };

  const onButtonClick = () => {
    // `current` points to the mounted file input element

    if (ref.current) ref.current.click();
    // ref.current;
  };

  return (
    <div className="pt-20 plr-40 pb-100 process-three-container">
      <div className="flex-x justify-between align-center w-100">
        <BarChartSearch dataSearch={dataUpload} />
        <div className="flex-x" style={{ paddingRight: '12vh' }}>
          <ExportDropdown
            message={
              <input
                key={key}
                ref={ref}
                type="file"
                name="file"
                multiple
                onChange={onChangeInputFile}
              />
            }
            onClick={onButtonClick}
            iconClass="fa-solid fa-file-import"
          />
          <div className="ml-20">
            <ExportDropdown
              message={'Export File'}
              onClick={exportExcelDownload}
              iconClass="fa-solid fa-file-export"
            />
          </div>
        </div>
      </div>
      <BarChart data={chart} range={[0, maxRange]} />
    </div>
  );
}
