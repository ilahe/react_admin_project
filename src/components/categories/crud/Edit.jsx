import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select, Switch, message} from 'antd';
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";
import {editCategory, updateCategory} from "../../../redux/actions/categories";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const { Option } = Select;

function EditCategories() {
    let {id} = useParams();
    const categories = useSelector(state => state.categories);
    const [currentCategory, setCurrentCategory] = useState("");
    const [categoryStatus, setCategoryStatus] = useState(false);
    const [categorySelects, setCategorySelects] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editCategory(id));
    }, []);

    useEffect(() => {
        setCategoryStatus((categories?.category?.data?.status == 1) ? true : false);
        setCategorySelects(categories?.category?.categories);
        setCurrentCategory(categories?.category?.data);
    }, [categories]);

    const onFinish = (values) => {
        console.log('Success:', values, categoryStatus);
        values.status =  (categoryStatus === true) ? 1 : 0;
        dispatch(updateCategory(id, values))
            .then(() => {
                console.log("ugurlu");
                window.location.href="/categories";
            })
            .catch((e) => {
                console.log("ugursuz", e);
                message.error("Xəta baş verdi");
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div className="p-2 bg-white">
            {currentCategory ?
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
                        initialValue={currentCategory?.sub_categories?.id}
                    >
                        <Select
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
                    >
                        <Input defaultValue={currentCategory?.name} />
                    </Form.Item>

                    <Form.Item
                        label="Açıqlama"
                        name="description"
                    >
                        <Input defaultValue={currentCategory?.description}/>
                    </Form.Item>

                    <Form.Item
                        label="Açar söz"
                        name="keywords"
                    >
                        <Input defaultValue={currentCategory?.keywords}/>
                    </Form.Item>

                    <Form.Item
                        label="Status"
                        name="status"
                    >
                        <Switch
                            checkedChildren={<CheckCircleFilled/>}
                            unCheckedChildren={<CloseCircleFilled/>}
                            defaultChecked={categoryStatus}
                            onChange={(e) => setCategoryStatus(!categoryStatus)}
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
                </Form> : <></>}
        </div>
    )
}

export default EditCategories;