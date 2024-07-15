import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
// import { addToCart, showMiniCart } from 'features/Cart/cartSlice';
import { Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
// import AddToCart from '../components/AddToCart';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumnail from '../components/ProductThumnail';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3, 0),
        backgroundColor: '#f9f9f9',
        marginTop: '100px',
    },
    productContainer: {
        padding: theme.spacing(2),
        backgroundColor: '#fff',
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing(3),
    },
    thumbnail: {
        flexBasis: '40%',
        borderRadius: theme.spacing(1),
        overflow: 'hidden',
    },
    info: {
        flexBasis: '55%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    loading: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
    },
    productTitle: {
        marginBottom: theme.spacing(2),
        fontWeight: 700,
        fontSize: '24px',
    },
    paper: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(2),
        backgroundColor: '#fdfdfd',
    },
    addToCartBtn: {
        marginTop: theme.spacing(2),
        display: 'block',
        width: '100%',
    },
    productMenu: {
        marginTop: theme.spacing(3),
    },
}));

function DetailPage() {
    const classes = useStyles();
    const { productId } = useParams();
    // console.log("productId :",productId);
    const location = useLocation();
    const url = location.pathname;

    const { product, loading } = useProductDetail(productId);
    // console.log("product",product);

    if (loading) {
        return (
            <Box className={classes.loading}>
                <LinearProgress />
            </Box>
        );
    }

    // const handleAddToCartSubmit = (formValue) => {
    //   const action = addToCart({
    //     id: product.id,
    //     product,
    //     quantity: formValue.quantity,
    //   });
    //   const actionShowMiniCart = showMiniCart();
    //   dispatch(action);
    //   dispatch(actionShowMiniCart);
    //   enqueueSnackbar('Đã thêm vào giỏ hàng !!!', { variant: 'success' });
    // };

    return (
        <Box className={classes.root}>
            <Container>
                <Paper
                    elevation={0}
                    className={classes.paper}
                >
                    {/* <Typography variant="h5" className={classes.productTitle}>
            {product.name}
          </Typography> */}
                    <Grid
                        container
                        spacing={3}
                        className={classes.productContainer}
                    >
                        <Grid
                            item
                            className={classes.thumbnail}
                        >
                            <ProductThumnail product={product} />
                        </Grid>
                        <Grid
                            item
                            className={classes.info}
                        >
                            <ProductInfo product={product} />
                            {/* <AddToCart onSubmit={handleAddToCartSubmit} /> */}
                        </Grid>
                    </Grid>
                </Paper>

                <Box className={classes.productMenu}>
                    <ProductMenu />
                </Box>
                <Routes>
                    <Route
                        path={url}
                        element={<ProductDescription />}
                        product={product}
                    />
                    <Route
                        path={`${url}/additional`}
                        element={<ProductAdditional />}
                    />
                    <Route
                        path={`${url}/reviews`}
                        element={<ProductReviews />}
                    />
                </Routes>
                <Outlet />
            </Container>
        </Box>
    );
}

export default DetailPage;
