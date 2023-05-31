import { Button, Form, Input, Typography, message } from "antd";
import "../Login/Login.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginForm = (values) =>{
        message.success("Login Successful!");
        dispatch.auth.setUsername(values.username);
        navigate('/')
    };  
    return(
        <>
            <div className="appBg">
                <Form className="loginForm" onFinish={loginForm}>
                    <Typography.Title>Wed Admin!!!</Typography.Title>
                    <Form.Item label='Username' name={'username'}
                    rules={[{required:true, type: "Username", message:"Please enter valid username"}]}>
                        <Input placeholder="Enter your Username" />
                    </Form.Item>
                    <Form.Item label='Password' name={'password'}
                    rules={[{required:true, message:"Please enter valid password"}]}>
                        <Input.Password placeholder="Enter your Password" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" block>Login</Button>
                </Form>
            </div>
        </>
    )
}
export default Login