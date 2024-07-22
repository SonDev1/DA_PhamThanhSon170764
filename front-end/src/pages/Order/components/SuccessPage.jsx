// import React from 'react';
// import { Button, Result } from 'antd';
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate()
// const SuccessPage = () => (
//   <div style={{marginTop:'150px'}}>
//     <Result
//     status="success"
//     title="Mua hàng thành công !"
//     subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
//     extra={[
//       <Button type="primary" key="console" style={{borderRadius:'0px', background:'white',color:'black',width:'132px', marginRight:'20px',border:'1px solid black'}}>
//         Đơn hàng
//       </Button>,
//       <Button onClick={()=>{navigate('/products')}} key="buy" style={{borderRadius:'0px', background:'black' ,color:'white'}}>Tiếp tục mua </Button>,
//     ]}
//   />
//   </div>
// );
// export default SuccessPage;
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

function SuccessPage(props) {
  const navigate = useNavigate()
  return (
      <div style={{marginTop:'150px'}}>
    <Result
    status="success"
    title="Mua hàng thành công !"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console" style={{borderRadius:'0px', background:'white',color:'black',width:'132px', marginRight:'20px',border:'1px solid black'}}>
        Đơn hàng
      </Button>,
      <Button onClick={()=>{navigate('/products')}} key="buy" style={{borderRadius:'0px', background:'black' ,color:'white'}}>Tiếp tục mua </Button>,
    ]}
  />
  </div>
  )
}

SuccessPage.propTypes = {}

export default SuccessPage
