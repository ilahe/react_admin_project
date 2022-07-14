import React, {useEffect, useState} from "react";
import {Button, Switch, Table, Modal, Avatar, Image, message, Input, Select} from 'antd';
import {
    EditFilled,
    DeleteFilled,
    UserOutlined,
    CheckCircleFilled,
    CloseCircleFilled,
    PlusCircleFilled,
    ExclamationCircleOutlined, SearchOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, retrieveUsers, searchUserApi} from "../../redux/actions/users";

const {Option} = Select;
const {confirm} = Modal;

function Users() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const users = useSelector(state => state.users);
    const [searchFullname, setSearchFullname] = useState("");
    const [searchUsername, setSearchUsername] = useState("");
    const [searchEmail, setSearchEmail] = useState("");
    const [searchPhone, setSearchPhone] = useState("");
    const [searchStatus, setSearchStatus] = useState(0);
    const [searchData, setSearchData] = useState(
            {
                "fullname": searchFullname,
                "username": searchUsername,
                "phone": searchPhone,
                "email": searchEmail,
                "status": searchStatus
            }
        );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveUsers(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        if (users?.users?.data) {
            if (users?.users?.data?.results) {
                setTableData(users?.users?.data?.results.data);
                setTotal(users?.users?.data?.results?.total);
            }
            else {
                setTableData(users?.users?.data?.data);
                setTotal(users?.users?.data?.total);
            }
        }
    }, [users]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData({
            "fullname": searchFullname,
            "username": searchUsername,
            "email": searchEmail,
            "phone": searchPhone,
            "status": searchStatus
        });
    }, [searchFullname, searchUsername, searchEmail, searchPhone, searchStatus]);

    const searchUser = (e) => {
        e.preventDefault();
        console.log("search", searchData);
        dispatch(searchUserApi(searchData));
    };

    const fullnameChange = (value) => {
        console.log(value);
        setSearchFullname(value);
    };

    const usernameChange = (value) => {
        console.log(value);
        setSearchUsername(value);
    };

    const emailChange = (value) => {
        console.log(value);
        setSearchEmail(value);
    };

    const phoneChange = (value) => {
        console.log(value);
        setSearchPhone(value);
    };

    const statusChange = (value) => {
        console.log(value);
        setSearchStatus(value);
    };


    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Silmək üçün əminsiniz?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Əminəm',
            okType: 'danger',
            cancelText: 'Əmin deyiləm',
            onOk() {
                dispatch(deleteUser(id))
                    .then(() => {
                        message.success('Məlumat silindi');
                        dispatch(retrieveUsers(currentPage));
                    })
                    .catch((e) => {
                        message.error("Xəta baş verdi");
                    });
            }
        });
    }

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        fullname: row.name + " " + row.surname,
        avatar: row.photo ? "https://xxxx.az/storage/authors/" + row.photo : "",
        username: row.username,
        email: row.email,
        phone: row.phone,
        status: [row.status],
        operations: ''
    })) : [];

    const columns = [
        {
            title: 'Ad Soyad',
            dataIndex: 'fullname',
            children: [
                {
                    title: <Input
                                placeholder="Ad soyad"
                                onChange={e => fullnameChange(e.target.value)}
                            />,
                    dataIndex: 'fullname',
                    render: (_, record) => (
                        <div className="avatarFlex">
                            {record.avatar ?
                                <Avatar src={<Image src={record.avatar} style={{width: 35}}/>}/> :
                                <Avatar style={{backgroundColor: '#1890ff'}} icon={<UserOutlined/>}/>}
                            {record.fullname}
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'İstifadəçi adı',
            dataIndex: 'username',
            children: [
                {
                    title: <Input
                                placeholder="İstifadəçi adı"
                                onChange={e => usernameChange(e.target.value)}
                            />,
                    dataIndex: 'username',
                },
            ],
        },
        {
            title: 'Email',
            dataIndex: 'email',
            children: [
                {
                    title: <Input
                                placeholder="Email"
                                onChange={e => emailChange(e.target.value)}
                            />,
                    dataIndex: 'email',
                },
            ],
        },
        {
            title: 'Mobil nömrə',
            dataIndex: 'phone',
            children: [
                {
                    title: <Input
                                placeholder="Telefon nömrəsi"
                                onChange={e => phoneChange(e.target.value)}
                            />,
                    dataIndex: 'phone',
                },
            ],
        },
        {
            title: 'Status',
            dataIndex: 'status',
            align: "center",
            children: [
                {
                    title: <Select
                                showSearch
                                placeholder="Status seçin"
                                optionFilterProp="children"
                                onChange={(e) => statusChange(e)}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="1">Aktiv</Option>
                                <Option value="0">Deaktiv</Option>
                            </Select>,
                    dataIndex: 'status',
                    width: "180px",
                    align: "center",
                    render: status => (
                        <span>
                            {status.map(st => {
                                let checkValue = 'defaultChecked';
                                if (st === '0') {
                                    checkValue = '';
                                }
                                return (
                                    <Switch
                                        checkedChildren={<CheckCircleFilled/>}
                                        unCheckedChildren={<CloseCircleFilled/>}
                                        defaultChecked={st}
                                    />
                                );
                            })}
                        </span>
                    )
                },
            ],
        },
        {
            title: 'Əməliyyatlar',
            dataIndex: 'operations',
            align: "center",
            children: [
                {
                    title: <Button type="primary" block onClick={(e) => searchUser(e)}>
                                <SearchOutlined/>
                                Axtarış et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Link to={"/users/" + record.id}>
                                <Button type="primary" className="mr-1" data-id={record.id}>
                                    <EditFilled/>
                                    Redaktə et
                                </Button>
                            </Link>
                            <Button onClick={(e=> showDeleteConfirm(record.id))} type="primary">
                                <DeleteFilled/>
                                Sil
                            </Button>
                        </div>
                    ),
                },
            ]
        },
    ];

    return (
        <div>
            <div className="create_container mb-1">
                <Link to="/roles/create">
                    <Button type="primary" className="mr-1">
                        <PlusCircleFilled/>
                        Yeni role əlavə et
                    </Button>
                </Link>
                <Link to="/users/create">
                    <Button type="primary">
                        <PlusCircleFilled/>
                        Yeni istifdəçi əlavə et
                    </Button>
                </Link>
            </div>
            <Table columns={columns}
                   dataSource={tableDatas}
                   size="small"
                   bordered
                   pagination={{total: total, current: currentPage}}
                   onChange={onChangePage}/>
        </div>
    )
}

export default Users;