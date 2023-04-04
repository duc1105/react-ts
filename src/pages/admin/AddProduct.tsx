import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
const AddProductPage = (props:any) => {
    const navigate = useNavigate() 
    const [inputValue, setInputValue] = useState({}) 
    const onHandleChange = (e:any) => { 
        const {name , value} = e.target
        setInputValue({...inputValue,[name]:value}); 
    }
    // const onHandleSubmit = (e:any) => { 
    //     e.preventDefault();
    //     props.onAdd(inputValue)
    //     navigate('/admin/products') 
    // }
    const onHandleSubmit = (values: any) => {
        props.onAdd( values);
        navigate('/admin/products') 
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div>
            <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onHandleSubmit}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Price"
      name="price"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="CategoryId"
      name="categoryId"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
            {/* <form action="" onSubmit={onHandleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={onHandleChange} name='name' placeholder='nhập tên' />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" onChange={onHandleChange} name="price" id="" />
                </div>
                
                <button type="submit">Add New Product</button>
            </form> */}
        </div>
    )
}

export default AddProductPage