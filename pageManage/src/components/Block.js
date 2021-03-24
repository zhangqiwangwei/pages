import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Table,Tag,Input,Button,Menu, Dropdown, Space} from 'antd';
import { useHistory } from "react-router-dom";
const { Search } = Input;

function Block() {
    const menu = (
        <Menu>
            <Menu.Item>Action 1</Menu.Item>
            <Menu.Item>Action 2</Menu.Item>
        </Menu>
    );
    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '描述',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: '标签',
            dataIndex: 'tags',
            key: 'tags',
            render: tags => (
                <>
                {tags.map(tag => {
                    let color = 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
                </>
            )
        },

        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            render: function (text, record, index) {
                return (
                    <div>{ new Date(text).toLocaleString()}</div>
                )
            }
        },
        {
            title: '更新时间',
            dataIndex: 'updateTime',
            key: 'updateTime',
            render: function (text, record, index) {
                return (
                    <div>{ text === "" ? text : new Date(text).toLocaleString() }</div>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
                <Space size="middle">
                    <a onClick={ editBlock }>edit</a>
                    <a onClick={ deleteBlock }>delete</a>
                </Space>
            )
        }
    ];
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const result = await axios(
            'http://localhost:3000/getBlockData'
        );
        setData(result.data.items);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onSearch = value => console.log(value);
    let history = useHistory();

    function newBlock(){
        history.push('/new');
    }

    let actionType = "";
    const editBlock = () =>{ actionType = "edit" };
    const deleteBlock = () => { actionType = "delete" };
    const onRow = (record,index) => {
        console.log(index);
        return {
            onClick:async (event) => {
                var id = event.currentTarget.dataset.rowKey;
                if(actionType === "delete"){
                    await axios('http://localhost:3000/deleteBlockById?id='+id);
                    await fetchData();
                }
            }
        };
    };
    return (
        <div>
            <div>
                <Search placeholder="input search text" onSearch={ onSearch } style={{ width: 200 }}/>
                <Search placeholder="input search text" allowClear onSearch={ onSearch } style={{ width: 200 }}/>
            </div>
            <div>
                <Button type="primary" onClick={ newBlock }>NEW BLOCK</Button>
            </div>
            <Table bordered="true" dataSource={ data } columns={ columns } rowKey="_id" onRow={ onRow } />
        </div>
    )
}
export default Block