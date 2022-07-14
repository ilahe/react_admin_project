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
import {editHoroscopeProperties, updateHoroscopeProperties} from "../../../redux/actions/horoscopeproperties";

const {Option} = Select;
const {TextArea} = Input;

function EditHoroscopeProperty() {
    let {id} = useParams();
    const [horoscopePropertySelects, setHoroscopePropertySelects] = useState([]);
    const [horoscopePropertyStatus, setHoroscopePropertyStatus] = useState(false);
    const [currentHoroscopeProperty, setCurrentHoroscopeProperty] = useState({});
    const horoscopeproperties = useSelector(state => state.horoscopeproperties);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editHoroscopeProperties(id));
    }, []);

    useEffect(() => {
        setHoroscopePropertyStatus((horoscopeproperties?.horoscopeProperty?.data?.status == 1) ? true : false);
        setHoroscopePropertySelects(horoscopeproperties?.horoscopePropertySelect?.data);
        setCurrentHoroscopeProperty(horoscopeproperties?.horoscopeProperty?.data);
    }, [horoscopeproperties]);

    const onFinish = (values) => {
        values.status =  (horoscopePropertyStatus === true) ? 1 : 0;
        dispatch(updateHoroscopeProperties(id, values))
            .then(() => {
                window.location.href="/horoscope-properties";
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
            {currentHoroscopeProperty ?
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
                        initialValue={currentHoroscopeProperty?.horoscope_id}
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
                                horoscopePropertySelects ?
                                    horoscopePropertySelects.map((cat) => (
                                        <Option value={cat.id}>{cat.name}</Option>
                                    )) : []

                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="horoscope_property_id"
                        label="Uyğun bürc"
                        initialValue={currentHoroscopeProperty?.horoscope_property_id}
                        rules={[
                            {
                                required: true,
                                message: 'Zəhmət olmasa uyğun bürcü qeyd edin!',
                            },
                        ]}
                    >
                        <Select
                            placeholder="Uyğun bürcü seçin"
                        >
                            {
                                horoscopePropertySelects ?
                                    horoscopePropertySelects.map((cat) => (
                                        <Option value={cat.id}>{cat.name}</Option>
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
                            defaultChecked={horoscopePropertyStatus}
                            onChange={(e) => setHoroscopePropertyStatus(!horoscopePropertyStatus)}
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

export default EditHoroscopeProperty;