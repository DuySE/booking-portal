import { useEffect, useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import List from '../molecules/List';
import { Layout, Menu, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Popup from '../molecules/Popup';
import FormBooking from '../atoms/FormBooking';

const { Header, Content, Footer, Sider } = Layout;

const Booking = () => {
  // useState hook to initialize states
  const [bookings, setBookings] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  // Function to open/close side menu
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  }
  const username = localStorage.getItem('username');
  const role = localStorage.getItem('role');
  const getAllBookings = async user => {
    await axios.get(`http://localhost:3001/${user}/bookings`)
      .then(res => setBookings(res.data));
  };
  const getAllUsers = async role => {
    if (!!role)
      await axios.get('http://localhost:3001/users').then(res => setUsers(res.data));
  }
  const logout = () => {
    localStorage.clear();
    window.location.href='/';
  }
  useEffect(() => {
    setLoading(true);
    getAllBookings(username);
    getAllUsers(!!role)
    setLoading(false);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {role === 'false' ? (
            <Menu.Item onClick={() => getAllBookings(username)} icon={<UserOutlined />}>
              My Bookings
            </Menu.Item>
          ) :
            users.map(user => (
              <Menu.Item key={user.username} onClick={() => getAllBookings(user.username)} icon={<UserOutlined />}>
                {user.username === username ? 'My Bookings' : user.name}
              </Menu.Item>
            ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <p 
            style={{ color: 'white', float: 'right', marginRight: '40px' }}
          >
            <span style={{marginRight: '10px'}}>Login as {username}</span>
            <span>
              <Button onClick={logout} icon={<LogoutOutlined />}>Logout</Button>
            </span>
          </p>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Popup comp={<FormBooking />} />
            <List data={bookings} loading={loading} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Fullerton Healthcare Group &copy; 2021</Footer>
      </Layout>
    </Layout>
  )
}

export default Booking;
