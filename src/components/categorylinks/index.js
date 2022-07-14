import React, {useEffect, useState} from "react";
import {Button, Switch, Table, Modal, Tag, message} from 'antd';
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
    SearchByCategory,
    SearchById,
    SearchByCategoryLinks
} from "../../helpers/search";
import {useDispatch, useSelector} from "react-redux";
import {deleteCategoryLink, retrieveCategoryLinks, statusCategoryLink} from "../../redux/actions/categorylinks";

const { confirm } = Modal;



function CategoryLinks() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const categorylinks = useSelector(state => state.categorylinks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveCategoryLinks(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        console.log("load", categorylinks)
        setTotal(categorylinks?.data?.total);
    }, [categorylinks]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    }

    const onChangeStatus = (id, status) => {
        var mainStatus = (status == true) ? 1 : 0;
        dispatch(statusCategoryLink(id, mainStatus));
    }

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Silmək üçün əminsiniz?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Əminəm',
            okType: 'danger',
            cancelText: 'Əmin deyiləm',
            onOk() {
                dispatch(deleteCategoryLink(id))
                    .then(() => {
                        message.success('Məlumat silindi');
                        dispatch(retrieveCategoryLinks(currentPage));
                    })
                    .catch((e) => {
                        message.error("Xəta baş verdi");
                    });
            }
        });
    }

    const tableDatas = categorylinks.categoryLinks?.data ? categorylinks.categoryLinks.data.data.map(row => ({
        id: row.id,
        category: row.category?.name,
        related: row.related?.name,
        status: [row.status],
        operations: ''
    })) : []

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            children: [
                {
                    title: SearchById,
                    dataIndex: 'id',
                    width: "200px",
                    render: (id) => (
                        <div>{id}</div>
                    ),
                },
            ],
        },
        {
            title: 'Kateqoriya',
            dataIndex: 'category',
            align: "center",
            children: [
                {
                    title: SearchByCategory,
                    dataIndex: 'category',
                    align: "center",
                    width: "350px",
                    render: (category) => (
                        <div>{category}</div>
                    ),
                },
            ],
        },
        {
            title: 'Kateqoriya linkləri',
            dataIndex: 'related',
            align: "center",
            children: [
                {
                    title: SearchByCategoryLinks,
                    dataIndex: 'related',
                    align: "center",
                    width: "350px",
                    render: (related) => (
                        <div>{related}</div>
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
                    title: SearchByStatus,
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
                    title: SearchButton,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Link to={"/category-links/" + record.id}>
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
                <Link to="/category-links/create">
                    <Button type="primary" className="mr-1">
                        <PlusCircleFilled/>
                        Yeni kateqoriya linki əlavə et
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

export default CategoryLinks;