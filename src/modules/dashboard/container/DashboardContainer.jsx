import React from 'react';
import { useSelector } from 'react-redux';
import StepProcess from '../components/Step/StepProcess';
import { DashboardContainerStyled } from './DashboardContainer.styled';
import ProcessOne from './ProcessOne/ProcessOne';
import ProcessThree from './ProcessThree/ProcessThree';
import ProcessTwo from './ProcessTwo/ProcessTwo';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function DashboardContainer() {
  const { currentStep, loading } = useSelector((state) => state.dashboard);
  const getProcessComponent = (step) => {
    switch (step) {
      case 0:
        return <ProcessOne />;
      case 1:
        return <ProcessTwo />;
      case 2:
        return <ProcessThree />;
      default:
        return null;
    }
  };
  return (
    <Spin spinning={loading}>
      <div className="pa-40">
        <DashboardContainerStyled>
          <StepProcess />
          {getProcessComponent(currentStep)}
        </DashboardContainerStyled>
      </div>
    </Spin>
  );
}
