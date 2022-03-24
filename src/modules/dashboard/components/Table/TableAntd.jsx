import React from 'react';
import { Table } from 'antd';
import ExportDropdown from '../ExportDropdown/ExportDropdown';
import './TableAntd.scss';
import { useDispatch } from 'react-redux';
import DashboardAction from 'modules/dashboard/action/action';

function Header() {
  return (
    <div className="flex-x align-center space-between">
      <span className="fw-bold">Header</span>
      <ExportDropdown />
    </div>
  );
}

export default function TableAntd({ data, page, onChangePage, total }) {
  const dispatch = useDispatch();

  const toggleModal = (type) => {
    dispatch(DashboardAction.toggleModal(type));
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
      width: 100
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
      render: () => {
        return (
          <div className="react-action-class wide-cell">
            <button className="react-table-view-button" onClick={() => toggleModal('view')}>
              <i className="fas fa-eye" />
            </button>
            <button className="react-table-edit-button" onClick={() => toggleModal('edit')}>
              <i className="fas fa-edit" />
            </button>
            <button
              className="react-table-suspend-button"
              // onClick={() => suspendClick(tableInstance.row.original)}
            >
              <i className="fas fa-user-alt-slash" />
            </button>
          </div>
        );
      }
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => <Header />}
        // scroll={{ y: 400 }}
        pagination={{
          // defaultCurrent: 1,
          total: total,
          defaultPageSize: 6,
          position: 'bottom',
          onChange: (page) => onChangePage(page),
          current: page
          // pageSizeOptions: ['10', '20', '30']
        }}
      />
    </div>
  );
}