import { Pagination } from 'antd';
import { successNotification, warningNotification } from 'helper/notification';
import React, { PureComponent, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ButtonStyled } from 'stylesheet/Button/Button.styled';

const paginatedData = (page = 1, perPage = 6, data) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;

  const newData = data.slice(startIndex, endIndex);
  return newData;
};

export default function BarChartComponent({ data: dataFrom, range }) {
  const [currentPage, setCurrent] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(8);
  useEffect(() => {
    if (dataFrom.length > 0) {
      setData([...paginatedData(1, pageSize, dataFrom)]);
      setCurrent(1);
    } else {
      setData([]);
      warningNotification('cant find clinic');
    }
  }, [dataFrom]);
  const onChange = (page) => {
    setCurrent(page);
  };

  const onChangeNext = (page) => {
    setCurrent(page + 1);
  };

  const onChangePrev = (page) => {
    setCurrent(page - 1);
  };

  React.useEffect(() => {
    setData([...paginatedData(currentPage, pageSize, dataFrom)]);
  }, [currentPage]);

  return (
    <div className="h-100 mt-20">
      <div className="h-100 flex-x align-center bar-chart">
        <ButtonStyled
          purple
          className="w-3"
          disabled={currentPage === 1 ? true : false}
          onClick={() => onChangePrev(currentPage)}>
          <i className="fa-solid fa-caret-left"></i>
        </ButtonStyled>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
            barSize={20}>
            <XAxis dataKey="id" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis type="number" domain={range} />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="count" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
        <ButtonStyled
          purple
          className="w-3"
          disabled={currentPage === Math.ceil(dataFrom.length / pageSize) ? true : false}
          onClick={() => onChangeNext(currentPage)}>
          <i className="fa-solid fa-caret-right"></i>
        </ButtonStyled>
      </div>
      <div className="flex-x center mt-20">
        <Pagination
          current={currentPage}
          onChange={onChange}
          total={dataFrom.length}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}
