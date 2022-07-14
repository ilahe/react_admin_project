import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select, Switch, message} from 'antd';
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";
import {editCategory, updateCategory} from "../../../redux/actions/categories";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {editSeoNews, updateSeoNews} from "../../../redux/actions/seonews";
import {editSeoSitemap, updateSeoSitemap} from "../../../redux/actions/seositemap";

const { Option } = Select;

function EditSeoSitemap() {
    let {id} = useParams();
    const seositemap = useSelector(state => state.seositemap);
    const [currentSeoSitemap, setCurrentSeoSitemap] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editSeoSitemap(id));
    }, []);

    useEffect(() => {
        console.log("in here", seositemap)
        setCurrentSeoSitemap(seositemap?.seoSitemaps?.data);
    }, [seositemap]);

    const onFinish = (values) => {
        dispatch(updateSeoSitemap(id, values))
            .then(() => {
                console.log("ugurlu");
                window.location.href="/seo-news";
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
            {currentSeoSitemap ?
                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 11,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Bölmə"
                        name="name"
                        initialValue={currentSeoSitemap?.name}
                    >
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item
                        label="Prioritet"
                        name="priority"
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Changefreq"
                        name="changefreq"
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        className="text-right"
                        wrapperCol={{span: 15}}
                    >
                        <Button type="primary" htmlType="submit">
                            Redaktə et
                        </Button>
                    </Form.Item>
                </Form> : <></>}
        </div>
    )
}

export default EditSeoSitemap;