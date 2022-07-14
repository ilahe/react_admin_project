import React, {useEffect, useState} from "react";
import {Button, Switch, Table, Modal, Select, Input} from 'antd';
import {
    EditFilled,
    CheckCircleFilled,
    CloseCircleFilled,
    PlusCircleFilled, SearchOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {retrieveHoroscopeLoves, searchHoroscopeLoveApi} from "../../redux/actions/horoscopeloves";

const { confirm } = Modal;
const {Option} = Select;

function HoroscopeLove() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const horoscopeloves = useSelector(state => state.horoscopeloves);
    const [searchHoroscope, setSearchHoroscope] = useState("");
    const [searchLove, setSearchLove] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
    const [searchData, setSearchData] = useState(
        {
            "horoscope": searchHoroscope,
            "love": searchLove,
            "status": searchStatus
        }
    );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveHoroscopeLoves(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        if (horoscopeloves?.horoscopeLoves?.data) {
            if (horoscopeloves?.horoscopeLoves?.data?.results) {
                setTableData(horoscopeloves?.horoscopeLoves?.data?.results.data);
                setTotal(horoscopeloves?.horoscopeLoves?.data?.results?.total);
            }
            else {
                setTableData(horoscopeloves?.horoscopeLoves?.data?.data);
                setTotal(horoscopeloves?.horoscopeLoves?.data?.total);
            }
        }
    }, [horoscopeloves]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData({
            "horoscope": searchHoroscope,
            "love": searchLove,
            "status": searchStatus
        });
    }, [searchHoroscope, searchLove, searchStatus]);

    const searchHoroscopeLove = (e) => {
        e.preventDefault();
        console.log("search", searchData);
        dispatch(searchHoroscopeLoveApi(searchData));
    };

    const horoscopeChange = (value) => {
        console.log(value);
        setSearchHoroscope(value);
    };

    const loveChange = (value) => {
        console.log(value);
        setSearchLove(value);
    };

    const statusChange = (value) => {
        console.log(value);
        setSearchStatus(value);
    };

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        horoscope: row.horoscope.name,
        love: row.love.name,
        status: [row.status],
        operations: ''
    })) : [];

    const columns = [
        {
            title: 'Bürc',
            dataIndex: 'horoscope',
            children: [
                {
                    title: <Input
                                placeholder="Bürc"
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
            title: 'Sevgi bürcü',
            dataIndex: 'love',
            children: [
                {
                    title: <Input
                                placeholder="Sevgi bürcü"
                                onChange={e => loveChange(e.target.value)}
                            />,
                    dataIndex: 'love',
                    render: (love) => (
                        <div>{love}</div>
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
                    title:  <Select
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
                    width: "230px",
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
                    title:  <Button type="primary" block onClick={(e) => searchHoroscopeLove(e)}>
                                <SearchOutlined/>
                                Axtarış et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Link to={"/horoscope-love/" + record.id}>
                                <Button type="primary" className="mr-1" data-id={record.id}>
                                    <EditFilled/>
                                    Redaktə et
                                </Button>
                            </Link>
                        </div>
                    ),
                },
            ]
        },
    ];

    return (
        <div>
            <div className="create_container mb-1">
                <Link to="/horoscopes/create">
                    <Button type="primary">
                        <PlusCircleFilled/>
                        Yeni bürc əlavə et
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

export default HoroscopeLove;