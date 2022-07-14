import React, {useState, useEffect} from "react";
import {
    Button,
    Form,
    Input,
    Select,
    message,
    Upload
} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {createVideo} from "../../../redux/actions/videos";
import {UploadOutlined} from "@ant-design/icons";

const {Option} = Select;
const {TextArea} = Input;

function AddVideo() {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        values.file = values.file.file.name;
        dispatch(createVideo(values))
            .then(() => {
                window.location.href="/videos";
            })
            .catch((e) => {
                message.error(e.response.data.message);
            });
    };

    const props = {
        beforeUpload: (file) => {
            console.log(file.type)
            const isVideo = file.type === 'video/mp4';

            if (!isVideo) {
                message.error('Düzgün format seçin');
            }

            return isVideo || Upload.LIST_IGNORE;
        },
        onChange: (info) => {
            console.log(info.fileList);
        },
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="p-2 bg-white">
            <Form
                name="basic"
                labelCol={{
                    span: 2,
                }}
                wrapperCol={{
                    span: 15,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Başlıq"
                    name="title"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="File"
                    name="file"
                >
                    <Upload {...props} maxCount={1}>
                        <Button icon={<UploadOutlined />}>Upload mp4 only</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    name="cdn_type"
                    label="Folder tipi"
                >
                    <Select placeholder="Folder tipi seçin">
                        <Option value={1}>Local CDN</Option>
                        <Option value={0}>Bunny CDN</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    className="text-right"
                    wrapperCol={{span: 17}}
                >
                    <Button type="primary" htmlType="submit">
                        Əlavə et
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddVideo;