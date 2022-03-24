import HeaderComponent from 'components/Header/Header';
import React from 'react';
import { Layout } from 'antd';
import DashboardContainer from 'modules/dashboard/container/DashboardContainer';

const { Header, Footer, Sider, Content } = Layout;

export default function HomePage() {
  return <div className="home-page">
    <HeaderComponent />
    <DashboardContainer />
  </div>;
}
