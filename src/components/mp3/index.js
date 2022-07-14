import React from 'react';
import {Card, Row, Col, Typography, Avatar, Divider} from 'antd';
import musicIcon from "../../assets/images/music.png";
import {LinkOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
const { Title } = Typography;

function MainMusic() {
    return(
        <div className="horoscopeContainer">
            <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={musicIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Bütün musiqilər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/all-mp3"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Bütün musiqilər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={musicIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Gələn musiqilər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/coming-mp3"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Gələn musiqilər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={musicIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Silinən musiqilər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/deleted-mp3"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Silinən musiqilər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainMusic;