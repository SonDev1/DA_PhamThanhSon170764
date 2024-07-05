// import React from 'react';
// import PropTypes from 'prop-types';
// import { Box, Typography, makeStyles } from '@material-ui/core';
// import { discountPercentage, formatPrice } from '../../../utils/common';
// import { Button, Form, Input } from 'antd';
// import cartsApi from '../../../api/cartApi';
// // import { formatPrice } from 'utils';

// ProductInfo.propTypes = {
//     product: PropTypes.object,
// };

// const useStyles = makeStyles((theme) => ({
//     root: {
//         paddingBottom: theme.spacing(2),
//         borderBottom: `1px solid ${theme.palette.grey[300]}`,
//     },

//     name: {
//         fontWeight: '700',
//         fontFamily: 'Alumni Sans',
//     },

//     description: {
//         fontFamily: 'Montserrat !important',
//         fontSize: '20px',
//     },

//     priceBox: {
//         borderBottom: `1px solid ${theme.palette.grey[300]}`,
//     },

//     salePrice: {
//         marginRight: theme.spacing(1),
//         fontSize: '18px',
//         fontFamily: 'Montserrat',
//         fontWeight: '600',
//     },

//     originalPrice: {
//         marginRight: theme.spacing(1),
//         fontSize: '18px',
//         fontFamily: 'Montserrat',
//         textDecoration: 'line-through',
//         color: '#807D7C',
//     },

//     promotionPercent: {
//         color: '#dc4136',
//         fontSize: '18px',
//         fontFamily: 'Montserrat',
//         fontWeight: '500',
//     },
//     dialSize: {
//         display: 'flex',
//         marginTop: '10px',
//         '& > Typography': {
//             justifyContent: 'conter',
//             fontSize: '24px',
//         },
//     },
//     sizeName: {
//         justifyContent: 'conter',
//         fontFamily: 'Montserrat',
//         fontSize: '24px',
//     },
// }));

// function ProductInfo({ product = {} }) {
//     const classes = useStyles();
//     const { name, description, salePrice, originalPrice, dialSize ,_id} = product;
//     const promotionPercent = discountPercentage(originalPrice, salePrice);

//     console.log("Type of ID :" ,typeof _id);

//     const userId = localStorage.getItem('user');
//     const productId = _id ? _id.toString() : '';
//     const quantity = 1  
//     const payload = {userId,productId,quantity}

//     const handleAddToCart = async(payload) => {
//         //  const action = cartsApi.add(payload)
        
//     }

//     return (
//         <Box className={classes.root}>
//             <Typography
//                 component='h1'
//                 variant='h3'
//                 className={classes.name}
//             >
//                 {name}
//             </Typography>
//             <Typography
//                 variant='body2'
//                 className={classes.description}
//             >
//                 {description}
//             </Typography>
//             <Box className={classes.priceBox}>
//                 <Box
//                     component='span'
//                     className={classes.salePrice}
//                 >
//                     {formatPrice(salePrice)}
//                 </Box>
//                 {promotionPercent > 0 && (
//                     <>
//                         <Box
//                             component='span'
//                             className={classes.originalPrice}
//                         >
//                             {formatPrice(originalPrice)}
//                         </Box>
//                         <Box
//                             component='span'
//                             className={classes.promotionPercent}
//                         >
//                             {` ${promotionPercent}%`}
//                         </Box>
//                     </>
//                 )}
//             </Box>
//             <Box className={classes.dialSize}>
//                 <Box
//                     component='span'
//                     className={classes.dialSize}
//                 >
//                     <Typography className={classes.sizeName}>Kích thước mặt</Typography>
//                     <Box className={classes.size}>
//                         <Form style={{ maxWidth: 38, marginLeft: '10px' }}>
//                             <Form.Item>
//                                 <Input
//                                     value={dialSize}
//                                     placeholder='Enter dial size'
//                                 />
//                             </Form.Item>
//                         </Form>
//                     </Box>
//                 </Box>
//             </Box>
//             <Box
//                 style={{
//                     background: 'red',
//                 }}
//             >
//                 <Button
//                     type='primary'
//                     onClick={handleAddToCart}
//                 >
//                     Add to Cart
//                 </Button>
//                 <Button
//                     type='primary'
//                     // onClick={handleBuy}
//                 >
//                     Add to Cart
//                 </Button>
//             </Box>
//         </Box>
//     );
// }

// export default ProductInfo;


import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { discountPercentage, formatPrice } from '../../../utils/common';
import { Button, Form, Input } from 'antd';
import cartsApi from '../../../api/cartApi';

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
    description: {
        fontFamily: 'Montserrat !important',
        fontSize: '20px',
    },
    priceBox: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
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
    },
    sizeName: {
        justifyContent: 'conter',
        fontFamily: 'Montserrat',
        fontSize: '24px',
    },
}));

function ProductInfo({ product = {} }) {
    const classes = useStyles();
    const { name, description, salePrice, originalPrice, dialSize, _id } = product;
    const promotionPercent = discountPercentage(originalPrice, salePrice);

    const userId = localStorage.getItem('user');
    const productId = _id ? _id.toString() : '';
    const quantity = 1;
    const payload = { userId, productId, quantity };

    const handleAddToCart = async () => {
        try {
            const response = await cartsApi.add(payload);
            console.log("response :",response);
            // console.log('Add to cart success:', response);
            debugger
            // Xử lý khi thêm vào giỏ hàng thành công, ví dụ hiển thị thông báo
            alert('Đã thêm vào giỏ hàng thành công!');
        } catch (error) {
            console.error('Add to cart failed:', error);
            // Xử lý khi thêm vào giỏ hàng thất bại
            alert('Thêm vào giỏ hàng thất bại. Vui lòng thử lại sau!');
        }
    };

    return (
        <Box className={classes.root}>
            <Typography component='h1' variant='h3' className={classes.name}>
                {name}
            </Typography>
            <Typography variant='body2' className={classes.description}>
                {description}
            </Typography>
            <Box className={classes.priceBox}>
                <Box component='span' className={classes.salePrice}>
                    {formatPrice(salePrice)}
                </Box>
                {promotionPercent > 0 && (
                    <>
                        <Box component='span' className={classes.originalPrice}>
                            {formatPrice(originalPrice)}
                        </Box>
                        <Box component='span' className={classes.promotionPercent}>
                            {` ${promotionPercent}%`}
                        </Box>
                    </>
                )}
            </Box>
            <Box className={classes.dialSize}>
                <Typography className={classes.sizeName}>Kích thước mặt:</Typography>
                <Box className={classes.size}>
                    <Form style={{ maxWidth: 38, marginLeft: '10px' }}>
                        <Form.Item>
                            <Input value={dialSize} placeholder='Enter dial size' />
                        </Form.Item>
                    </Form>
                </Box>
            </Box>
            <Box>
                <Button type='primary' onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            </Box>
        </Box>
    );
}

export default ProductInfo;
