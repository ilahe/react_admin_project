import React, {useEffect, useState} from "react";
import Moment from 'react-moment';
import {Button, Table, Modal, Tag, message, Input, DatePicker} from 'antd';
import {
    DeleteFilled,
    ExclamationCircleOutlined, SearchOutlined
} from '@ant-design/icons';
import {
    SearchButton,
    SearchById,
    SearchByUsername,
    SearchByDate,
    SearchByIP
} from "../../helpers/search";
import {useDispatch, useSelector} from "react-redux";
import {deleteLog, retrieveLogs, searchLogApi} from "../../redux/actions/logs";
import {searchUserApi} from "../../redux/actions/users";

const { confirm } = Modal;

function Logs() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const logs = useSelector(state => state.logs);
    const [searchId, setSearchId] = useState("");
    const [searchUsername, setSearchUsername] = useState("");
    const [searchIp, setSearchIp] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [searchData, setSearchData] = useState(
        {
            "id": searchId,
            "user": searchUsername,
            "ip": searchIp,
            "date": searchDate
        }
    );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveLogs(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        console.log("logs:::", logs.data);
        if (logs?.data) {
            if (logs?.data?.results) {
                console.log("var",logs?.data?.results?.total, logs?.data?.results.data );
                setTableData(logs?.data?.results.data);
                setTotal(logs?.data?.results?.total);
            }
            else {
                console.log("yoxdu",logs?.data?.data );
                setTableData(logs?.data?.data);
                setTotal(logs?.data?.total);
            }
        }
    }, [logs]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData({
            "id": searchId,
            "user": searchUsername,
            "ip": searchIp,
            "date": searchDate
        });
    }, [searchId, searchUsername, searchIp, searchDate]);

    const searchLog = (e) => {
        e.preventDefault();
        console.log("search", searchData);
        dispatch(searchLogApi(searchData));
    };

    const idChange = (value) => {
        console.log(value);
        setSearchId(value);
    };

    const usernameChange = (value) => {
        console.log(value);
        setSearchUsername(value);
    };

    const ipChange = (value) => {
        console.log(value);
        setSearchIp(value);
    };

    const dateChange = (date, dateString) => {
        setSearchDate(dateString);
    };

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Silmək üçün əminsiniz?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Əminəm',
            okType: 'danger',
            cancelText: 'Əmin deyiləm',
            onOk() {
                dispatch(deleteLog(id))
                    .then(() => {
                        message.success('Məlumat silindi');
                        dispatch(retrieveLogs(currentPage));
                    })
                    .catch((e) => {
                        message.error("Xəta baş verdi");
                    });
            }
        });
    }

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        username: row.user.name,
        info: row.info,
        action: row.action,
        module: row.module,
        ip: row.ip,
        datetime: <Moment format="DD-MM-YYYY">{row.created_at}</Moment>,
        operations: ''
    })) : [];

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            children: [
                {
                    title: <Input
                                placeholder="ID"
                                onChange={e => idChange(e.target.value)}
                            />,
                    dataIndex: 'id',
                    key: 'id',
                    width: "120px",
                    render: (id) => {
                        return <a key={id.toString()}>{id}</a>;
                    },

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
            title: 'İnfo',
            dataIndex: 'info',
            align: 'center',
            width: "250px",
            render: (_, record) => {
                return <p>{record.info}</p>;
            },
        },
        {
            title: 'Əməliyyat',
            dataIndex: 'action',
            align: 'center',
            width: "200px",
            render: (action) => {
                let color;
                if (action == "Redaktə olundu") {
                    color = "geekblue";
                }  else if (action === "Silindi") {
                    color = "red";
                } else if (action === "Dərc olundu") {
                    color = "purple";
                } else if (action === "Əlavə olundu") {
                    color = "cyan";
                } else {
                    color = "volcano";
                }
                return <Tag color={color}>{action}</Tag>
            },
        },
        {
            title: 'Modul',
            dataIndex: 'module',
            align: "center",
            width: "180px",
            render: (module) => (
                <div>{module}</div>
            ),
        },
        {
            title: 'IP',
            dataIndex: 'ip',
            align: "center",
            children: [
                {
                    title: <Input
                                placeholder="Ip"
                                onChange={e => ipChange(e.target.value)}
                            />,
                    dataIndex: 'ip',
                    width: "200px",
                    align: "center",
                    render: (ip) => (
                        <div>{ip}</div>
                    ),
                },
            ],
        },
        {
            title: 'Tarix',
            dataIndex: 'datetime',
            align: "center",
            children: [
                {
                    title:  <DatePicker
                        placeholder="Vaxt seçin"
                        onChange={dateChange}/>,
                    dataIndex: 'datetime',
                    width: "250px",
                    align: "center",
                },
            ],
        },
        {
            title: 'Əməliyyatlar',
            dataIndex: 'operations',
            align: "center",
            children: [
                {
                    title: <Button type="primary" block onClick={(e) => searchLog(e)}>
                                <SearchOutlined/>
                                Axtarış et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
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

export default Logs;