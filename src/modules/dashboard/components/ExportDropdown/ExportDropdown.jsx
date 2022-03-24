import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
const menu = (
  <Menu>
    <Menu.Item key="1">
      <i className="fa-regular fa-file-spreadsheet" /> Export XLSX
    </Menu.Item>
  </Menu>
);
export default function ExportDropdown() {
  return (
    <Dropdown.Button
      icon={<DownOutlined />}
      //   loading={loadings[1]}
      overlay={menu}
      onClick={() => this.enterLoading(1)}>
      <i className="fa-solid fa-file-export"></i>
    </Dropdown.Button>
  );
}
