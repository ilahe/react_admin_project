import React from "react";
import {Avatar, Card, Col, Divider, Row, Typography} from "antd";
import {Link} from "react-router-dom";
import {CheckCircleOutlined, LinkOutlined} from "@ant-design/icons";
const { Title } = Typography;

function Main() {
    return(
        <div className="horoscopeContainer">
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>İstifadəçilər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/users"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    İstifadəçilər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>Müəlliflər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/authors"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Müəlliflər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>Kateqoriya linkləri</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/category-links"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Kateqoriya linkləri səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>Bölmələr</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/categories"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Bölmələr səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>Xəbərlər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/news/main"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Xəbərlər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>Bizə yazanlar</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/contacts"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Bizə yazanlar səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>Loqlar</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/logs"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Loqlar səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>Bürclər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/horoscope/main"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Bürclər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>Videolar</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/videos"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Videolar səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>SEO</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/seo"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    SEO səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>Statistika</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/statistics"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Statistika səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>Musiqilər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/mp3"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Musiqilər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>

                <Col className="gutter-row" span={6}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType2">
                                <CheckCircleOutlined />
                                <Title className="horoscopeTitle" level={5}>MP3 İstifadəçilər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/mp3-users-all"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    MP3 İstifadəçilər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Main;