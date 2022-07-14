import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message, Select, Switch} from 'antd';
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";
import {createCategory, retrieveCategorySelect} from "../../../redux/actions/categories";
import {useDispatch, useSelector} from "react-redux";

const { Option } = Select;

function AddCategories() {
    const categories = useSelector(state => state.categories);
    const [categorySelects, setCategorySelects] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveCategorySelect());
    }, []);

    useEffect(() => {
        setCategorySelects(categories?.categorySelect?.data);
    }, [categories]);

    const onFinish = (values) => {
        console.log('Success:', values);
        values.status =  (values.status === true) ? 1 : 0;
        dispatch(createCategory(values))
            .then(() => {
                window.location.href="/categories";
            })
            .catch((e) => {
                message.error("Xəta baş verdi");
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onNameChange = (value) => {
        console.log(value)
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
                    label="Kateqoriya seçin"
                    name="s_id"
                >
                    <Select
                        onChange={onNameChange}
                        allowClear
                    >
                        {
                            categorySelects ?
                                categorySelects.map((cat) => (
                                    <Option value={cat.id}>{cat.name}</Option>
                                )) : []

                        }
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Bölmə adı"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Zəhmət olmasa bölmə adı qeyd edin!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Açıqlama"
                    name="description"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Açar söz"
                    name="keywords"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Status"
                    name="status"
                >
                    <Switch
                        checkedChildren={<CheckCircleFilled/>}
                        unCheckedChildren={<CloseCircleFilled/>}
                        defaultChecked={false}
                    />
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

export default AddCategories;