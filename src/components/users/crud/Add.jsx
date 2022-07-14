import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message, Modal, Row, Select, Switch, Upload} from 'antd';
import {CheckCircleFilled, CloseCircleFilled, EditFilled, UploadOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {PlusOutlined} from "@ant-design/icons/lib/icons";
import {createUsers, retrieveUserSelect} from "../../../redux/actions/users";

const { Option } = Select;

function AddUser() {
    const users = useSelector(state => state.users);
    const [userSelects, setUserSelects] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fileList, setFileList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveUserSelect());
    }, []);

    useEffect(() => {
        console.log("cas", users)
        setUserSelects(users?.userSelect?.data);
    }, [users]);

    const onFinish = (values) => {
        values.photo = previewImage;
        values.status =  (values.status === true) ? 1 : 0;
        values.is_night =  (values.is_night === true) ? 1 : 0;
        values.is_outside =  (values.is_outside === true) ? 1 : 0;
        values.password = password ? password : values.password;
        dispatch(createUsers(values))
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

    function generateString(length) {
        const characters = '@!=+*&0123456789';
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return username+result;
    }


    const generate = () => {
        setPassword(generateString(3));
        console.log("password is", password)
    }

    const onChangeUsername = (e) => {
      console.log(e.target.value);
      setUsername(e.target.value)
    }
    
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
                    span: 12,
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
                    label="İstifadəçi adı"
                    name="username"
                >
                    <Input onChange={(e) => onChangeUsername(e)}/>
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mobil nömrə"
                    name="phone"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="İstifadəçi rolu"
                    name="user_id"
                >
                    <Select placeholder="İstifadəçi rolu">
                        {
                            userSelects ?
                                userSelects.map((userSelect) => (
                                    <Option value={userSelect.id}>{userSelect.name}</Option>
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
                    label="Şifrə"
                    name="password"
                    defaultValue={password}

                >
                    <div className="dFlexType1">
                        <Input/>
                        <Button type="primary" className="ml-1" onClick={generate}>
                            <EditFilled/>
                            Generate et
                        </Button>
                    </div>

                </Form.Item>


                <Form.Item
                    label="Gecə növbəsi"
                    name="is_night"
                >
                    <Switch
                        checkedChildren={<CheckCircleFilled/>}
                        unCheckedChildren={<CloseCircleFilled/>}
                        defaultChecked={false}
                    />
                </Form.Item>

                <Form.Item
                    label="Kənardan giriş"
                    name="is_outside"
                >
                    <Switch
                        checkedChildren={<CheckCircleFilled/>}
                        unCheckedChildren={<CloseCircleFilled/>}
                        defaultChecked={false}
                    />
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
                    wrapperCol={{span: 16}}
                >
                    <Button type="primary" htmlType="submit">
                        Əlavə et
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddUser;