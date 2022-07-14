import React, {useEffect, useState} from "react";
import {Button, Input, Table} from 'antd';
import {
    EditFilled, SearchOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {retrieveSeoSitemap, searchSeoSitemapApi} from "../../redux/actions/seositemap";


function SeoSitemap() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const seositemap = useSelector(state => state.seositemap);
    const [searchName, setSearchName] = useState("");
    const [searchChangefreq, setSearchChangefreq] = useState("");
    const [searchPriority, setSearchPriority] = useState("");
    const [searchData, setSearchData] = useState(
        {
            "name": searchName,
            "changefreq": searchChangefreq,
            "priority": searchPriority
        }
    );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveSeoSitemap(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        if (seositemap?.seoSitemaps?.data) {
            if (seositemap?.seoSitemaps?.data?.results) {
                setTableData(seositemap?.seoSitemaps?.data?.results.data);
                setTotal(seositemap?.seoSitemaps?.data?.results?.total);
            }
            else {
                setTableData(seositemap?.seoSitemaps?.data);
                setTotal(seositemap?.seoSitemaps?.data?.length);
            }
        }
    }, [seositemap]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData({
            "name": searchName,
            "changefreq": searchChangefreq,
            "priority": searchPriority
        });
    }, [searchName, searchChangefreq, searchPriority]);

    const searchSeoSitemap = (e) => {
        e.preventDefault();
        dispatch(searchSeoSitemapApi(searchData));
    };

    const nameChange = (value) => {
        console.log(value);
        setSearchName(value);
    };

    const changefreqChange = (value) => {
        console.log(value);
        setSearchChangefreq(value);
    };

    const priorityChange = (value) => {
        console.log(value);
        setSearchPriority(value);
    };

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        name: row.name,
        priority: row.priority,
        changefreq: row.changefreq,
        operations: ''
    })) : [];

    const columns = [
        {
            title: 'Bölmə',
            dataIndex: 'name',
            children: [
                {
                    title: <Input
                                placeholder="Bölmə"
                                onChange={e => nameChange(e.target.value)}
                            />,
                    dataIndex: 'name',
                    render: (name) => {
                        return <div>{name}</div>;
                    },

                },
            ],
        },
        {
            title: 'Changefreq',
            dataIndex: 'changefreq',
            children: [
                {
                    title: <Input
                                placeholder="Changefreq"
                                onChange={e => changefreqChange(e.target.value)}
                            />,
                    dataIndex: 'changefreq',
                    render: (changefreq) => (
                        <div>
                            {changefreq}
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'Prioritet',
            dataIndex: 'priority',
            align: "center",
            children: [
                {
                    title: <Input
                                placeholder="Prioritet"
                                onChange={e => priorityChange(e.target.value)}
                            />,
                    dataIndex: 'priority',
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
                    title:  <Button type="primary" block onClick={(e) => searchSeoSitemap(e)}>
                                <SearchOutlined/>
                                Axtarış et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Link to={"/seo-sitemap/" + record.id}>
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

export default SeoSitemap;