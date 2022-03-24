import styled from 'styled-components';

export const ContainerSidebar = styled.div`
  .ant-layout-sider {
    height: 100%;
    box-shadow: -3px 0 5px 0 #555;
  }

  .ant-layout-sider-children {
    background: white;
  }

  .logo {
    display: flex;
    align-items: center;
    img {
      width: 108px;
      margin-top: 15px;
      padding: 40px;
    }
    height: 55px;
    background: #fff;
  }
  .logo img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 225px;
  }

  .menu-style {
    background: #fff;
    .ant-menu-item {
      // height: 57px !important;
    }
  }
`;
