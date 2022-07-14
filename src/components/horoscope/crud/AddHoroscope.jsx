import React, {useState, useEffect} from "react";
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    TimePicker,
    message
} from "antd";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {createHoroscope, retrieveHoroscopeSelect} from "../../../redux/actions/horoscopes";
import {useDispatch, useSelector} from "react-redux";

const {Option} = Select;
const {TextArea} = Input;

function AddHoroscope() {
    const [horoscopeSelects, setHoroscopeSelects] = useState([]);
    const [horoscopeTime, setHoroscopeTime] = useState('');
    const [horoscopeDate, setHoroscopeDate] = useState('');
    const horoscopes = useSelector(state => state.horoscopes);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(retrieveHoroscopeSelect());
    }, []);

    useEffect(() => {
       setHoroscopeSelects(horoscopes?.horoscopeSelect?.data);
    }, [horoscopes]);

    const onFinish = (values) => {
        values.time = horoscopeTime;
        values.date = horoscopeDate;
        console.log('Success:', values);
        dispatch(createHoroscope(values))
            .then(() => {
                window.location.href="/horoscope/main";
            })
            .catch((e) => {
                message.error(e.response.data.message);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChangeTime = (time, timeString) => {
        console.log(time, timeString);
        setHoroscopeTime(timeString);
    };

    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
        setHoroscopeDate(dateString);
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

                <Form.Item label="Tarix" name="date">
                    <DatePicker className="w-100" placeholder="Tarix seçin" onChange={onChangeDate}/>
                </Form.Item>

                <Form.Item label="Vaxt" name="time">
                    <TimePicker className="w-100" placeholder="Vaxt seçin" format="HH:mm" onChange={onChangeTime} />
                </Form.Item>

                <Form.Item
                    label="Növ"
                    name="type"
                    rules={[
                        {
                            required: true,
                            message: 'Zəhmət olmasa növ qeyd edin!',
                        },
                    ]}
                >
                    <Select placeholder="Növ seçin">
                        <Option value={1}>Günlük</Option>
                        <Option value={2}>Həftəlik</Option>
                        <Option value={3}>Aylıq</Option>
                        <Option value={4}>İllik</Option>
                        <Option value={5}>Xarakteristikası</Option>
                    </Select>
                </Form.Item>

                 <Form.Item
                    name="horoscope_id"
                    label="Bürclər"

                    rules={[
                        {
                            required: true,
                            message: 'Zəhmət olmasa bürc qeyd edin!',
                        },
                    ]}
                >
                    <Select
                        placeholder="Bürclər seçin"
                    >
                        {
                            horoscopeSelects ?
                                horoscopeSelects.map((cat) => (
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
                    <CKEditor editor={ClassicEditor}/>
                </Form.Item>

                <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                        {
                            required: true,
                            message: 'Zəhmət olmasa növ qeyd edin!',
                        },
                    ]}
                >
                    <Select placeholder="Status seçin">
                        <Option value={1}>Dərc et</Option>
                        <Option value={5}>Gözləyən</Option>
                        <Option value={0}>Deaktiv</Option>
                        <Option value={2}>Sil</Option>
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

export default AddHoroscope;