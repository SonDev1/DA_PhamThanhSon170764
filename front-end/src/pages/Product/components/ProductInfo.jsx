import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { discountPercentage, formatPrice } from '../../../utils/common';
import { Button, Form, Input } from 'antd';
import cartsApi from '../../../api/cartApi';
import { enqueueSnackbar } from 'notistack';

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
}));

function ProductInfo({ product = {} }) {
    const classes = useStyles();
    const { name, description, salePrice, originalPrice, dialSize, _id } = product;
    console.log('product', product);
    const promotionPercent = discountPercentage(originalPrice, salePrice);

    const userId = localStorage.getItem('userId');
    console.log("userId", userId);
    const productId = _id ? _id.toString() : '';
    const quantity = 1;
    const payload = { userId, productId, quantity };
    console.log("payload: ", payload);

    const handleAddToCart = async () => {
        try {
            const response = await cartsApi.add(payload);
            // const action = addToCart({
            //     id: product._id,
            //     product,
            //     quantity: quantity,
            //   });
            //   dispatch(action);
            enqueueSnackbar('Đã thêm vào giỏ hàng  ', { variant: 'success' });
        } catch (error) {
            console.error('Add to cart failed:', error);
            enqueueSnackbar('Đã xảy ra lỗi ! ', { variant: 'error' });

        }
    };
    const handleBuyNow = async () => {
        try {
            const response = await cartsApi.add(payload);
            console.log('response :', response);
            alert('Đã thêm vào giỏ hàng thành công!');
        } catch (error) {
            console.error('Add to cart failed:', error);
            enqueueSnackbar('Không thành công, vui lòng thử lại sau!  ', { variant: 'error' });

        }
    };


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
                    style={{ marginRight: '10px', background: 'black' }}
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
        </Box>
    );
}

export default ProductInfo;
