import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Overview from './Dashboard/components/Overview';
import SalePercent from './Dashboard/components/SalePercent';
import TimeLine from './Dashboard/components/TimeLine';
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={256} theme='dark'>
                <Menu theme='dark' mode='inline'>
                    <Menu.Item key='1'>
                        <Link to='/admin/dashboard'>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Link to='/admin/products'>Product Management</Link>
                    </Menu.Item>
                    <Menu.Item key='3'>
                        <Link to='/admin/orders'>Order Management</Link>
                    </Menu.Item>
                    {/* Thêm các item khác nếu cần */}
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <div style={{ padding: '0 16px' }}>
                        <h1>Dashboard</h1>
                    </div>
                </Header>
                <Content style={{ margin: '0 16px', padding: 24, minHeight: 280 }}>
                    <div style={{ marginBottom: '24px' }}>
                        <Overview />
                        <SalePercent />
                        <TimeLine />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Admin Panel ©2023</Footer>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
