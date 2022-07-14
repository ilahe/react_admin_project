import React, {useEffect, useState} from "react";
import {Button, Switch, Table, Modal, message, Input, Select} from 'antd';
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
import {
    deleteHoroscopeProperties,
    retrieveHoroscopeMatching,
    retrieveHoroscopeProperties, searchHoroscopePropertyApi, statusHoroscopeProperties
} from "../../redux/actions/horoscopeproperties";

const {Option} = Select;
const { confirm } = Modal;

function HoroscopeProperty() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const horoscopeproperties = useSelector(state => state.horoscopeproperties);
    const [searchHoroscope, setSearchHoroscope] = useState("");
    const [searchProperty, setSearchProperty] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
    const [searchData, setSearchData] = useState(
        {
            "horoscope": searchHoroscope,
            "property": searchProperty,
            "status": searchStatus
        }
    );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveHoroscopeProperties(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        if (horoscopeproperties?.horoscopeProperties?.data) {
            if (horoscopeproperties?.horoscopeProperties?.data?.results) {
                setTableData(horoscopeproperties?.horoscopeProperties?.data?.results.data);
                setTotal(horoscopeproperties?.horoscopeProperties?.data?.results?.total);
            }
            else {
                setTableData(horoscopeproperties?.horoscopeProperties?.data?.data);
                setTotal(horoscopeproperties?.horoscopeProperties?.data?.total);
            }
        }
    }, [horoscopeproperties]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData({
            "horoscope": searchHoroscope,
            "property": searchProperty,
            "status": searchStatus
        });
    }, [searchHoroscope, searchProperty, searchStatus]);

    const onChangeStatus = (id, status) => {
        var mainStatus = (status == true) ? 1 : 0;
        dispatch(statusHoroscopeProperties(id, mainStatus));
    };

    const searchHoroscopeProperty = (e) => {
        e.preventDefault();
        console.log("search", searchData);
        dispatch(searchHoroscopePropertyApi(searchData));
    };

    const horoscopeChange = (value) => {
        console.log(value);
        setSearchHoroscope(value);
    };

    const propertyChange = (value) => {
        console.log(value);
        setSearchProperty(value);
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
                dispatch(deleteHoroscopeProperties(id))
                    .then(() => {
                        message.success('Məlumat silindi');
                        dispatch(retrieveHoroscopeProperties(currentPage));
                    })
                    .catch((e) => {
                        message.error("Xəta baş verdi");
                    });
            }
        });
    }

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        horoscope: row.horoscope.name,
        property: row.property.name,
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
            title: 'Uyğun bürc',
            dataIndex: 'property',
            children: [
                {
                    title: <Input
                                placeholder="Uyğun bürc"
                                onChange={e => propertyChange(e.target.value)}
                            />,
                    dataIndex: 'property',
                    render: (property) => (
                        <div>{property}</div>
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
            ],
        },
        {
            title: 'Əməliyyatlar',
            dataIndex: 'operations',
            align: "center",
            children: [
                {
                    title: <Button type="primary" block onClick={(e) => searchHoroscopeProperty(e)}>
                                <SearchOutlined/>
                                Axtarış et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Link to={"/horoscope-properties/" + record.id}>
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
                <Link to="/horoscope-properties/create">
                    <Button type="primary">
                        <PlusCircleFilled/>
                        Yeni uyğun bürc əlavə et
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

export default HoroscopeProperty;