import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Button, Form, Input, Layout} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import { login } from "../../../redux/actions/auth";

const { Content } = Layout;

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const handleLogin = (values) => {
        setUsername(values.username);
        setPassword(values.password);
        setLoading(true);
        // // form.current.validateAll();
        // // validate in here
        //
        dispatch(login(username, password))
            .then(() => {
                window.location.href = '/';
            })
            .catch((e) => {
                setLoading(false);
            });

    };

    if (isLoggedIn) {
        window.location.href = '/';
    }

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={handleLogin}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    // rules={[
                    //     {
                    //         required: false,
                    //         message: 'Zəhmət olmasa, itifadəçi adı daxil edin!',
                    //     },
                    // ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />}
                           placeholder="İstifadəçi adı"
                           value={username} />
                </Form.Item>
                <Form.Item
                    name="password"
                    // rules={[
                    //     {
                    //         required: false,
                    //         message: 'Zəhmət olmasa, şifrə daxil edin!',
                    //     },
                    // ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Şifrə"
                        value={password}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>

                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
            </Form>
        </div>
    )
}

export default Login;