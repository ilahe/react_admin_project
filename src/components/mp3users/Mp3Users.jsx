import React, {useEffect, useState} from "react";
import {Button, Switch, Table, Modal, Tag, message, Input, Select} from 'antd';
import {
    EditFilled,
    DeleteFilled,
    CheckCircleFilled,
    CloseCircleFilled,
    PlusCircleFilled,
    ExclamationCircleOutlined, SearchOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteMp3Users, retrieveMp3Users, searchMp3UsersApi, statusMp3Users} from "../../redux/actions/mp3users";

const {Option} = Select;
const { confirm } = Modal;

function Mp3users() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentType, setCurrentType] = useState(0);
    const mp3users = useSelector(state => state.mp3users);
    const [searchCode, setSearchCode] = useState("");
    const [searchName, setSearchName] = useState("");
    const [searchSurname, setSearchSurname] = useState("");
    const [searchEmail, setSearchEmail] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
    const [searchData, setSearchData] = useState(
        {
            "code": searchCode,
            "name": searchName,
            "surname": searchSurname,
            "email": searchEmail,
            "status": searchStatus,
        }
    );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const location = window.location.pathname;
        if (location === "/mp3-users") {
            setCurrentType(0);
        }
        else {
            setCurrentType(1);
        }
        dispatch(retrieveMp3Users(currentType, currentPage));
    }, ['', currentType, currentPage]);

    useEffect(() => {
        if (mp3users?.mp3Users?.data) {
            if (mp3users?.mp3Users?.data?.results) {
                setTableData(mp3users?.mp3Users?.data?.results.data);
                setTotal(mp3users?.mp3Users?.data?.results?.total);
            }
            else {
                setTableData(mp3users?.mp3Users?.data?.data);
                setTotal(mp3users?.mp3Users?.data?.total);
            }
        }
    }, [mp3users]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData( {
            "code": searchCode,
            "name": searchName,
            "surname": searchSurname,
            "email": searchEmail,
            "status": searchStatus,
        });
    }, [searchCode, searchName, searchSurname, searchEmail, searchStatus]);

    const searchMp3Users = (e) => {
        e.preventDefault();
        dispatch(searchMp3UsersApi(searchData));
    };

    const codeChange = (value) => {
        console.log(value);
        setSearchCode(value);
    };

    const nameChange = (value) => {
        console.log(value);
        setSearchName(value);
    };

    const surnameChange = (value) => {
        console.log(value);
        setSearchSurname(value);
    };

    const emailChange = (value) => {
        console.log(value);
        setSearchEmail(value);
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
                dispatch(deleteMp3Users(id))
                    .then(() => {
                        message.success('Məlumat silindi');
                        dispatch(retrieveMp3Users(currentType, currentPage));
                    })
                    .catch((e) => {
                        message.error("Xəta baş verdi");
                    });
            }
        });
    }

    const onChangeStatus = (id, status) => {
        var mainStatus = (status == true) ? 1 : 0;
        dispatch(statusMp3Users(id, mainStatus));
    };

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        code: row.code,
        name: row.name,
        surname: row.surname,
        email: row.email,
        status: [row.status],
        operations: ''
    })) : [];

    const columns = [
        {
            title: 'Kod',
            dataIndex: 'code',
            align: "center",
            children: [
                {
                    title: <Input
                                placeholder="Kod"
                                onChange={e => codeChange(e.target.value)}
                            />,
                    dataIndex: 'code',
                    width: "150px",
                    align: "center",
                    render: (_, record) => (
                        <div>
                            {record.code}
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'Ad Soyad',
            dataIndex: 'name',
            children: [
                {
                    title: <Input
                                placeholder="Ad, Soyad"
                                onChange={e => nameChange(e.target.value)}
                            />,
                    dataIndex: 'name',
                    render: (_, record) => (
                        <div>
                            {record.name + " " +record.surname}
                        </div>
                    ),
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
                    render: (_, record) => (
                        <div>
                            {record.email}
                        </div>
                    ),
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
                    width: "250px",
                    align: "center",
                    render: (_, record)  => (
                        <span>
                            {record.status.map(st => {
                                let checkValue = 'defaultChecked';
                                if (st === '0') {
                                    checkValue = '';
                                }
                                return (
                                    <Switch
                                        checkedChildren={<CheckCircleFilled/>}
                                        unCheckedChildren={<CloseCircleFilled/>}
                                        defaultChecked={st}
                                        onChange={(st) => onChangeStatus(record.id, st)}
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
                    title: <Button type="primary" block onClick={(e) => searchMp3Users(e)}>
                                <SearchOutlined/>
                                Axtarış et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Link to={"/mp3/" + record.id}>
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
            <Table columns={columns}
                   dataSource={tableDatas}
                   size="small"
                   bordered
                   pagination={{total: total, current: currentPage}}
                   onChange={onChangePage}/>
        </div>
    )
}

export default Mp3users;