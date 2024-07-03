import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../utils/common';

function Product({ product }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${product.id}`);
    };

    return (
        <Box
            padding={1}
            onClick={handleClick}
            style={{
                height: '498px',
                width: '325px',
                background: "transparent",
                display:'flex',
                flexDirection:'row'
            }}
            sx={{ cursor: 'pointer' }}
        >
            <Card sx={{ maxWidth: 325, height: 498, display: 'flex', flexDirection: 'column' }}
                    style={{
                        background: "transparent",
                        borderRadius:'none'
                    }}>
                <CardMedia
                    component='img'
                    // alt={product.name}
                    image={
                        'https://curnonwatch.com/wp-content/uploads/2024/06/NGO06970-1-e1717429748128.jpg'
                    }
                    sx={{
                        height: 'fit-content',
                        // paddingTop: '100%', // 1:1 aspect ratio
                        objectFit: 'cover',
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    >
                        Dong ho nam
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            my: 1,
                            background: "transparent"

                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' ,background: "transparent"}}>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{ marginRight: '8px' }}
                            >
                                {formatPrice(100000)}
                            </Typography>
                            <Typography
                                variant='h7'
                                component='div'
                                sx={{ color: '#808089', textDecoration: 'line-through' }}
                            >
                                {formatPrice(100000)}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

Product.propTypes = {};

export default Product;
