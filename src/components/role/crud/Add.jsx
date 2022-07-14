import React, {useEffect, useState} from "react";
import {Form, Input, Select, Button, message} from "antd";
import {createRoles, retrieveRoles} from "../../../redux/actions/roles";
import {useDispatch, useSelector} from "react-redux";
const { Option } = Select;

function AddRole() {
    const roles = useSelector(state => state.roles);
    const [roleSelects, setRoleSelects] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveRoles());
    }, []);

    useEffect(() => {
        setRoleSelects(roles?.roles?.data);
    }, [roles]);

    const onFinish = (values) => {
        dispatch(createRoles(values))
            .then(() => {
                window.location.href="/users";
            })
            .catch((e) => {
                message.error("Xəta baş verdi");
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return(
        <div className="p-2 bg-white">
            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 7,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Ad"
                    name="name"
                >
                    <Input/>
                </Form.Item>

                <Form.Item label="İcazələr" name="permission">
                    <Select
                        mode="multiple"
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        placeholder="Please select"
                    >
                        {
                            roleSelects ?
                                roleSelects.map((roleSelect) => (
                                    <Option key={roleSelect.id} value={roleSelect.id}>{roleSelect.name}</Option>
                                )) : []

                        }
                    </Select>
                </Form.Item>

                <Form.Item
                    className="text-right"
                    wrapperCol={{span: 11}}
                >
                    <Button type="primary" htmlType="submit">
                        Əlavə et
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddRole;