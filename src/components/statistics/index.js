import React, {useEffect, useState} from "react";
import {Table, Modal, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {retrieveStatistics, searchStatisticsApi} from "../../redux/actions/statistics";
import {SearchByFullname} from "../../helpers/search";
import {searchSeoSitemapApi} from "../../redux/actions/seositemap";

const { confirm } = Modal;

function Statistics() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const statistics = useSelector(state => state.statistics);
    const [searchFullname, setSearchFullname] = useState("");
    const [searchData, setSearchData] = useState(
        {
            "fullname": searchFullname
        }
    );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveStatistics(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        console.log("ss::", statistics)
        if (statistics?.statistics?.data) {
            if (statistics?.statistics?.data?.results) {
                setTableData(statistics?.statistics?.data?.results.data);
                setTotal(statistics?.statistics?.data?.results?.total);
            }
            else {
                setTableData(statistics?.statistics?.data?.data);
                setTotal(statistics?.statistics?.data?.total);
            }
        }
    }, [statistics]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData({
            "fullname": searchFullname
        });
    }, [searchFullname]);

    // const searchStatistics = (e) => {
    //     e.preventDefault();
    //
    // };

    const fullnameChange = (value) => {
        console.log(value);
        setSearchFullname(value);
        dispatch(searchStatisticsApi(searchData));
    };

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        fullname: row.name + " " + row.surname,
        news_daily_count: row.news_daily_count,
        news_week_count: row.news_week_count,
        news_month_count: row.news_month_count
    })) : [];

    const columns = [
        {
            title: 'Ad Soyad',
            dataIndex: 'fullname',
            children: [
                {
                    title: <Input
                                placeholder="Ad Soyad"
                                onChange={e => fullnameChange(e.target.value)}
                            />,
                    dataIndex: 'fullname',
                    render: (fullname) => (
                        <div>{fullname} </div>
                    ),
                },
            ],
        },
        {
            title: 'Günlük statistika',
            dataIndex: 'news_daily_count',
            align: 'center',
            width: "250px",
            render: (_, record) => {
                return  <Link to={"/statistics/daily/" + record.id}>
                    <div>{record.news_daily_count}</div>
                </Link>
            },
        },
        {
            title: 'Həftəlik statistika',
            dataIndex: 'news_week_count',
            align: 'center',
            width: "250px",
            render: (_, record) => {
                return  <Link to={"/statistics/week/" + record.id}>
                    <div>{record.news_week_count}</div>
                </Link>
            },
        },
        {
            title: 'Həftəlik statistika',
            dataIndex: 'news_month_count',
            align: 'center',
            width: "250px",
            render: (_, record) => {
                return  <Link to={"/statistics/month/" + record.id}>
                    <div>{record.news_month_count}</div>
                </Link>
            },
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

export default Statistics;