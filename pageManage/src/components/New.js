import React from 'react';
import axios from 'axios';
import { Form, Input, Button, Radio,Select } from 'antd';
import { useHistory } from "react-router-dom";

const { Option } = Select;
const { TextArea } = Input;

function New() {
    const [form] = Form.useForm();

    let history = useHistory();

    function toBlock() {
        history.push('/block');
    }
    const handleChange = ()=>{};
    const items = ["jeulia","skull","ssy","js","css","html","vue","react"];
    const children = [];
    for (let i = 0; i < items.length; i++) {
        children.push(<Option key={items[i]}>{items[i]}</Option>);
    }

    const submit = (value) =>{
        console.log(value);
        axios('http://localhost:3000/postBlockData',{
            method: 'post',
            data:value
        }).then(()=>{
            toBlock();
        });
    };
    return (
        <Form
            form={form}
            layout="vertical"
            size="large"
            onFinish={ submit }
        >
            <Form.Item
                label="name"
                name="name"
                tooltip={{ title: '名称' }}
            >
                <Input placeholder="name" />
            </Form.Item>

            <Form.Item
                label="description"
                name="description"
                tooltip={{ title: '描述' }}
            >
                <Input placeholder="description" />
            </Form.Item>

            <Form.Item
                label="tags"
                name="tags"
                tooltip={{ title: '标签' }}
            >
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="tags"
                    onChange={handleChange}
                >
                    { children }
                </Select>
            </Form.Item>

            <Form.Item
                label="context"
                name="context"
                tooltip={{ title: '内容' }}
            >
                <TextArea rows={8} />
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}
export default New