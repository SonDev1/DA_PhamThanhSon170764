import React, { useEffect } from 'react';
import { Form, Input, InputNumber, Button, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const ProductForm = ({ product, onClose }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (product) {
      form.setFieldsValue(product);
    } else {
      form.resetFields();
    }
  }, [product]);

  const onFinish = async (values) => {
    if (product) {
      await axios.put(`http://localhost:5000/api/products/${product._id}`, values);
    } else {
      await axios.post('http://localhost:5000/api/products', values);
    }
    onClose();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="descriptionFull" label="Full Description" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="originalPrice" label="Original Price" rules={[{ required: true }]}>
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item name="salePrice" label="Sale Price" rules={[{ required: true }]}>
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item name="dialSize" label="Dial Size" rules={[{ required: true }]}>
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item name="thickness" label="Thickness" rules={[{ required: true }]}>
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item name="dialColor" label="Dial Color" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="movementType" label="Movement Type" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="strapSize" label="Strap Size" rules={[{ required: true }]}>
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item name="waterResistance" label="Water Resistance" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="glassMaterial" label="Glass Material" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="strapMaterial" label="Strap Material" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="typeId" label="Type" rules={[{ required: true }]}>
        <Select>
          {/* Assuming you have a list of types fetched from the API */}
          <Option value="type1">Type 1</Option>
          <Option value="type2">Type 2</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
