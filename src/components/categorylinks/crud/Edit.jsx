import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select, Switch, message} from 'antd';
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";
import {editCategory, updateCategory} from "../../../redux/actions/categories";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {editCategoryLink, retrieveCategoryLinkSelect, updateCategoryLink} from "../../../redux/actions/categorylinks";

const { Option } = Select;

function EditCategoryLinks() {
    let {id} = useParams();
    const categorylinks = useSelector(state => state.categorylinks);
    const [currentCategoryLink, setCurrentCategoryLink] = useState("");
    const [categoryStatus, setCategoryStatus] = useState(false);
    const [categoryLinkSelects, setCategoryLinkSelects] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editCategoryLink(id));
    }, []);

    useEffect(() => {
        console.log('in edit page',categorylinks)

        setCategoryLinkSelects(categorylinks?.categoryLinkSelect?.data);
        setCurrentCategoryLink(categorylinks?.categoryLink?.data);
        setCategoryStatus((categorylinks?.categoryLink?.data?.status == 1) ? true : false);
    }, [categorylinks]);

    const onFinish = (values) => {
        values.status =  (categoryStatus === true) ? 1 : 0;
        dispatch(updateCategoryLink(id, values))
            .then(() => {
                console.log("ugurlu");
                window.location.href="/category-links";
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
            {currentCategoryLink ?
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
                        initialValue={currentCategoryLink?.category_id}
                    >
                        <Select
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
                        label="Kateqoriya linki seçin"
                        name="related_id"
                        initialValue={currentCategoryLink?.related_id}
                    >
                        <Select
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
                            defaultChecked={categoryStatus}
                            onChange={(e) => setCategoryStatus(!categoryStatus)}
                        />
                    </Form.Item>

                    <Form.Item
                        className="text-right"
                        wrapperCol={{span: 11}}
                    >
                        <Button type="primary" htmlType="submit">
                            Redaktə et
                        </Button>
                    </Form.Item>
                </Form> : <></>}
        </div>
    )
}

export default EditCategoryLinks;