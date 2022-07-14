import React, {useEffect, useState} from "react";
import {Button, Switch, Table, Modal, Tag, message, Select, Input} from 'antd';
import {
    EditFilled,
    DeleteFilled,
    CheckCircleFilled,
    CloseCircleFilled,
    PlusCircleFilled,
    ExclamationCircleOutlined, SearchOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {
    SearchByStatus,
    SearchButton,
    SearchByCategory,
    SearchBySubCategory,
    SearchByKeywords,
    SearchByDescription
} from "../../helpers/search";
import {useDispatch, useSelector} from "react-redux";
import {deleteCategory, retrieveCategories, searchCategoryApi} from "../../redux/actions/categories";
import {searchUserApi} from "../../redux/actions/users";

const {Option} = Select;
const { confirm } = Modal;

function Categories() {
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const categories = useSelector(state => state.categories);
    const [searchName, setSearchName] = useState("");
    const [searchSubName, setSearchSubName] = useState("");
    const [searchDescription, setSearchDescription] = useState("");
    const [searchKeywords, setSearchKeywords] = useState("");
    const [searchStatus, setSearchStatus] = useState(0);
    const [searchData, setSearchData] = useState(
        {
            "name": searchName,
            "sub_name": searchSubName,
            "description": searchDescription,
            "keywords": searchKeywords,
            "status": searchStatus
        }
    );
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveCategories(currentPage));
    }, ['', currentPage]);

    useEffect(() => {
        if (categories?.categories?.data) {
            if (categories?.categories?.data?.results) {
                setTableData(categories?.categories?.data?.results.data);
                setTotal(categories?.categories?.data?.results?.total);
            }
            else {
                setTableData(categories?.categories?.data?.data);
                setTotal(categories?.categories?.data?.total);
            }
        }
    }, [categories]);

    const onChangePage = (page) => {
        setCurrentPage(page.current);
    };

    useEffect(() => {
        setSearchData( {
            "name": searchName,
            "sub_name": searchSubName,
            "description": searchDescription,
            "keywords": searchKeywords,
            "status": searchStatus
        });
    }, [searchName, searchSubName, searchDescription, searchKeywords, searchStatus]);

    const searchCategory = (e) => {
        e.preventDefault();
        console.log("search", searchData);
        dispatch(searchCategoryApi(searchData));
    };

    const nameChange = (value) => {
        console.log(value);
        setSearchName(value);
    };

    const subNameChange = (value) => {
        console.log(value);
        setSearchSubName(value);
    };

    const descriptionChange = (value) => {
        console.log(value);
        setSearchDescription(value);
    };

    const keywordsChange = (value) => {
        console.log(value);
        setSearchKeywords(value);
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
                dispatch(deleteCategory(id))
                    .then(() => {
                        message.success('Məlumat silindi');
                        dispatch(retrieveCategories(currentPage));
                    })
                    .catch((e) => {
                        message.error("Xəta baş verdi");
                    });
            }
        });
    }

    const tableDatas = (tableData.length > 0) ? tableData.map(row => ({
        id: row.id,
        name: row.name,
        sub_categories: row.sub_categories,
        description: row.description,
        keywords: row.keywords,
        status: [row.status],
        operations: ''
    })) : []

    const columns = [
        {
            title: 'Bölmə',
            dataIndex: 'name',
            children: [
                {
                    title:  <Input
                                placeholder="Bölmə"
                                onChange={e => nameChange(e.target.value)}
                            />,
                    dataIndex: 'name',
                    render: (_, record) => (
                        <div className="avatarFlex">
                            {record.name}
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'Alt bölmə',
            dataIndex: 'sub_categories',
            children: [
                {
                    title:  <Input
                                placeholder="Alt bölmə"
                                onChange={e => subNameChange(e.target.value)}
                            />,
                    dataIndex: 'sub_categories',
                    align: "center",
                    width: "250px",
                    render: (_, record) => (
                        <div>
                            {record.sub_categories ?
                                record.sub_categories :
                                <Tag key={record.id} color="red">
                                    Yoxdur
                                </Tag>
                            }
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'Açıqlama',
            dataIndex: 'description',
            children: [
                {
                    title:  <Input
                                placeholder="Açıqlama"
                                onChange={e => descriptionChange(e.target.value)}
                            />,
                    dataIndex: 'description',
                    align: "center",
                    width: "250px",
                    render: (_, record) => (
                        <div>
                            {record.description ?
                                record.description :
                                <Tag key={record.id} color="red">
                                    Yoxdur
                                </Tag>
                            }
                        </div>
                    ),
                },
            ],
        },
        {
            title: 'Açar sözlər',
            dataIndex: 'keywords',
            children: [
                {
                    title:  <Input
                                placeholder="Açar sözlər"
                                onChange={e => keywordsChange(e.target.value)}
                            />,
                    dataIndex: 'keywords',
                    align: "center",
                    width: "250px",
                    render: (_, record) => (
                        <div>
                            {record.keywords ?
                                record.keywords :
                                <Tag key={record.id} color="red">
                                    Yoxdur
                                </Tag>
                            }
                        </div>
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
                    title: <Select
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
                    title: <Button type="primary" block onClick={(e) => searchCategory(e)}>
                                <SearchOutlined/>
                                Axtarış et
                            </Button>,
                    dataIndex: 'operations',
                    width: "220px",
                    align: "center",
                    render: (_,record) => (
                        <div>
                            <Link to={"/categories/" + record.id}>
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
                <Link to="/categories/create">
                    <Button type="primary" className="mr-1">
                        <PlusCircleFilled/>
                        Yeni bölmə əlavə et
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

export default Categories;