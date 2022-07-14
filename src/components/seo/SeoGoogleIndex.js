import React, {useEffect, useState} from "react";
import {Button, message, Table, notification, Modal} from 'antd';
import {
    SearchButton,
    SearchById,
    SearchByTitle,
    SearchByDate
} from "../../helpers/search";
import {useDispatch, useSelector} from "react-redux";
import Moment from "react-moment";
import parse from 'html-react-parser';
import {
    retrieveSeoGoogle,
    retrieveSeoGoogleDelete,
    retrieveSeoGoogleIndex,
    retrieveSeoGoogleInsert
} from "../../redux/actions/seogoogleindex";
import {ExclamationCircleOutlined} from "@ant-design/icons";

const { confirm } = Modal;

function SeoGoogleIndex() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const seogoogleindex = useSelector(state => state.seogoogleindex);
    const [googleStatus, setGoogleStatus] = useState('');
    const [googleInsert, setGoogleInsert] = useState('');
    const [googleDelete, setGoogleDelete] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveSeoGoogle(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        setTotal(seogoogleindex?.seoGoogle?.data?.total);
        setGoogleStatus(seogoogleindex?.seoGoogleIndex?.title);
        setGoogleInsert(seogoogleindex?.seoGoogleInsert?.title);
        setGoogleDelete(seogoogleindex?.seoGoogleDelete?.title);
    }, [seogoogleindex]);

    useEffect(() => {
        if (googleStatus) {
            notification.open({
                message: 'Uğurlu',
                description: googleStatus,
            });
        }
    }, [googleStatus]);

    useEffect(() => {
        if (googleInsert) {
            notification.open({
                message: 'Uğurlu',
                description: googleInsert,
            });
        }
    }, [googleInsert]);

    useEffect(() => {
        if (googleDelete) {
            notification.open({
                message: 'Uğurlu',
                description: googleDelete,
            });
        }
    }, [googleDelete]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    }

    const showIndexStatus = (id) => {
        dispatch(retrieveSeoGoogleIndex(id));
    }

    const showIndexInsert = (id) => {
        dispatch(retrieveSeoGoogleInsert(id));
    }

    const showIndexDelete = (id) => {
       console.log("delete");
        confirm({
            title: 'İndexdən silmək üçün əminsiniz?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Əminəm',
            okType: 'danger',
            cancelText: 'Əmin deyiləm',
            onOk() {
                dispatch(retrieveSeoGoogleDelete(id));
            }
        });
    }

    const tableDatas = seogoogleindex.seoGoogle?.data ? seogoogleindex.seoGoogle.data.data.map(row => ({
        id: row.id,
        title: parse(row.title),
        datetime: <Moment format="DD/MM/YYYY h:mm">{row.datetime}</Moment>,
        operations: ''
    })) : []

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            children: [
                {
                    title: SearchById,
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
                    title: SearchByTitle,
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
                    title: SearchByDate,
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
                    title: SearchButton,
                    dataIndex: 'operations',
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Button type="primary" onClick={(e=> showIndexStatus(record.id))} className="mr-1">
                                Index Statusu
                            </Button>
                            <Button type="primary" onClick={(e=> showIndexInsert(record.id))} className="mr-1">
                                Indexə Əlavə Et
                            </Button>
                            <Button type="primary" onClick={(e=> showIndexDelete(record.id))}>
                                Indexdən sil
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

export default SeoGoogleIndex;