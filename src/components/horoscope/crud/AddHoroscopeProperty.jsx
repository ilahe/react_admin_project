import React, {useState, useEffect} from "react";
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
import {createHoroscope} from "../../../redux/actions/horoscopes";
import {useDispatch, useSelector} from "react-redux";
import {createHoroscopeProperties, retrieveHoroscopePropertySelect} from "../../../redux/actions/horoscopeproperties";
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";

const {Option} = Select;
const {TextArea} = Input;

function AddHoroscopeProperty() {
    const [horoscopePropertySelects, setHoroscopePropertySelects] = useState([]);
    const horoscopeproperties = useSelector(state => state.horoscopeproperties);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveHoroscopePropertySelect());
    }, []);

    useEffect(() => {
        setHoroscopePropertySelects(horoscopeproperties?.horoscopePropertySelect?.data);
    }, [horoscopeproperties]);

    const onFinish = (values) => {
        values.status =  (values.status === true) ? 1 : 0;
        dispatch(createHoroscopeProperties(values))
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
                    label="Bürc"

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

                    rules={[
                        {
                            required: true,
                            message: 'Zəhmət olmasa uyğun bürc qeyd edin!',
                        },
                    ]}
                >
                    <Select
                        placeholder="Uyğun bürc seçin"
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
                        defaultChecked={false}
                    />
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

export default AddHoroscopeProperty;