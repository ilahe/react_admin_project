import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message, Modal, Select, Switch, Upload} from 'antd';
import {CheckCircleFilled, CloseCircleFilled, UploadOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {createAuthor, retrieveAuthorSelect} from "../../../redux/actions/authors";
import {PlusOutlined} from "@ant-design/icons/lib/icons";

const { Option } = Select;

function AddAuthor() {
    const authors = useSelector(state => state.authors);
    const [authorSelects, setAuthorSelects] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveAuthorSelect());
    }, []);

    useEffect(() => {
        console.log("cas", authors)
        setAuthorSelects(authors?.authorSelect?.users);
    }, [authors]);

    const onFinish = (values) => {
        values.photo = previewImage;
        values.status =  (values.status === true) ? 1 : 0;
        dispatch(createAuthor(values))
            .then(() => {
                window.location.href="/authors";
            })
            .catch((e) => {
                message.error("Xəta baş verdi");
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result);

            reader.onerror = (error) => reject(error);
        });

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

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
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Soyad"
                    name="surname"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="İstifadəçi seçin"
                    name="user_id"
                >
                    <Select placeholder="İstifadəçi seçin">
                        {
                            authorSelects ?
                                authorSelects.map((authorSelect) => (
                                    <Option value={authorSelect.id}>{authorSelect.name + " " + authorSelect.surname}</Option>
                                )) : []

                        }
                    </Select>
                </Form.Item>

                <Form.Item label="Şəkil">
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                        maxCount={1}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img
                            alt="example"
                            style={{
                                width: '100%',
                            }}
                            src={previewImage}
                        />
                    </Modal>
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

export default AddAuthor;