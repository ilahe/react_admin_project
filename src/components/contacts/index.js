import React, {useEffect, useState} from "react";
import {Button, Table, Modal, Switch, message} from 'antd';
import {
    CheckCircleFilled, CloseCircleFilled,
    DeleteFilled,
    ExclamationCircleOutlined, MoreOutlined
} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {deleteContact, findContact, retrieveContacts} from "../../redux/actions/contacts";
import {Link} from "react-router-dom";

const { confirm } = Modal;

function Contacts() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveContacts(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        setTotal(contacts?.data?.total);
    }, [contacts]);

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Silmək üçün əminsiniz?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Əminəm',
            okType: 'danger',
            cancelText: 'Əmin deyiləm',
            onOk() {
                dispatch(deleteContact(id))
                .then(() => {
                    message.success('Məlumat silindi');
                    dispatch(retrieveContacts(currentPage));
                })
                .catch((e) => {
                    message.error("Xəta baş verdi");
                });
            }
        });
    }

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    }

    const tableDatas = contacts.data ? contacts.data.data.map(row => ({
        id: row.id,
        username: row.username,
        email: row.email,
        content: row.content,
        status: row.status,
        operations: ''
    })) : []

    const columns = [
        {
            title: 'Ad Soyad',
            dataIndex: 'username',
            width: "200px",
        },
        {
            title: 'Email',
            dataIndex: 'email',
            align: 'center',
            width: "250px",
            render: (email) => {
                return <p>{email}</p>;
            },
        },
        {
            title: 'Mətn',
            dataIndex: 'content',
            render: (content) => (
                <div>{content.substring(0,110) + "..."}</div>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            align: "center",
            width: "200px",
            render: (status) => {
                let checkValue = 'defaultChecked';
                if (status === '0') {
                    checkValue = '';
                }
                return (
                    <Switch
                        checkedChildren={<CheckCircleFilled/>}
                        unCheckedChildren={<CloseCircleFilled/>}
                        defaultChecked={status}
                    />
                );
            },
        },
        {
            title: 'Əməliyyatlar',
            dataIndex: 'operations',
            width: "220px",
            align: "center",
            render: (_,record) => (
                <div>
                    <Link to={"/contacts/" + record.id}>
                        <Button type="primary" className="mr-1" data-id={record.id}>
                            <MoreOutlined />
                            Ətraflı oxu
                        </Button>
                    </Link>
                    <Button onClick={(e=> showDeleteConfirm(record.id))} type="primary">
                        <DeleteFilled/>
                        Sil
                    </Button>
                </div>
            ),
        },
    ];


    return (
        <div>
            <Table columns={columns}
                   dataSource={tableDatas}
                   size="small"
                   bordered
                   pagination={{total: total, current: currentPage}}
                   onChange={onChangePage}/>
        </div>
    )
}

export default Contacts;