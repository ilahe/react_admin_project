import React, {useEffect, useState} from "react";
import {Button, Switch, Table, Modal, Avatar, Image, message, Input, Select} from 'antd';
import {EditFilled, DeleteFilled, UserOutlined, SearchOutlined} from '@ant-design/icons';
import {
    CheckCircleFilled,
    CloseCircleFilled,
    PlusCircleFilled,
    ExclamationCircleOutlined
} from "@ant-design/icons/lib/icons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteAuthor, retrieveAuthors, searchAuthorApi} from "../../redux/actions/authors";

const {Option} = Select;
const {confirm} = Modal;

function Authors() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const authors = useSelector(state => state.authors);
    const [searchFullname, setSearchFullname] = useState("");
    const [searchEmail, setSearchEmail] = useState("");
    const [searchStatus, setSearchStatus] = useState(0);
    const [searchData, setSearchData] = useState({"fullname": searchFullname,"email": searchEmail,"status": searchStatus});
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveAuthors(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        if (authors?.authors?.data) {
            if (authors?.authors?.data?.results) {
                setTableData(authors?.authors?.data?.results.data);
                setTotal(authors?.authors?.data?.results?.total);
            }
            else {
                setTableData(authors?.authors?.data?.data);
                setTotal(authors?.authors?.data?.total);
            }
        }
    }, [authors]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData({
            "fullname": searchFullname,
            "email": searchEmail,
            "status": searchStatus
        });
    }, [searchFullname, searchEmail, searchStatus]);


    const searchAuthor = (e) => {
        e.preventDefault();
        console.log("search", searchData);
        dispatch(searchAuthorApi(searchData));
    };

    const fullnameChange = (value) => {
        console.log(value);
        setSearchFullname(value);
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
                dispatch(deleteAuthor(id))
                    .then(() => {
                        message.success('Məlumat silindi');
                        dispatch(retrieveAuthors(currentPage));
                    })
                    .catch((e) => {
                        message.error("Xəta baş verdi");
                    });
            }
        });
    };

    const tableDatas = (tableData.length > 0) ? tableData.map(row => (
        {
            id: row.id,
            fullname: row.name + " " + row.surname,
            avatar: row.photo ? "https://xxxx.az/storage/authors/" + row.photo : "",
            email: row.email,
            status: [row.status],
            operations: ''
        }
    )) : [];

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
                    width: "220px",
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
                    title: <Button type="primary" block onClick={(e) => searchAuthor(e)}>
                                <SearchOutlined/>
                                Axtarış et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_, record) => (
                        <div>
                            <Link to={"/authors/" + record.id}>
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
                <Link to="/authors/create">
                    <Button type="primary">
                        <PlusCircleFilled/>
                        Yeni müəllif əlavə et
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

export default Authors;