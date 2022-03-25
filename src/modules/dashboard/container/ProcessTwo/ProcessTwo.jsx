import { typeModal } from 'helper/constant';
import { successNotification } from 'helper/notification';
import DashboardAction from 'modules/dashboard/action/action';
import ExportDropdown from 'modules/dashboard/components/ExportDropdown/ExportDropdown';
import ModalAntd from 'modules/dashboard/components/Modal/ModalAntd';
import SearchFilter from 'modules/dashboard/components/SearchFilter/SearchFilter';
import TableAntd from 'modules/dashboard/components/Table/TableAntd';
import { getCurrentStep } from 'modules/dashboard/saga/dashboardSaga';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonStyled } from 'stylesheet/Button/Button.styled';
import './ProcessTwoContainer.scss';
export default function ProcessTwo() {
  const { data, total, page } = useSelector((state) => state.dashboard.stepTwo);
  const { file } = useSelector((state) => state.dashboard.stepOne);
  const { isOpen, type, value } = useSelector((state) => state.dashboard.modal);
  const { data: uploadExcel } = useSelector((state) => state.dashboard.upload)

  const dispatch = useDispatch();
  const onChangePage = (page) => {
    dispatch(DashboardAction.onChangePage(page));
    dispatch(DashboardAction.fetchWhenChangePage());
  };
  const currentStep = useSelector(getCurrentStep);

  const onCancelModal = () => {
    if (isOpen) dispatch(DashboardAction.cancelModal());
  };

  const onSubmit = (value) => {
    if (type === typeModal.edit) {
      dispatch(DashboardAction.editRow(value));
      dispatch(DashboardAction.cancelModal());
      successNotification('Update data successfully');
    }
  };

  const onNext = () => {
    dispatch(DashboardAction.updateProcess(currentStep + 1));
  };

  const onPrev = () => {
    dispatch(DashboardAction.updateProcess(currentStep - 1));
  };

  const downloadExcel = (data) => {
    dispatch(DashboardAction.downloadExcel(data))
  }

  return (
    <div className="pt-40 plr-40 process-two-container">
      <SearchFilter />
      <TableAntd data={data} onChangePage={onChangePage} total={total} page={page} downloadExcel={() => downloadExcel(uploadExcel)} />
      <div className="process-next flex-x align-center">
        <ButtonStyled small onClick={onPrev} primary className="mr-15">
          Previous
        </ButtonStyled>
        <ButtonStyled small onClick={onNext} primary>
          Next
        </ButtonStyled>
      </div>
      <ModalAntd
        isOpen={isOpen}
        onSubmit={onSubmit}
        onCancel={onCancelModal}
        data={value}
        type={type}
      />
    </div>
  );
}
