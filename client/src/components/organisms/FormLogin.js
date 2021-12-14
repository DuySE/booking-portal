import axios from 'axios';
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const FormLogin = () => {
  const onFinish = async (values) => {
    await axios.post('http://localhost:3001', values).then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      localStorage.setItem('id', res.data._id);
      localStorage.setItem('role', res.data.role);    
    });
    window.location.href='bookings';
  };
  return (
    <>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        style={{
          marginTop: 'auto',
          minHeight: '100vh',
          display: 'flex',
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className='site-form-item-icon' />} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input password!',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className='site-form-item-icon' />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormLogin;
