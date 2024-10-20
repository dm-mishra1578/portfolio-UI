// src/pages/auth/LoginContainer.tsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Alert } from 'antd';
import { GlobalContext } from '../../context/GLobalProvider';
import { CiOutlined, LockOutlined } from '@ant-design/icons';

const LoginContainer: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setAuthTokenHandler } = useContext(GlobalContext);
  console.log("hellow1");
  const onFinish = async (values: any) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: values.username,
        password: values.password,
      });
      console.log(response.data);
      console.log("hellow");
      // destructuring of object emilys
      const { accessToken ,firstName } = response.data;
      console.log("hellow",firstName);
      setAuthTokenHandler(accessToken);
      navigate('/');
    } catch (err: any) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      {error && <Alert message={error} type="error" showIcon />}
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="login-form"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<CiOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password prefix=<LockOutlined/> placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginContainer;