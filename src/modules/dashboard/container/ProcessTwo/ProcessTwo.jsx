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
import { capitalizeFirstLetter } from 'helper/serializers';
import { Popconfirm, message } from 'antd';

export default function ProcessTwo() {
  const { data, total, page } = useSelector((state) => state.dashboard.stepTwo);
  const { file } = useSelector((state) => state.dashboard.stepOne);
  const { isOpen, type, value } = useSelector((state) => state.dashboard.modal);
  const { data: uploadExcel } = useSelector((state) => state.dashboard.upload);

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
    dispatch(DashboardAction.downloadExcel(data));
  };

  const toggleModal = (type, value) => {
    dispatch(DashboardAction.toggleModal(type, value));
  };

  const deleteRow = (id) => {
    dispatch(DashboardAction.deleteRowStaff(id));
  };

  const columns = [
    {
      title: 'Họ tên',
      dataIndex: 'name',
      width: 400
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      width: 100,
      render: (value) => {
        return <span>{value ? capitalizeFirstLetter(value, 'vi') : null}</span>;
      }
    },
    {
      title: 'Năm sinh',
      dataIndex: 'dateOfBirth',
      width: 150
    },
    // {
    //   title: 'Nghề nghiệp',
    //   dataIndex: 'job'
    // },
    // {
    //   title: 'SĐT',
    //   dataIndex: 'phone'
    // },
    {
      title: 'Khoa/ phòng',
      dataIndex: 'clinic',
      width: 300
    },
    {
      title: 'Ngày XN dương tính',
      dataIndex: 'datePositive',
      width: 200
    },
    {
      title: 'Nguồn nghi nhiễm',
      dataIndex: 'infectedFrom',
      width: 350
    },
    {
      title: 'Đi làm lại',
      dataIndex: 'workingStatus',
      width: 200
    },
    {
      title: 'Action',
      width: 200,
      render: (value) => {
        return (
          <div className="react-action-class wide-cell">
            <button
              className="react-table-view-button"
              onClick={() => toggleModal(typeModal.view, value)}>
              <i className="fas fa-eye" />
            </button>
            <button
              className="react-table-edit-button"
              onClick={() => toggleModal(typeModal.edit, value)}>
              <i className="fas fa-edit" />
            </button>
            <Popconfirm
              title="Are you sure to delete this row?"
              onConfirm={() => deleteRow(value.id)}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No">
              <button className="react-table-suspend-button">
                <i className="fas fa-user-alt-slash" />
              </button>
            </Popconfirm>
          </div>
        );
      }
    }
  ];

  function Header() {
    return (
      <div className="flex-x align-center space-between">
        <span className="fw-bold">Header</span>
        <ExportDropdown
          onClick={() => downloadExcel(uploadExcel)}
          message="Import xslx"
          iconClass="fa-solid fa-file-export"
        />
      </div>
    );
  }

  return (
    <div className="pt-40 plr-40 process-two-container">
      <SearchFilter />
      <TableAntd
        data={data}
        columns={columns}
        onChangePage={onChangePage}
        total={total}
        page={page}
        Header={() => <Header />}
      />
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
