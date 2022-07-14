import React, {useState} from "react";
import {Button, Col, DatePicker, Form, Input, Row, Select, TimePicker, Tag, Tooltip} from "antd";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import {PlusOutlined, MinusOutlined} from "@ant-design/icons/lib/icons";
import {SearchOutlined} from "@ant-design/icons";
import {Route} from "react-router-dom";
const { Option } = Select;
const { TextArea } = Input;

function NewsCrud() {
    const [fileList, setFileList] = useState([]);
    const [tags, setTags] = useState([]);
    const [tagInputVisibility, setTagInputVisibility] = useState(false);
    const [tagValue, setTagValue] = useState('');
    const [multipleCount, setMultipleCount] = useState([0]);


    const onChangeImage = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreviewImage = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    const handleCloseTag = removedTag => {
        console.log("handle close tag")
        const tagsU = tags.filter(tag => tag !== removedTag);
        console.log(tagsU);
        setTags(tagsU);
    };

    function showTagInput() {
        console.log("show tag input")
        setTagInputVisibility(true);
    }

    const handleTagInputChange = e => {
        console.log("changed")
        setTagValue(e.target.value)
    };

    const handleTagInputConfirm = () => {
        console.log("confirm")
        if (tagValue && tags.indexOf(tagValue) === -1) {
            var tagUpdated = [...tags, tagValue];
        }
        console.log(tagUpdated);
        setTags(tagUpdated);
        setTagInputVisibility(false);
        setTagValue('');
    };

    function addNewMultiple(index) {
        console.log("add ilk: ", multipleCount, index);
        setMultipleCount([...multipleCount, index+1]);
        console.log("add son", multipleCount);
    }

    function removeFromMultiple(index) {
        console.log("remove ilk: ", multipleCount, index);
        setMultipleCount(multipleCount.slice(parseInt(index), 1));
        console.log("newArr:", multipleCount);
        // setMultipleCount(newArr);
        // console.log("remove son", multipleCount);
    }

    const multipleDiv = (index) => (
        <Col className="gutter-row" span={24} data-id={index}>
            <div className="frame">
                <div className="multipleOperations">

                    <Button type= "primary" onClick={(e) => addNewMultiple(index)}>
                       <PlusOutlined/>
                    </Button>

                    {index == 0 ? "" :   <Button type= "danger" onClick={(e) => removeFromMultiple(index)}>
                        <MinusOutlined/>
                    </Button>
                    }

                </div>

                <Row gutter={24}>
                    <Col className="gutter-row" span={6}>
                        <Form.Item label="Video tipi">
                            <Select
                                showSearch
                                placeholder="Video tipi seçin"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="0">Video tipi 1</Option>
                                <Option value="1">Video tipi 2</Option>
                                <Option value="2">Video tipi 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={18}>
                        <Form.Item label="Video linki">
                            <Input placeholder="Video linki"/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={24}>
                        <Form.Item label="Video başlığı">
                            <Input placeholder="Video başlığı"/>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
        </Col>
    );

    return(
        <div>
            <Form>
                <Row gutter={24}>
                    <Col className="gutter-row" span={4}>
                        <Form.Item label="Tarix">
                            <DatePicker className="w-100" placeholder="Tarix seçin"/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <Form.Item label="Vaxt">
                            <TimePicker className="w-100" placeholder="Vaxt seçin"/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Form.Item label="Bölmə">
                            <Select
                                showSearch
                                placeholder="Bölmə seçin"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="0">Bölmə 1</Option>
                                <Option value="1">Bölmə 2</Option>
                                <Option value="2">Bölmə 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Form.Item label="Modul">
                            <Select
                                showSearch
                                placeholder="Modul seçin"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="0">Modul 1</Option>
                                <Option value="1">Modul 2</Option>
                                <Option value="2">Modul 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={11}>
                        <Form.Item label="Müəllif">
                            <Select
                                showSearch
                                placeholder="Müəllif seçin"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="0">Müəllif 1</Option>
                                <Option value="1">Müəllif 2</Option>
                                <Option value="2">Müəllif 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={13}>
                        <Form.Item label="Başlıq">
                             <Input placeholder="Başlıq"/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={24}>
                        <Form.Item label="Filter">
                            <TextArea rows={4} placeholder="Filter" maxLength={6} />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={24}>
                        <Form.Item label="Text">
                            <CKEditor editor={ ClassicEditor }/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={24}>
                        <Form.Item label="Şəkil">
                            <ImgCrop rotate>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChangeImage}
                                    onPreview={onPreviewImage}
                                >
                                    {fileList.length < 5 && '+ Yüklə'}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>

                    {multipleCount.map((index) => (
                       multipleDiv(index)
                    ))}

                    <Col className="gutter-row" span={10}>
                        <Form.Item label="Teqlər">
                            <div>
                                {tags.map((tag, index) => {
                                    const isLongTag = tag.length > 20;
                                    const tagElem = (
                                        <Tag color="blue" key={tag} closable={true} onClose={() => handleCloseTag(tag)}>
                                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                        </Tag>
                                    );
                                    return isLongTag ? (
                                        <Tooltip title={tag} key={tag}>
                                            {tagElem}
                                        </Tooltip>
                                    ) : (
                                        tagElem
                                    );
                                })}
                                {tagInputVisibility && (
                                    <Input
                                        ref={input => input && input.focus()}
                                        type="text"
                                        size="small"
                                        style={{ width: 78 }}
                                        value={tagValue}
                                        onChange={handleTagInputChange}
                                        onPressEnter={handleTagInputConfirm}
                                    />
                                )}
                                {!tagInputVisibility && (
                                    <Tag className="newTagContainer" color="blue" onClick={showTagInput}>
                                        <PlusOutlined/>
                                         Yeni teq əlavə et
                                    </Tag>
                                )}
                            </div>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={14}>
                        <Form.Item label="Status">
                            <Select
                                showSearch
                                placeholder="Status seçin"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="0">Status 1</Option>
                                <Option value="1">Status 2</Option>
                                <Option value="2">Status 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default NewsCrud;