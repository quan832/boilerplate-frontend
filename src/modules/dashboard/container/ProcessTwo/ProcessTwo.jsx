import DashboardAction from 'modules/dashboard/action/action';
import ExportDropdown from 'modules/dashboard/components/ExportDropdown/ExportDropdown';
import ModalAntd from 'modules/dashboard/components/Modal/ModalAntd';
import SearchFilter from 'modules/dashboard/components/SearchFilter/SearchFilter';
import TableAntd from 'modules/dashboard/components/Table/TableAntd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ProcessTwo() {
  const { data, total, page } = useSelector((state) => state.dashboard.stepTwo);
  const { file } = useSelector((state) => state.dashboard.stepOne);
  const { isOpen, type } = useSelector((state) => state.dashboard.modal);

  const dispatch = useDispatch();
  const onChangePage = (page) => {
    dispatch(DashboardAction.onChangePage(page));
    dispatch(DashboardAction.fetchWhenChangePage());
  };

  const onCancelModal = () => {
    if (isOpen) dispatch(DashboardAction.toggleModal(''));
  };

  return (
    <div className="pt-40 plr-40">
      <SearchFilter />
      <TableAntd data={data} onChangePage={onChangePage} total={total} page={page} />
      <ModalAntd isOpen={isOpen} onCancel={onCancelModal} />
    </div>
  );
}
