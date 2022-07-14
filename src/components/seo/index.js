import React from "react";
import {Avatar, Card, Col, Divider, Row, Typography} from "antd";
import seoIcon from "../../assets/images/seo.png";
import {Link} from "react-router-dom";
import {LinkOutlined} from "@ant-design/icons";
const { Title } = Typography;

function Seo() {
    return(
        <div className="horoscopeContainer">
            <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={seoIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Seo xəbərlər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/seo-news"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Seo xəbərlər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={8}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={seoIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Seo Sitemap</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/seo-sitemap"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Seo Sitemap səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={seoIcon} style={{ width: 30, height: 30 }} />
                                <Title className="horoscopeTitle" level={5}>Seo Google Index</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/seo-google"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Seo Google Index səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Seo;