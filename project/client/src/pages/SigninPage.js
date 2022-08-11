import { Alert, Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { getPassword } from '../fetcher';
const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

class SigninPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notice: '',
            username: '',
            pass: '',
            truepass: '',
            id: null,
            signedin: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    handleUsernameChange(event) {
        this.setState({ username: event.target.value })
    }
    handlePasswordChange(event) {
        this.setState({ pass: event.target.value })
    }
    handleSubmit(event) {

        getPassword(this.state.username).then(res => {
            this.setState({ truepass: res.results[0].Password })
            this.setState({ id: res.results[0].id })
        })

        if (this.state.pass !== this.state.truepass) {
            setTimeout(() => {
                this.setState({
                    notice: 'The combination of username and password is incorrect!',
                });
            }, 500);
        }
        else {

            const history = useHistory();
            const path = '/user?id=' + this.state.id;
            history.push(path);

        }
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
                        onFinish={onFinish}
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
                            <Input value={this.state.username} onChange={this.handleUsernameChange} />
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
                            <Input.Password value={this.state.pass} onChange={this.handlePasswordChange} />
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
                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
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