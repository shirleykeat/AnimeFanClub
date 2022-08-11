import { Alert, Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { getPassword } from '../fetcher';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

class SigninPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notice: '',
            message: '',
            user: [],
            id: null,
            signedin: false
        }
        this.onFinish = this.onFinish.bind(this)
    }
    onFinish(values) {

        getPassword(values.email).then(res => {
            if (res.results.length == 0) {
                setTimeout(() => {
                    this.setState({
                        notice: 'The username does not exist!',
                    });
                }, 500);
            }
            else {
                this.setState({ user: res.results[0] }, function () {
                    if (values.password !== this.state.user.Password) {
                        setTimeout(() => {
                            this.setState({
                                notice: 'The combination of username and password is incorrect!',
                            });
                        }, 500);
                    }
                    else {
                        setTimeout(() => {
                            this.setState({
                                message: <div>You've successfully logged in! Go to <a href={"../user?id=" + this.state.user.id}>your page</a></div>
                            });
                        }, 500);

                    }
                });
            }
        })


    }
    render() {
        return (
            <div>
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '10vh' }}>
                    <h1 style={{ color: 'white' }}>sign in</h1></div>
                {this.state.notice && (
                    <Alert
                        style={{ marginBottom: 24 }}
                        message={this.state.notice}
                        type="error"
                        showIcon
                        closable
                    />
                )}
                {this.state.message && (
                    <Alert
                        style={{ marginBottom: 24 }}
                        message={this.state.message}
                        type="success"
                        showIcon
                        closable
                    />
                )}
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 8,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email address',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default SigninPage;