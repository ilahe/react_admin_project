import React, {useEffect, useState} from "react";
import {Button, Switch, Table, Modal, Tag, message, Select, Input, DatePicker} from 'antd';
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
import {deleteHoroscope, retrieveHoroscopes, searchHoroscopeApi, statusHoroscope} from "../../redux/actions/horoscopes";
import {Form} from "antd/lib/form";

const { confirm } = Modal;
const {Option} = Select;

function HoroscopeList() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const location = window.location.search ? window.location.search : '';
    const [currentType, setCurrentType] = useState(location.substr(location.length - 1));
    const horoscopes = useSelector(state => state.horoscopes);
    const [userSelects, setUserSelects] = useState([]);
    const [searchHoroscope, setSearchHoroscope] = useState("");
    const [searchType, setSearchType] = useState("");
    const [searchUser, setSearchUser] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [searchData, setSearchData] = useState(
        {
            "horoscope": searchHoroscope,
            "type": searchType,
            "user_id": searchUser,
            "date": searchDate,
        }
    );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveHoroscopes(currentType, currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        setUserSelects(horoscopes?.horoscopes?.users);
        if (horoscopes?.horoscopes?.data) {
            if (horoscopes?.horoscopes?.data?.results) {
                setTableData(horoscopes?.horoscopes?.data?.results.data);
                setTotal(horoscopes?.horoscopes?.data?.results?.total);
            }
            else {
                setTableData(horoscopes?.horoscopes?.data?.data);
                setTotal(horoscopes?.horoscopes?.data?.total);
            }
        }
    }, [horoscopes]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData({
            "horoscope": searchHoroscope,
            "type": searchType,
            "user_id": searchUser,
            "date": searchDate,
        });
    }, [searchHoroscope, searchType, searchUser, searchDate]);

    const searchHoroscopeEvent = (e) => {
        e.preventDefault();
        console.log("search", searchData);
        dispatch(searchHoroscopeApi(searchData));
    };

    const horoscopeChange = (value) => {
        console.log(value);
        setSearchHoroscope(value);
    };

    const typeChange = (value) => {
        console.log(value);
        setSearchType(value);
    };

    const userChange = (value) => {
        console.log(value);
        setSearchUser(value);
    };

    const dateChange = (date, dateString) => {
        setSearchDate(dateString);
    };

    const onChangeStatus = (id, status) => {
        var mainStatus = (status == true) ? 1 : 0;
        dispatch(statusHoroscope(id, mainStatus));
    };

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Silm??k ??????n ??minsiniz?',
            icon: <ExclamationCircleOutlined />,
            okText: '??min??m',
            okType: 'danger',
            cancelText: '??min deyil??m',
            onOk() {
                dispatch(deleteHoroscope(id))
                    .then(() => {
                        message.success('M??lumat silindi');
                        dispatch(retrieveHoroscopes(currentType, currentPage));
                    })
                    .catch((e) => {
                        message.error("X??ta ba?? verdi");
                    });
            }
        });
    }

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        horoscope: row.horoscopes.name,
        type: row.type,
        username: row.user.name,
        datetime: row.datetime,
        status: [row.status],
        operations: ''
    })) : [];

    const columns = [
        {
            title: 'B??rc',
            dataIndex: 'horoscope',
            children: [
                {
                    title: <Input
                                placeholder="B??rc"
                                onChange={e => horoscopeChange(e.target.value)}
                            />,
                    dataIndex: 'horoscope',
                    render: (_, record) => (
                        <div>
                            {record.horoscope}
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'N??v',
            dataIndex: 'type',
            align: "center",
            children: [
                {
                    title: <Select
                                showSearch
                                placeholder="Tip se??in"
                                optionFilterProp="children"
                                onChange={(e) => typeChange(e)}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value={1}>G??nl??k</Option>
                                <Option value={2}>H??ft??lik</Option>
                                <Option value={3}>Ayl??q</Option>
                                <Option value={4}>??llik</Option>
                                <Option value={5}>Xarakteristikas??</Option>
                            </Select>,
                    dataIndex: 'type',
                    align: "center",
                    render: (type) => {
                        let color;
                        let name;
                        if (type == 1) {
                            color = "geekblue";
                            name = "G??nl??k";
                        }  else if (type === 2) {
                            color = "green";
                            name = "H??ft??lik";
                        } else if (type === 3) {
                            color = "volcano";
                            name = "Ayl??q";
                        } else if (type === 4) {
                            color = "purple";
                            name = "??llik";
                        } else if (type === 5) {
                            color = "cyan";
                            name = "Xarakteriya";
                        }
                        return <Tag color={color}>{name}</Tag>
                    }
                },
            ],
        },
        {
            title: '??stifad????i ad??',
            dataIndex: 'username',
            align: "center",
            children: [
                {
                    title:   <Select
                                className="w-100"
                                placeholder="??stifad????i ad??"
                                onChange={(e) => userChange(e)}
                            >
                                {
                                    userSelects ?
                                        userSelects.map((user) => (
                                            <Option value={user.id}>{user.name}</Option>
                                        )) : []

                                }
                            </Select>,
                    dataIndex: 'username',
                    align: "center",
                    width: "250px"
                },
            ],
        },
        {
            title: 'Tarix',
            dataIndex: 'datetime',
            align: "center",
            children: [
                {
                    title: <DatePicker
                             placeholder="Vaxt se??in"
                             onChange={dateChange}/>,
                    dataIndex: 'datetime',
                    width: "280px",
                    align: "center",
                },
            ],
        },
        {
            title: 'Status',
            dataIndex: 'status',
            align: "center",
            render: (_, record) => (
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
        {
            title: '??m??liyyatlar',
            dataIndex: 'operations',
            align: "center",
            children: [
                {
                    title: <Button type="primary" block onClick={(e) => searchHoroscopeEvent(e)}>
                                <SearchOutlined/>
                                Axtar???? et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Link to={"/horoscope/" + record.id}>
                                <Button type="primary" className="mr-1" data-id={record.id}>
                                    <EditFilled/>
                                    Redakt?? et
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
                <Link to="/horoscope/create">
                    <Button type="primary">
                        <PlusCircleFilled/>
                        Yeni b??rc ??lav?? et
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

export default HoroscopeList;