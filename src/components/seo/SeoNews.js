import React, {useEffect, useState} from "react";
import {Button, DatePicker, Input, Table} from 'antd';
import {
    EditFilled, SearchOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {retrieveSeoNews, searchSeoNewsApi} from "../../redux/actions/seonews";
import Moment from "react-moment";
import parse from 'html-react-parser';

function SeoNews() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const seonews = useSelector(state => state.seonews);
    const [searchId, setSearchId] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [searchData, setSearchData] = useState(
        {
            "seo_id": searchId,
            "seo_title": searchTitle,
            "date": searchDate,
        }
    );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveSeoNews(currentPage));
    }, [' ', currentPage]);

    useEffect(() => {
        if (seonews?.seoNewsAll?.data) {
            if (seonews?.seoNewsAll?.data?.results) {
                setTableData(seonews?.seoNewsAll?.data?.results.data);
                setTotal(seonews?.seoNewsAll?.data?.results?.total);
            }
            else {
                setTableData(seonews?.seoNewsAll?.data?.data);
                setTotal(seonews?.seoNewsAll?.data?.total);
            }
        }
    }, [seonews]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData({
            "seo_id": searchId,
            "seo_title": searchTitle,
            "date": searchDate,
        });
    }, [searchId, searchTitle, searchDate]);

    const searchSeoNews = (e) => {
        e.preventDefault();
        console.log("search", searchData);
        dispatch(searchSeoNewsApi(searchData));
    };

    const idChange = (value) => {
        console.log(value);
        setSearchId(value);
    };

    const titleChange = (value) => {
        console.log(value);
        setSearchTitle(value);
    };

    const dateChange = (date, dateString) => {
        setSearchDate(dateString);
    };

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        title: parse(row.title),
        datetime: <Moment format="DD/MM/YYYY h:mm">{row.datetime}</Moment>,
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
            title: 'Tarix',
            dataIndex: 'datetime',
            align: "center",
            children: [
                {
                    title: <DatePicker
                            placeholder="Vaxt seçin"
                            onChange={dateChange}/>,
                    dataIndex: 'datetime',
                    width: "280px",
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
                    title: <Button type="primary" block onClick={(e) => searchSeoNews(e)}>
                                <SearchOutlined/>
                                Axtarış et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Link to={"/seo-news/" + record.id}>
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
            <Table columns={columns}
                   dataSource={tableDatas}
                   size="small"
                   bordered
                   pagination={{total: total, current: currentPage}}
                   onChange={onChangePage}/>
        </div>
    )
}

export default SeoNews;