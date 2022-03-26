import React from 'react';
import { Steps, Divider } from 'antd';
import './StepProcess.scss';
import { useDispatch, useSelector } from 'react-redux';
import DashboardAction from 'modules/dashboard/action/action';
const { Step } = Steps;

export default function StepProcess() {
  const {
    currentStep,
    stepOne: { status: statusOne, file },
    stepTwo: { data, status: statusTwo }
  } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  const onChange = (current) => {
    dispatch(DashboardAction.updateProcess(current));
  };

  return (
    <Steps
      type="navigation"
      current={currentStep}
      onChange={onChange}
      className="site-navigation-steps">
      <Step status={statusOne} title="Step 1" disabled={statusOne === 'finish' ? true : false} />
      {/* <Step status="process" title="Step 2" /> */}
      <Step status={statusTwo} title="Step 2" disabled={!file?.path ? true : false} />
      <Step status="wait" title="Step 3" />
    </Steps>
  );
}
