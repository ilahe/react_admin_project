import React from 'react';
import {Card, Row, Col, Typography, Avatar, Divider, Button} from 'antd';
import horoscopeIcon from "../../assets/images/horoscope.png";
import {LinkOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
const { Title } = Typography;

function MainHoroscope() {
    return(
        <div className="horoscopeContainer">
            <Row gutter={16}>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={horoscopeIcon} style={{ width: 24, height: 24 }} />
                                <Title className="horoscopeTitle" level={5}>Bütün bürclər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/horoscope?type=0"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Bütün bürclər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={horoscopeIcon} style={{ width: 24, height: 24 }} />
                                <Title className="horoscopeTitle" level={5}>Gələn bürclər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/horoscope?type=1"}>
                               <div className="redirectHoroscope">
                                   <LinkOutlined />
                                   Gələn bürclər səhifəsinə keçid edin
                               </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={horoscopeIcon} style={{ width: 24, height: 24 }} />
                                <Title className="horoscopeTitle" level={5}>Oxunan bürclər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/horoscope?type=2"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Oxunan bürclər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={horoscopeIcon} style={{ width: 24, height: 24 }} />
                                <Title className="horoscopeTitle" level={5}>Gözləyən bürclər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/horoscope?type=3"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Gözləyən bürclər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>


                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={horoscopeIcon} style={{ width: 24, height: 24 }} />
                                <Title className="horoscopeTitle" level={5}>Yenilənmiş bürclər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/horoscope?type=6"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Yenilənmiş bürclər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={horoscopeIcon} style={{ width: 24, height: 24 }} />
                                <Title className="horoscopeTitle" level={5}>Deaktiv bürclər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/horoscope?type=4"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Deaktiv bürclər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={horoscopeIcon} style={{ width: 24, height: 24 }} />
                                <Title className="horoscopeTitle" level={5}>Silinən bürclər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/horoscope?type=4"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Silinən bürclər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={horoscopeIcon} style={{ width: 24, height: 24 }} />
                                <Title className="horoscopeTitle" level={5}>Sevgi bürclər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/horoscope-love"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Sevgi bürcləri səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={horoscopeIcon} style={{ width: 24, height: 24 }} />
                                <Title className="horoscopeTitle" level={5}>Uyğun bürclər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/horoscope-properties"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Uyğun bürclər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainHoroscope;