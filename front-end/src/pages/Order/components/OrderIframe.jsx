import React, { useState } from 'react';
import { Modal } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderIframe = ({ isVisible, handleClose,url ,orderId  }) => {
    const navigate = useNavigate()
  const checkOrderStatus = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/orders/${orderId}`);
      const status = response.data.paymentStatus;
      console.log('response :',response);

      if (status === 'success') {
        // Chuyển trang
        navigate('/success-page')
      } else if (status === 'pending') {
        // Ở lại trang
        // Set order status hoặc làm hành động khác nếu cần
      }
    } catch (error) {
      console.error('Error fetching order status:', error);
    }
  };

  const handleCancel = () => {
    handleClose();
    checkOrderStatus();
  };

  return (
    <Modal
      visible={isVisible}
      footer={null}
      onCancel={handleCancel}
      width="80%"
      style={{ top: 20 }}
    >
      <iframe
        src={url } 
        title="Popup Content"
        style={{ width: '100%', height: '700px', border: 'none' }}
      ></iframe>
    </Modal>
  );
};

export default OrderIframe;
