import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message, Select, Switch} from 'antd';
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";
import {createCategory, retrieveCategorySelect} from "../../../redux/actions/categories";
import {useDispatch, useSelector} from "react-redux";
import categorylinks from "../../../redux/reducers/categorylinks";
import {createCategoryLink, retrieveCategoryLinkSelect} from "../../../redux/actions/categorylinks";

const { Option } = Select;

function AddCategoryLinks() {
    const categorylinks = useSelector(state => state.categorylinks);
    const [categoryLinkSelects, setCategoryLinkSelects] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveCategoryLinkSelect());
    }, []);

    useEffect(() => {
        console.log("cas", categorylinks)
        setCategoryLinkSelects(categorylinks?.categoryLinkSelect?.data);
    }, [categorylinks]);

    const onFinish = (values) => {
        values.status =  (values.status === true) ? 1 : 0;
        dispatch(createCategoryLink(values))
            .then(() => {
                window.location.href="/category-links";
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
                    name="category_id"
                >
                    <Select
                        onChange={onNameChange}
                        allowClear
                    >
                        {
                            categoryLinkSelects ?
                                categoryLinkSelects.map((catLink) => (
                                    <Option value={catLink.id}>{catLink.name}</Option>
                                )) : []

                        }
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Kateqoriya linkləri seçin"
                    name="related_id"
                >
                    <Select
                        onChange={onNameChange}
                        allowClear
                    >
                        {
                            categoryLinkSelects ?
                                categoryLinkSelects.map((catLink) => (
                                    <Option value={catLink.id}>{catLink.name}</Option>
                                )) : []

                        }
                    </Select>
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

export default AddCategoryLinks;