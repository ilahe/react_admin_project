import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select, Switch, message} from 'antd';
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {editSeoNews, updateSeoNews} from "../../../redux/actions/seonews";

const { Option } = Select;

function EditSeoNews() {
    let {id} = useParams();
    const seonews = useSelector(state => state.seonews);
    const [currentSeoNews, setCurrentSeoNews] = useState("");
    const [metaIndex, setMetaIndex] = useState(false);
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editSeoNews(id));
    }, []);

    useEffect(() => {
        console.log("in here", seonews)
        setCurrentSeoNews(seonews?.seoNews?.data);
    }, [seonews]);

    const onFinish = (values) => {
        values.status =  (status === true) ? 1 : 0;
        values.meta_index =  (metaIndex === true) ? 1 : 0;
        dispatch(updateSeoNews(id, values))
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
            {currentSeoNews ?
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
                        label="Açıqlama"
                        name="description"
                        initialValue={currentSeoNews?.description}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Açar söz"
                        name="tag"
                        initialValue={currentSeoNews?.tag}
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
                        label="Prioritet"
                        name="priority"
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Meta Index"
                        name="meta_index"
                    >
                        <Switch
                            checkedChildren={<CheckCircleFilled/>}
                            unCheckedChildren={<CloseCircleFilled/>}
                            defaultChecked={metaIndex}
                            onChange={(e) => setMetaIndex(!metaIndex)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Status"
                        name="status"
                    >
                        <Switch
                            checkedChildren={<CheckCircleFilled/>}
                            unCheckedChildren={<CloseCircleFilled/>}
                            defaultChecked={status}
                            onChange={(e) => setStatus(!status)}
                        />
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

export default EditSeoNews;