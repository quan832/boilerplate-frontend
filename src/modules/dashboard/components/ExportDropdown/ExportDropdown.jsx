import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Button } from 'antd';

export default function ExportDropdown({ onClick, iconClass, message }) {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <i className="fa-regular fa-file-spreadsheet" /> {message}
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      // icon={<DownOutlined />}
      //   loading={loadings[1]}
      overlay={menu}
      onClick={onClick}>
      <Button>
        <i className={iconClass}></i>
      </Button>
    </Dropdown>
  );
}
