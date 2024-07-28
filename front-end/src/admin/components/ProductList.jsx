import React, { useEffect, useState } from 'react';
import { Table, Button, Space } from 'antd';
import axios from 'axios';

const ProductList = ({ onEdit, onDelete }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
    //   const response = await axios.get('http://localhost:5000/api/products?_sort=asc&_page=1');
      const response = await axios.get('http://localhost:5000/api/products/get-all');
      console.log("response :",response);
      debugger
      setProducts(response.data.rows); // Dựa vào cấu trúc dữ liệu từ API
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEdit = (product) => {
    if (onEdit) {
      onEdit(product);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      fetchProducts();
      if (onDelete) {
        onDelete();
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'salePrice', key: 'salePrice' },
    { title: 'Category', dataIndex: 'typeId', key: 'typeId' }, // Thay đổi theo cấu trúc dữ liệu
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)} type="primary">Edit</Button>
          <Button onClick={() => handleDelete(record._id)} type="danger">Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey="_id"
      pagination={{ pageSize: 10 }} // Thay đổi theo nhu cầu
    />
  );
};

export default ProductList;
