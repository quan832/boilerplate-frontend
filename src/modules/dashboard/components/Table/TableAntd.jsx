import React from 'react';
import { Table } from 'antd';
import './TableAntd.scss';

export default function TableAntd({ data, columns, page, onChangePage, total, Header }) {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={Header}
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
