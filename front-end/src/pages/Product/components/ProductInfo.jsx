import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles ,Modal} from '@material-ui/core';
import { discountPercentage, formatPrice } from '../../../utils/common';
import { Button, Form, Input } from 'antd';
import cartsApi from '../../../api/cartApi';
import { enqueueSnackbar } from 'notistack';
import orderApi from '../../../api/ordersApi';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../Cart/cartSlice';
import { useDispatch } from 'react-redux';


ProductInfo.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    name: {
        fontWeight: '700',
        fontFamily: 'Alumni Sans',
    },
    descriptionBox:{
        fontFamily: 'Montserrat !important',


    },
    descriptionTitle:{
        fontWeight: "800",
        fontFamily: 'Montserrat !important',
        fontSize: '20px',
        // borderBottom: `1px solid ${theme.palette.grey[300]}`,
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        marginTop:'10px'
    },
    description: {
        fontFamily: 'Montserrat !important',
        fontSize: '20px',
    },
    priceBox: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        margin: ' 15px 0px',
    },
    salePrice: {
        marginRight: theme.spacing(1),
        fontSize: '18px',
        fontFamily: 'Montserrat',
        fontWeight: '600',
    },
    originalPrice: {
        marginRight: theme.spacing(1),
        fontSize: '18px',
        fontFamily: 'Montserrat',
        textDecoration: 'line-through',
        color: '#807D7C',
    },
    promotionPercent: {
        color: '#dc4136',
        fontSize: '18px',
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
    dialSize: {
        display: 'flex',
        marginTop: '10px',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        margin: ' 15px 0px',
    },
    sizeName: {
        justifyContent: 'conter',
        fontFamily: 'Montserrat',
        fontSize: '24px',
    },
    payment: {
        margin: ' 15px 0px',
    },
    policy: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '.5rem',
        gap: '.8rem',
        // borderTop: `1px solid ${theme.palette.grey[300]}`,

        '& > span': {
            color: '#807D7C',
            fontFamily: 'Montserrat',
            fontSize: '20px',
        },
    },
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));

