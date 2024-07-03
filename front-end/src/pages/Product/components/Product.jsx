import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../utils/common';

function Product({ product }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${product._id}`);
    };

    return (
        <Box
            padding={1}
            onClick={handleClick}
            style={{
                minHeight: '442px',
                minWidth: '260px',
                background: 'transparent',
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 'none',
            }}
        >
            <Card
                style={{
                    background: 'transparent',
                    maxWidth: 260, 
                    height: 442, 
                    display: 'flex', 
                    flexDirection: 'column'
                }}
            >
                <CardMedia
                    component='img'
                    alt={product.name}
                    image={
                        'https://curnonwatch.com/wp-content/uploads/2024/06/NGO06970-1-e1717429748128.jpg'
                    }
                    style={{
                        maxWidth: 260, 
                        height: 346,
                        // height: 'fit-content',
                        objectFit: 'cover',
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        variant='h6'
                        component='div'
                        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' ,fontWeight: 'bold',
                            color: '#333',}}
                    >
                        {product.name}
                    </Typography>
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            background: 'transparent',
                            padding: '10px 0 0 0',
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
                                }}
                            >
                                {formatPrice(product.originalPrice)}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
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
