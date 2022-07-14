import React from 'react';
import {Card, Row, Col, Typography, Avatar, Divider} from 'antd';
import mp3UsersIcon from "../../assets/images/mp3users.png";
import {LinkOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
const { Title } = Typography;

function MainMp3Users() {
    return(
        <div className="horoscopeContainer">
            <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={mp3UsersIcon} style={{ width: 35, height: 35 }} />
                                <Title className="horoscopeTitle" level={5}>Bütün mp3 istifadəçilər</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/mp3-users"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Bütün musiqilər səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div className="row_main">
                        <Card hoverable>
                            <div className="dFlexType1">
                                <Avatar src={mp3UsersIcon} style={{ width: 35, height: 35 }} />
                                <Title className="horoscopeTitle" level={5}>Blok olunan mp3 istifadəçiləri</Title>
                            </div>

                            <div className="total">12543</div>
                            <Divider />
                            <Link to={"/blocked-users"}>
                                <div className="redirectHoroscope">
                                    <LinkOutlined />
                                    Blok olunan mp3 istifadəçiləri səhifəsinə keçid edin
                                </div>
                            </Link>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainMp3Users;