import React from 'react';
import { Table } from 'antd';
import ExportDropdown from '../ExportDropdown/ExportDropdown';
import './TableAntd.scss';
import { useDispatch } from 'react-redux';
import DashboardAction from 'modules/dashboard/action/action';
import { typeModal } from 'helper/constant';
import { Popconfirm, message } from 'antd';
import { capitalizeFirstLetter } from 'helper/serializers';



export default function TableAntd({ data, page, onChangePage, total, downloadExcel }) {
  const dispatch = useDispatch();

  const toggleModal = (type, value) => {
    dispatch(DashboardAction.toggleModal(type, value));
  };

  const deleteRow = (id) => {
    dispatch(DashboardAction.deleteRowStaff(id));
  };

  function Header() {
    return (
      <div className="flex-x align-center space-between">
        <span className="fw-bold">Header</span>
        <ExportDropdown onClick={downloadExcel} />
      </div>
    );
  }

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
          position: 'bottomCenter',
          onChange: (page) => onChangePage(page),
          current: page
          // pageSizeOptions: ['10', '20', '30']
        }}
      />
    </div>
  );
}