function ProductInfo({ product = {} }) {
    const classes = useStyles();
    const { name, description, salePrice, originalPrice, dialSize, _id } = product;
    const userId = localStorage.getItem('userId');
    const promotionPercent = discountPercentage(originalPrice, salePrice);
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // Fake data for test pay now
    // ============================================================================================================================
    const shippingInfo = {
        receiver:"Pham Thanh Son",
        phone: "0982201057",
        address: "Thanh Tri , Ha Noi",
        adressDetail: "so 6 , day D , Ngu Hiep",
        isInCart: false
    }
    // ============================================================================================================================



    // Payload add to cart 
    // ============================================================================================================================
    const productId = _id ? _id.toString() : '';
    const quantity = 1;
    const payload = { userId, productId, quantity };
    // ============================================================================================================================
    const handleAddToCart = async () => {
        if (!userId) {
            setOpenModal(true);
            return;
        }
        try {
            const req = await cartsApi.add(payload);
            const action = addToCart({
                id: product._id,
                product,
                quantity: 1,
              });
              dispatch(action);
            enqueueSnackbar('Đã thêm vào giỏ hàng  ', { variant: 'success' });
        } catch (error) {
            console.error('Add to cart failed:', error);
            enqueueSnackbar('Đã xảy ra lỗi ! ', { variant: 'error' });
        }
    };
    

    // Payload pay now
    // ============================================================================================================================
    const price = salePrice
    const products  = [{ productId , price , quantity }]
    const payloadPay = {userId , products , shippingInfo}
    // ============================================================================================================================
    const handleBuyNow = async () => {
        if (!userId) {
            setOpenModal(true);
            return;
        }
        try {
            const req = await orderApi.add(payloadPay);
            enqueueSnackbar('Đã mua hàng thành công', { variant: 'success' });
    
        } catch (error) {
            enqueueSnackbar('Đã xảy ra lỗi! Vui lòng thử lại sau.', { variant: 'error' });
        }
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleNavigate = () => {
        navigate('/login')
    }


    return (
        <Box className={classes.root}>
            {/* Tên sản phẩm  */}
            <Typography
                component='h1'
                variant='h3'
                className={classes.name}
            >
                {name}
            </Typography>
            {/* Box giá sản phẩm */}
            <Box className={classes.priceBox}>
                <Box
                    component='span'
                    className={classes.salePrice}
                >
                    {formatPrice(salePrice)}
                </Box>
                {promotionPercent > 0 && (
                    <>
                        <Box
                            component='span'
                            className={classes.originalPrice}
                        >
                            {formatPrice(originalPrice)}
                        </Box>
                        <Box
                            component='span'
                            className={classes.promotionPercent}
                        >
                            {` ${promotionPercent}%`}
                        </Box>
                    </>
                )}
            </Box>
            {/* Box chọn size mặt đồng hồ */}
            <Box className={classes.dialSize}>
                <Typography className={classes.sizeName}>Kích thước mặt:</Typography>
                <Box className={classes.size}>
                    <Form style={{ maxWidth: 40, marginLeft: '10px' }}>
                        <Form.Item>
                            <Input
                                value={dialSize}
                                placeholder='Enter dial size'
                            />
                        </Form.Item>
                    </Form>
                </Box>
            </Box>
            {/* Box chọn Mua ngay hoặc add to cart */}
            <Box className={classes.payment}>
                <Button
                    type='primary'
                    onClick={handleBuyNow}
                    style={{ 
                        marginRight: '10px', 
                        background: 'black' ,
                        borderRadius: '0px' ,
                    }}
                >
                    Buy Now
                </Button>
                <Button
                    type='primary'
                    onClick={handleAddToCart}
                    style={{
                        marginRight: '10px',
                        background: 'white',
                        color: 'black',
                        border: '1px solid black',
                        fontWeight: 'bold',
                        borderRadius: '0px' ,
                    }}
                >
                    Add to Cart
                </Button>
            </Box>
            {/* Box chính sách mua hàng  */}
            <Box>
                <Box className={classes.policy}>
                    <Box>icon</Box>
                    <Box component='span'>
                        ĐỔI TRẢ MIỄN PHÍ trong 3 ngày (Với lỗi từ Nhà sản xuất)
                    </Box>
                </Box>
                <Box className={classes.policy}>
                    <Box>icon</Box>
                    <Box component='span'>FREE SHIPPING đơn hàng &gt; 500K</Box>
                </Box>
                <Box className={classes.policy}>
                    <Box>icon</Box>
                    <Box component='span'>
                        BẢO HÀNH trong 10 năm với sản phẩm Đồng Hồ (do kĩ thuật viên kiểm định)
                    </Box>
                </Box>
            </Box>
            {/* Box thông tin sản phẩm  */}
            <Box className={classes.descriptionBox}>
                <Typography
                    className={classes.descriptionTitle}
                >
                    THÔNG TIN
                </Typography>
                <Typography
                    variant='body2'
                    className={classes.description}
                >
                    {description}
                </Typography>
            </Box>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby='modal-title'
                aria-describedby='modal-description'
            >
                <div className={classes.modal}>
                    <Typography variant='h5' id='modal-title' style={{fontFamily :'Montserrat'}}>
                        Vui lòng đăng nhập để tiếp tục 
                    </Typography>
                    <Box style={{display: "flex",justifyContent: "space-between" , marginTop:'10px'}}>
                        <Button style={{ borderRadius: '0px' ,height:'32px',width:'100px'}} onClick={handleCloseModal}>Đóng</Button>
                        <Button style={{ borderRadius: '0px' ,height:'32px',width:'100px' , background:'black',color:'#fff'}} onClick={handleNavigate}>Đăng nhập</Button>
                    </Box>
                </div>
            </Modal>
        </Box>
    );
}

export default ProductInfo;
