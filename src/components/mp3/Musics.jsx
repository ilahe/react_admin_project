import React, {useEffect, useState} from "react";
import {Button, Switch, Table, Modal, message} from 'antd';
import {
    EditFilled,
    DeleteFilled,
    CheckCircleFilled,
    CloseCircleFilled,
    PlusCircleFilled,
    ExclamationCircleOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {
    SearchByStatus,
    SearchButton,
    SearchBySinger,
    SearchByMusic,
    SearchByMp3Users
} from "../../helpers/search";
import {useDispatch, useSelector} from "react-redux";
import {deleteMp3, retrieveMp3} from "../../redux/actions/mp3";
import ReactAudioPlayer from 'react-audio-player';
import {deleteCategory, retrieveCategories} from "../../redux/actions/categories";

const { confirm } = Modal;

function showDeleteConfirm() {
    confirm({
        title: 'Silmək üçün əminsiniz?',
        icon: <ExclamationCircleOutlined />,
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

function Mp3() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentType, setCurrentType] = useState(0);
    const mp3 = useSelector(state => state.mp3);
    const dispatch = useDispatch();

    useEffect(() => {
        const location = window.location.pathname;
        if (location === "/all-mp3") {
            setCurrentType(0);
        }
        else if (location === "/coming-mp3") {
            setCurrentType(1);
        }
        else {
            setCurrentType(2);
        }
        dispatch(retrieveMp3(currentType, currentPage));
    }, ['', currentType, currentPage]);

    useEffect(() => {
        setTotal(mp3?.mp3All?.data?.total);
        console.log(mp3)
    }, [mp3]);

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
                dispatch(deleteMp3(id))
                    .then(() => {
                        message.success('Məlumat silindi');
                        dispatch(retrieveMp3(currentType, currentPage));
                    })
                    .catch((e) => {
                        message.error("Xəta baş verdi");
                    });
            }
        });
    }

    const tableDatas = mp3.mp3All.data ? mp3.mp3All.data.data.map(row => ({
        id: row.id,
        singer_name: row.singer_name,
        music_name: row.music_name,
        full_url: row.full_url,
        username: (currentType === 0) ? row.user?.name : "",
        status: [row.status],
        operations: ''
    })) : []

    const columns = [
        {
            title: 'Müğənni adı',
            dataIndex: 'singer_name',
            children: [
                {
                    title: SearchBySinger,
                    dataIndex: 'singer_name',
                    render: (_, record) => (
                        <div>
                            {record.singer_name}
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'Mahnı adı',
            dataIndex: 'music_name',
            children: [
                {
                    title: SearchByMusic,
                    dataIndex: 'music_name',
                    render: (_, record) => (
                        <div>
                            {record.music_name}
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'Mahnı',
            dataIndex: 'full_url',
            align: "center",
            width: "350px",
            render: (_, record) => (
                <div>
                    <ReactAudioPlayer
                        src={record.full_url}
                        controls
                    />
                </div>
            ),
        },

        currentType === 0 ?
        {
            title: 'İstifadəçi adı',
            dataIndex: 'username',
            align: "center",
            children: [
                {
                    title: SearchByMp3Users,
                    dataIndex: 'username',
                    width: "250px",
                    align: "center",
                    render: (_, record) => (
                        <div>
                            {record.username}
                        </div>
                    ),
                },
            ],
        } : {},
        {
            title: 'Status',
            dataIndex: 'status',
            align: "center",
            children: [
                {
                    title: SearchByStatus,
                    dataIndex: 'status',
                    width: "180px",
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
                    title: SearchButton,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Link to={"/mp3/" + record.id}>
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
            <Table columns={columns}
                   dataSource={tableDatas}
                   size="small"
                   bordered
                   pagination={{total: total, current: currentPage}}
                   onChange={onChangePage}/>
        </div>
    )
}

export default Mp3;