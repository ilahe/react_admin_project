import React, {useEffect, useState} from "react";
import {Card, Descriptions} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {findContact} from "../../../redux/actions/contacts";
import {useParams} from "react-router-dom";

function ContactsCrud() {
    let {id} = useParams()
    const contacts = useSelector(state => state.contacts);
    const [currentContact, setCurrentContact] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findContact(id))
    }, []);

    useEffect(() => {
        setCurrentContact(contacts?.contact?.data);
    }, [contacts]);

    return(
        <Card hoverable>
            <div className="bg-white">
                <Descriptions title={currentContact?.username + " adlı istifadəçinin mesajı"}  column={{ xxl: 1 }}>
                    <Descriptions.Item label="Email">
                        {currentContact?.email}
                    </Descriptions.Item>
                    <Descriptions.Item label="Mətn">
                        {currentContact?.content}
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </Card>
    )
}

export default ContactsCrud;