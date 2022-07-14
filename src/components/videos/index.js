import React, {useEffect, useState} from "react";
import {Button, Table, Modal, message} from 'antd';
import {
    DeleteFilled,
    PlusCircleFilled,
    ExclamationCircleOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {
    SearchButton,
    SearchByTitle,
    SearchByFolder,
    SearchByUrl,
    SearchByUsername
} from "../../helpers/search";
import {useDispatch, useSelector} from "react-redux";
import {deleteVideo, retrieveVideos} from "../../redux/actions/videos";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const { confirm } = Modal;

function Videos() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const videos = useSelector(state => state.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveVideos(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        setTotal(videos?.videos?.data?.total);
        console.log(videos);
    }, [videos]);

    const copied = () => {
        message.success('Link kopyalandı');
    }

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    }

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Silmək üçün əminsiniz?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Əminəm',
            okType: 'danger',
            cancelText: 'Əmin deyiləm',
            onOk() {
                dispatch(deleteVideo(id))
                    .then(() => {
                        message.success('Məlumat silindi');
                        dispatch(retrieveVideos(currentPage));
                    })
                    .catch((e) => {
                        message.error("Xəta baş verdi");
                    });
            }
        });
    }

    const tableDatas = videos?.videos?.data ? videos.videos?.data.data.map(row => ({
        id: row.id,
        title: row.title,
        folder: row.folder,
        url: row.url,
        user: row.user.name,
        status: [row.status],
        operations: ''
    })) : []

    const columns = [
        {
            title: 'Başlıq',
            dataIndex: 'title',
            children: [
                {
                    title: SearchByTitle,
                    dataIndex: 'title',
                    render: (title) => (
                        <div>{title}</div>
                    ),
                },
            ],
        },
        {
            title: 'Folder',
            dataIndex: 'folder',
            children: [
                {
                    title: SearchByFolder,
                    dataIndex: 'folder',
                    render: (folder) => (
                        <div>{folder}</div>
                    ),
                },
            ],
        },
        {
            title: 'URL',
            dataIndex: 'url',
            children: [
                {
                    title: SearchByUrl,
                    dataIndex: 'url',
                    render: (_, record) => (
                        <div>
                            {record.url}
                            <CopyToClipboard text= {"https://cdn.apa.az/storage/xxxx.az/" + record.folder + record.url}
                                onCopy={() => copied()}>
                                <Button className="ml-1" type="primary">Linki kopyala</Button>
                            </CopyToClipboard>
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'İstifadəçi',
            dataIndex: 'user',
            align: "center",
            children: [
                {
                    title: SearchByUsername,
                    dataIndex: 'user',
                    width: "250px",
                    align: "center",
                    render: (user) => (
                        <div>{user}</div>
                    ),
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
            <div className="create_container mb-1">
                <Link to="/videos/create">
                    <Button type="primary" className="mr-1">
                        <PlusCircleFilled/>
                        Yeni video əlavə et
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

export default Videos;