import React, {useState, useEffect} from "react";
import moment from 'moment';
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    TimePicker,
    message, Switch
} from "antd";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
    editHoroscope,
    updateHoroscope
} from "../../../redux/actions/horoscopes";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import horoscopeloves from "../../../redux/reducers/horoscopeloves";
import {editHoroscopeLoves, updateHoroscopeLoves} from "../../../redux/actions/horoscopeloves";
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";

const {Option} = Select;
const {TextArea} = Input;

function EditHoroscopeLove() {
    let {id} = useParams();
    const [horoscopeLoveSelects, setHoroscopeLoveSelects] = useState([]);
    const [horoscopeLoveContent, setHoroscopeLoveContent] = useState('');
    const [horoscopeLoveStatus, setHoroscopeLoveStatus] = useState(false);
    const [currentHoroscopeLove, setCurrentHoroscopeLove] = useState({});
    const horoscopeloves = useSelector(state => state.horoscopeloves);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editHoroscopeLoves(id));
    }, []);

    useEffect(() => {
        setHoroscopeLoveStatus((horoscopeloves?.horoscopeLove?.data?.status == 1) ? true : false);
        setHoroscopeLoveContent(horoscopeloves?.horoscopeLove?.data?.content);
        setHoroscopeLoveSelects(horoscopeloves?.horoscopeLoveSelect?.data);
        setCurrentHoroscopeLove(horoscopeloves?.horoscopeLove?.data);
    }, [horoscopeloves]);

    const onFinish = (values) => {
        values.content = values.content ? values.content : horoscopeLoveContent;
        values.status =  (horoscopeLoveStatus === true) ? 1 : 0;
        dispatch(updateHoroscopeLoves(id, values))
            .then(() => {
                window.location.href="/horoscope-love";
            })
            .catch((e) => {
                message.error(e.response.data.message);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="p-2 bg-white">
            {currentHoroscopeLove ?
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
                        name="horoscope_id"
                        label="Bürclər"
                        initialValue={currentHoroscopeLove?.horoscope_id}
                        rules={[
                            {
                                required: true,
                                message: 'Zəhmət olmasa bürc qeyd edin!',
                            },
                        ]}
                    >
                        <Select
                            placeholder="Bürc seçin"
                        >
                            {
                                horoscopeLoveSelects ?
                                    horoscopeLoveSelects.map((cat) => (
                                        <Option value={cat.id}>{cat.name}</Option>
                                    )) : []

                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="love_id"
                        label="Sevgi bürcü"
                        initialValue={currentHoroscopeLove?.love_id}
                        rules={[
                            {
                                required: true,
                                message: 'Zəhmət olmasa sevgi bürcü qeyd edin!',
                            },
                        ]}
                    >
                        <Select
                            placeholder="Sevgi bürcü seçin"
                        >
                            {
                                horoscopeLoveSelects ?
                                    horoscopeLoveSelects.map((cat) => (
                                        <Option value={cat.id}>{cat.name}</Option>
                                    )) : []

                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Text"
                        name="content"
                        getValueFromEvent={(event, editor) => {
                            const data = editor.getData();
                            return data;
                        }}>
                        <CKEditor editor={ClassicEditor} data={currentHoroscopeLove?.content}/>
                    </Form.Item>


                    <Form.Item
                        label="Status"
                        name="status"
                    >
                        <Switch
                            checkedChildren={<CheckCircleFilled/>}
                            unCheckedChildren={<CloseCircleFilled/>}
                            defaultChecked={horoscopeLoveStatus}
                            onChange={(e) => setHoroscopeLoveStatus(!horoscopeLoveStatus)}
                        />
                    </Form.Item>

                    <Form.Item
                        className="text-right"
                        wrapperCol={{span: 17}}
                    >
                        <Button type="primary" htmlType="submit">
                            Redaktə et
                        </Button>
                    </Form.Item>
                </Form> : <></>}
        </div>
    )
}

export default EditHoroscopeLove;