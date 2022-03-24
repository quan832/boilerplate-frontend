import React from 'react';
import { LayoutStyled } from 'stylesheet/Layout/Layout.styled';
import Sidebar from 'components/Sidebar/Sidebar';
import { Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

export default function HomeTemplate(props) {
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Layout className="flex-x vh-100">
            <Sidebar />
            <Layout className="w-100">
              <Component {...propsRoute} />
            </Layout>
          </Layout>
        );
      }}
    />
  );
}
