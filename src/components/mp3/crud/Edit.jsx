import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select, Switch, message} from 'antd';
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";
import {editCategory, updateCategory} from "../../../redux/actions/categories";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {editMp3, updateMp3} from "../../../redux/actions/mp3";
import ReactAudioPlayer from "react-audio-player";

const { Option } = Select;

function EditMp3() {
    let {id} = useParams();
    const mp3 = useSelector(state => state.mp3);
    const [currentMp3, setCurrentMp3] = useState("");
    const [mp3Status, setMp3Status] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editMp3(id));
    }, []);

    useEffect(() => {
        setMp3Status((mp3?.mp3?.data?.status == 1) ? true : false);
        setCurrentMp3(mp3?.mp3?.data);
    }, [mp3]);

    const onFinish = (values) => {
        console.log('Success:', values, mp3Status);
        values.status =  (mp3Status === true) ? 1 : 0;
        dispatch(updateMp3(id, values))
            .then(() => {
                console.log("ugurlu");
                window.location.href="/mp3";
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
            {currentMp3 ?
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
                        label="Müğənni adı"
                        name="singer_name"
                        initialValue={currentMp3?.singer_name}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mahnı adı"
                        name="music_name"
                        initialValue={currentMp3?.music_name}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mahnı"
                    >
                        <ReactAudioPlayer
                            src={currentMp3?.full_url}
                            controls
                        />
                    </Form.Item>

                    <Form.Item
                        label="Status"
                        name="status"
                    >
                        <Switch
                            checkedChildren={<CheckCircleFilled/>}
                            unCheckedChildren={<CloseCircleFilled/>}
                            defaultChecked={mp3Status}
                            onChange={(e) => setMp3Status(!mp3Status)}
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

export default EditMp3;