import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, Select } from 'antd';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

const { Option } = Select;

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        // const response = await axios.get('http://localhost:5000/api/products?_sort=asc&_page=1');
        const response = await axios.get('http://localhost:5000/api/products/get-all');
        console.log(response);
        setProducts(response.data);
    };

    const handleAdd = () => {
        setSelectedProduct(null);
        setVisible(true);
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setVisible(true);
    };

    const handleDelete = async (productId) => {
        await axios.delete(`http://localhost:5000/api/products/${productId}`);
        fetchProducts();
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Price', dataIndex: 'salePrice', key: 'salePrice' },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <span>
                    <Button
                        type='link'
                        onClick={() => handleEdit(record)}
                    >
                        Edit
                    </Button>
                    <Button
                        type='link'
                        danger
                        onClick={() => handleDelete(record._id)}
                    >
                        Delete
                    </Button>
                </span>
            ),
        },
    ];

    return (
        <div style={{ marginTop: '100px' }}>
            <Button
                type='primary'
                onClick={handleAdd}
            >
                Add Product
            </Button>
            <Table
                columns={columns}
                dataSource={products}
                rowKey='_id'
            />
            <Modal
                title={selectedProduct ? 'Edit Product' : 'Add Product'}
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <ProductForm
                    product={selectedProduct}
                    onClose={() => {
                        setVisible(false);
                        fetchProducts();
                    }}
                />
            </Modal>
        </div>
    );
};

export default ProductManagement;
