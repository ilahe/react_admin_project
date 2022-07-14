import React from 'react';
import {Card, Row, Col, Typography, Avatar, Divider} from 'antd';
import newsIcon from "../../assets/images/news.png";
import {LinkOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
const { Title } = Typography;

function MainNews() {
    return(
        <div className="horoscopeContainer">
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={newsIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Bütün xəbərlər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/news?type=0"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Bütün xəbərlər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={newsIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Arxiv xəbərlər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/news?type=7"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Arxiv xəbərlər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={newsIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Gələn xəbərlər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/news?type=1"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Gələn xəbərlər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={newsIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Oxunan xəbərlər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/news?type=2"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Oxunan xəbərlər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={newsIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Gözləyən xəbərlər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/news?type=3"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Gözləyən xəbərlər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={newsIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Yenilənmiş xəbərlər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/news?type=4"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Yenilənmiş xəbərlər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={newsIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Deaktiv xəbərlər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/news?type=5"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Deaktiv xəbərlər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={newsIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Silinən xəbərlər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/news?type=6"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Silinən xəbərlər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainNews;