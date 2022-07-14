import React, {useEffect, useState} from "react";
import {Button, Table, Modal, Tag, Input, Select, DatePicker} from 'antd';
import {
    EditFilled,
    DeleteFilled,
    PlusCircleFilled,
    ExclamationCircleOutlined, SearchOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {retrieveNews, retrieveNewsSelect, searchNewsApi} from "../../redux/actions/news";
import parse from 'html-react-parser';
import moment from "moment";

const {Option} = Select;
const {confirm} = Modal;

function showDeleteConfirm() {
    confirm({
        title: 'Silmək üçün əminsiniz?',
        icon: <ExclamationCircleOutlined/>,
        okText: 'Əminəm',
        okType: 'danger',
        cancelText: 'Əmin deyiləm',
        onOk() {
            console.log('silindi');
        },
        onCancel() {
            console.log('silinmedi');
        },
    });
}

function NewsList() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const location = window.location.search ? window.location.search : '';
    const [currentType, setCurrentType] = useState(location.substr(location.length - 1));
    const news = useSelector(state => state.news);
    const [newsSelects, setNewsSelects] = useState([]);
    const [searchId, setSearchId] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchDatetime, setSearchDatetime] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const [searchAuthor, setSearchAuthor] = useState(0);
    const [searchData, setSearchData] = useState(
        {
            "id": searchId,
            "title": searchTitle,
            "datetime": searchDatetime,
            "category": searchCategory,
            "author": searchAuthor
        }
    );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(retrieveNewsSelect());
        dispatch(retrieveNews(currentType, currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        setNewsSelects(news?.news?.author);
        if (news?.news?.data) {
            if (news?.news?.data?.results) {
                setTableData(news?.news?.data?.results.data);
                setTotal(news?.news?.data?.results?.total);
            }
            else {
                setTableData(news?.news?.data?.data);
                setTotal(news?.news?.data?.total);
            }
        }
    }, [news]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData({
            "id": searchId,
            "title": searchTitle,
            "datetime": searchDatetime,
            "category": searchCategory,
            "author": searchAuthor
        });
    }, [searchId, searchTitle, searchDatetime, searchCategory, searchAuthor]);

    const searchNews = (e) => {
        e.preventDefault();
        console.log("search", currentType, searchData);
        dispatch(searchNewsApi(currentType, searchData));
    };

    const idChange = (value) => {
        console.log(value);
        setSearchId(value);
    };

    const titleChange = (value) => {
        console.log(value);
        setSearchTitle(value);
    };

    const datetimeChange = (date, dateString) => {
        setSearchDatetime(dateString);
    };

    const categoryChange = (value) => {
        console.log(value);
        setSearchCategory(value);
    };

    const authorChange = (value) => {
        console.log(value);
        setSearchAuthor(value);
    };

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        title: parse(row.title),
        category: row.category.name,
        author: row.author.name,
        datetime: row.datetime,
        status: [row.status],
        operations: ''
    })) : [];

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            children: [
                {
                    title: <Input
                                placeholder="ID"
                                onChange={e => idChange(e.target.value)}
                            />,
                    dataIndex: 'id',
                    render: (_, record) => (
                        <div>
                            {record.id}
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'Başlıq',
            dataIndex: 'title',
            children: [
                {
                    title: <Input
                                placeholder="Başlıq"
                                onChange={e => titleChange(e.target.value)}
                            />,
                    dataIndex: 'title',
                    render: (_, record) => (
                        <div>
                            {record.title}
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'Bölmə',
            dataIndex: 'category',
            align: "center",
            children: [
                {
                    title: <Input
                                placeholder="Bölmə"
                                onChange={e => categoryChange(e.target.value)}
                            />,
                    dataIndex: 'category',
                    align: "center",
                    render: (_, record) => (
                        <div>
                            {record.category}
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'Müəllif',
            dataIndex: 'author',
            align: "center",
            children: [
                {
                    title: <Select
                                showSearch
                                placeholder="Müəllif seçin"
                                optionFilterProp="children"
                                onChange={(e) => authorChange(e)}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >

                                {
                                    newsSelects ?
                                        newsSelects.map((news) => (
                                            <Option value={news.name}>{news.name}</Option>
                                        )) : []

                                }
                            </Select>,
                    dataIndex: 'author',
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
                        placeholder="Vaxt seçin"
                        onChange={datetimeChange}/>,
                    dataIndex: 'datetime',
                    width: "280px",
                    align: "center",
                },
            ],
        },

        {
            title: 'Status',
            dataIndex: 'status',
            align: 'center',
            width: "200px",
            render: (status) => (
                <span>
                    {status.map(st => {
                        let color;
                        let name;
                        if (st === 0) {
                            color = "red";
                            name = "Deaktiv";
                        } else if (st === 1) {
                            color = "geekblue";
                            name = "Aktiv";
                        } else if (st === 4) {
                            color = "green";
                            name = "Gələn xəbərlər";
                        } else if (st === 2) {
                            color = "volcano";
                            name = "Silinmiş xəbərlər";
                        } else if (st === 5) {
                            color = "purple";
                            name = "Gözləyən xəbərlər";
                        } else if (st === 3) {
                            color = "cyan";
                            name = "Oxunan xəbərlər";
                        }
                        return (
                            <Tag color={color}>{name}</Tag>
                        );
                    })}
                </span>
            )
        },
        {
            title: 'Əməliyyatlar',
            dataIndex: 'operations',
            align: "center",
            children: [
                {
                    title: <Button type="primary" block onClick={(e) => searchNews(e)}>
                                <SearchOutlined/>
                                Axtarış et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_, record) => (
                        <div>
                            <Link to={"/users/" + record.id}>
                                <Button type="primary" className="mr-1" data-id={record.id}>
                                    <EditFilled/>
                                    Redaktə et
                                </Button>
                            </Link>
                            <Button onClick={showDeleteConfirm} type="primary">
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
                <Link to="/news/create">
                    <Button type="primary">
                        <PlusCircleFilled/>
                        Yeni xəbər əlavə et
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

export default NewsList;