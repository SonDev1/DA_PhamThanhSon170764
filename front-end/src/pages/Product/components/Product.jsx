import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { discountPercentage, formatPrice } from '../../../utils/common';

function Product({ product }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${product._id}`);
    };

    // Tính phần trăm giảm giá
    // const discountPercent = ((product.originalPrice - product.salePrice) / product.originalPrice) * 100;
    const promotionPercent = discountPercentage(product.originalPrice, product.salePrice);

    return (
        <Card
            style={{
                background: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none',
                border: 'none',
                width: '100%',
                height: '498px',
                position: 'relative', // Đảm bảo Card có vị trí tương đối
            }}
            onClick={handleClick}
        >
            {/* Box màu đỏ hiển thị % giảm giá */}
            <Box
                style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    backgroundColor: '#EB2F3A',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: 'none',
                    fontWeight: '600',
                }}
            >
                -{promotionPercent}%
            </Box>
            <CardMedia
                component='img'
                alt={product.name}
                image={
                    'https://curnonwatch.com/wp-content/uploads/2024/06/NGO06970-1-e1717429748128.jpg'
                }
                style={{
                    width: '100%',
                    height: '422px',
                    objectFit: 'cover',
                }}
            />
            <CardContent sx={{ flexGrow: 1 }} style={{margin:'0',padding:'0', paddingTop :"10px"}}>
                <Typography
                    variant='h6'
                    component='div'
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        fontWeight: 'bold',
                        color: '#333',
                        fontFamily: 'Montserrat',

                    }}
                >
                    {product.name}
                </Typography>
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        background: 'transparent',
                        // padding: '10px 0 0 0',
                        margin:'0',
                        padding:'0'
                    }}
                >
                    <Box>
                        <Typography
                            variant='h6'
                            component='div'
                            style={{
                                marginRight: '12px',
                                fontWeight: 'bold',
                                color: '#333',
                                fontFamily: 'Montserrat',
                                fontSize: '1rem',
                            }}
                        >
                            {formatPrice(product.salePrice)}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant='body2'
                            component='div'
                            style={{
                                color: '#808089',
                                textDecoration: 'line-through',
                                fontSize: '0.875rem',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            {formatPrice(product.originalPrice)}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        salePrice: PropTypes.number.isRequired,
        originalPrice: PropTypes.number.isRequired,
    }).isRequired,
};

export default Product;
