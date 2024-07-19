// import React, { useState } from 'react';
// import {
//     Box,
//     Button,
//     Container,
//     Grid,
//     makeStyles,
//     Paper,
//     styled,
//     Typography,
// } from '@material-ui/core';
// import { Form, Formik } from 'formik';
// import * as Yup from 'yup';
// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginBottom: theme.spacing(2),
//         backgroundColor: '#fdfdfd',
//     },
//     container: {
//         padding: theme.spacing(2),
//         backgroundColor: '#fff',
//         borderRadius: theme.spacing(1),
//         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: theme.spacing(3),
//         paddingBottom: theme.spacing(2),
//         // borderBottom: `1px solid ${theme.palette.grey[300]}`,
//     },
//     address: {
//         // borderBottom: '1px solid black',
//     },
//     item:{

//     },
//     paymentMethod: {
      
//     },
// }));

// const CustomRadio = styled(Radio)({
//   '&.Mui-checked': {
//       color: 'black',
//   },
// });

// function OrderPage() {
//     const classes = useStyles();
//     const shippingInfo = {
//         receiver: 'Pham Thanh Son',
//         phone: '0982201057',
//         address: 'Thanh Tri , Ha Noi',
//         adressDetail: 'so 6 , day D , Ngu Hiep',
//     };
//     const [formData, setFormData] = useState({});
//     const [paymentMethod, setPaymentMethod] = useState('');

//     const validationSchema = Yup.object().shape({});

//     const handleBuyNow = (values) => {
//         // Implement buy now logic
//     };

//     const handleChangePay = (event) => {
//         setPaymentMethod(event.target.value);
//         console.log(" paymentMethod :",paymentMethod);
//     };

//     return (
//         <Box style={{ marginTop: '100px' }}>
//             <Container style={{ marginTop: '120px', width: '1072px' }}>
//                 <Paper elevation={0} className={classes.paper}>
//                     <Grid className={classes.container}>
//                         <Box className={classes.address}>
//                             <Typography
//                                 component='h3'
//                                 variant='h7'
//                                 style={{ fontFamily: 'monospace', marginBottom: '20px' }}
//                             >
//                                 Địa chỉ nhận hàng
//                             </Typography>
//                             <Typography variant='body2'>
//                                 {shippingInfo.receiver}
//                             </Typography>
//                         </Box>
//                     </Grid>
//                 </Paper>
//             </Container>

//             <Container style={{ width: '1072px' }}>
//                 <Paper elevation={0} className={classes.paper}>
//                     <Grid className={classes.container}>
//                         <Box className={classes.item}>
//                             <Typography
//                                 component='h3'
//                                 variant='h7'
//                                 style={{ fontFamily: 'monospace', marginBottom: '20px' }}
//                             >
//                                 Thông tin sản phẩm
//                             </Typography>
//                         </Box>
//                     </Grid>
//                 </Paper>
//             </Container>

//             <Container style={{ width: '1072px' }}>
//                 <Paper elevation={0} className={classes.paper}>
//                     <Grid className={classes.container}>
//                         <Box className={classes.paymentMethod}>
//                             <Typography
//                                 component='h3'
//                                 variant='h7'
//                                 style={{ fontFamily: 'monospace', marginBottom: '20px' }}
//                             >
//                                 Phương thức thanh toán
//                             </Typography>
//                             <Box>
//                                 <Formik
//                                     initialValues={formData}
//                                     enableReinitialize
//                                     validationSchema={validationSchema}
//                                     onSubmit={handleBuyNow}
//                                 >
//                                     {({ handleChange, handleBlur }) => (
//                                         <Form>
//                                             <Box sx={{ padding: 2 }}>
//                                                 <FormControl component='fieldset'>
//                                                     <FormLabel component='legend'>
//                                                         <Typography
//                                                             component='h1'
//                                                             variant='h5'
//                                                             style={{
//                                                                 fontFamily: 'monospace',
//                                                                 marginBottom: '20px',
//                                                                 color: 'black'
//                                                             }}
//                                                         >
//                                                             Hình thức thanh toán
//                                                         </Typography>
//                                                     </FormLabel>
//                                                     <RadioGroup
//                                                         aria-label='payment-method'
//                                                         name='payment-method'
//                                                         value={paymentMethod}
//                                                         onChange={handleChangePay}
//                                                     >
//                                                         <FormControlLabel
//                                                             value='cash'
//                                                             control={<CustomRadio />}
//                                                             label={
//                                                                 <Box display='flex' alignItems='center'>
//                                                                     <AccountBalanceIcon
//                                                                         sx={{ marginRight: 1 }}
//                                                                     />
//                                                                     <Box>
//                                                                         <Typography variant='body1'>
//                                                                             Chuyển khoản ngân hàng
//                                                                         </Typography>
//                                                                         <Typography variant='body2'>
//                                                                             Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển.
//                                                                         </Typography>
//                                                                     </Box>
//                                                                 </Box>
//                                                             }
//                                                         />
//                                                         <FormControlLabel
//                                                             value='payment'
//                                                             control={<CustomRadio />}
//                                                             label={
//                                                                 <Box display='flex' alignItems='center'>
//                                                                     <LocalShippingIcon
//                                                                         sx={{ marginRight: 1 }}
//                                                                     />
//                                                                     <Box>
//                                                                         <Typography variant='body1'>
//                                                                             Trả tiền mặt khi nhận hàng
//                                                                         </Typography>
//                                                                         <Typography variant='body2'>
//                                                                             Trả tiền mặt khi giao hàng
//                                                                         </Typography>
//                                                                     </Box>
//                                                                 </Box>
//                                                             }
//                                                         />
//                                                     </RadioGroup>
//                                                 </FormControl>
//                                             </Box>
//                                         </Form>
//                                     )}
//                                 </Formik>
//                             </Box>
//                         </Box>
//                         <Button onClick={handleBuyNow}>Đặt hàng</Button>
//                     </Grid>
//                 </Paper>
//             </Container>
//         </Box>
//     );
// }

// export default OrderPage;


import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    makeStyles,
    Paper,
    styled,
    Typography,
} from '@material-ui/core';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginBottom: theme.spacing(2),
        backgroundColor: '#fdfdfd',
    },
    container: {
        padding: theme.spacing(2),
        backgroundColor: '#fff',
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
        paddingBottom: theme.spacing(2),
    },
    address: {},
    item: {},
    paymentMethod: {},
}));

const CustomRadio = styled(Radio)({
    '&.Mui-checked': {
        color: 'black',
    },
});

function OrderPage() {
    const classes = useStyles();
    const shippingInfo = {
        receiver: 'Pham Thanh Son',
        phone: '0982201057',
        address: 'Thanh Tri , Ha Noi',
        adressDetail: 'so 6 , day D , Ngu Hiep',
    };

    const validationSchema = Yup.object().shape({
        paymentMethod: Yup.string().required('Vui lòng chọn phương thức thanh toán'),
    });

    const handleBuyNow = (values) => {
        console.log('Form values:', values);
        // Implement buy now logic
    };

    return (
        <Box style={{ marginTop: '100px' }}>
            <Container style={{ marginTop: '120px', width: '1072px' }}>
                <Paper elevation={0} className={classes.paper}>
                    <Grid className={classes.container}>
                        <Box className={classes.address}>
                            <Typography
                                component='h3'
                                variant='h7'
                                style={{ fontFamily: 'monospace', marginBottom: '20px' }}
                            >
                                Địa chỉ nhận hàng
                            </Typography>
                            <Box style={{display:'flex'}}>
                              <Typography variant='body2'>
                                  {shippingInfo.receiver}
                              </Typography>
                              <Typography variant='body2'>
                                  ({shippingInfo.phone})
                              </Typography>
                              <Typography variant='body2'>
                                  {shippingInfo.adressDetail}.
                              </Typography>
                              <Typography variant='body2'>
                                  {shippingInfo.address}
                              </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Paper>
            </Container>

            <Container style={{ width: '1072px' }}>
                <Paper elevation={0} className={classes.paper}>
                    <Grid className={classes.container}>
                        <Box className={classes.item}>
                            <Typography
                                component='h3'
                                variant='h7'
                                style={{ fontFamily: 'monospace', marginBottom: '20px' }}
                            >
                                Thông tin sản phẩm
                            </Typography>
                            <Box style={{display:'flex',justifyContent:'space-around'}}>
                              <Box>Ảnh</Box>
                              <Box>Đơn giá</Box>
                              <Box>Số lượng</Box>
                              <Box>Thành tiền</Box>
                            </Box>
                        </Box>
                    </Grid>
                </Paper>
            </Container>
 {/* payment form */}
 {/* //============================================================================================= */}
            <Container style={{ width: '1072px' }}>
                <Paper elevation={0} className={classes.paper}>
                    <Grid className={classes.container}>
                        <Box className={classes.paymentMethod}>
                            <Typography
                                component='h3'
                                variant='h7'
                                style={{ fontFamily: 'monospace', marginBottom: '20px' }}
                            >
                                Phương thức thanh toán
                            </Typography>
                            <Box>
                                <Formik
                                    initialValues={{ paymentMethod: '' }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleBuyNow}
                                >
                                    {({ values, handleChange, handleBlur, handleSubmit }) => (
                                        <Form onSubmit={handleSubmit}>
                                            <Box sx={{ padding: 2 }}>
                                                <FormControl component='fieldset'>
                                                    <FormLabel component='legend'>
                                                        <Typography
                                                            component='h1'
                                                            variant='h5'
                                                            style={{
                                                                fontFamily: 'monospace',
                                                                marginBottom: '20px',
                                                                color: 'black'
                                                            }}
                                                        >
                                                            Hình thức thanh toán
                                                        </Typography>
                                                    </FormLabel>
                                                    <RadioGroup
                                                        aria-label='payment-method'
                                                        name='paymentMethod'
                                                        value={values.paymentMethod}
                                                        onChange={handleChange}
                                                    >
                                                        <FormControlLabel
                                                            value='cash'
                                                            control={<CustomRadio />}
                                                            label={
                                                                <Box display='flex' alignItems='center'>
                                                                    <AccountBalanceIcon
                                                                        sx={{ marginRight: 1 }}
                                                                    />
                                                                    <Box>
                                                                        <Typography variant='body1'>
                                                                            Chuyển khoản ngân hàng
                                                                        </Typography>
                                                                        <Typography variant='body2'>
                                                                            Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển.
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                            }
                                                        />
                                                        <FormControlLabel
                                                            value='payment'
                                                            control={<CustomRadio />}
                                                            label={
                                                                <Box display='flex' alignItems='center'>
                                                                    <LocalShippingIcon
                                                                        sx={{ marginRight: 1 }}
                                                                    />
                                                                    <Box>
                                                                        <Typography variant='body1'>
                                                                            Trả tiền mặt khi nhận hàng
                                                                        </Typography>
                                                                        <Typography variant='body2'>
                                                                            Trả tiền mặt khi giao hàng
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                            }
                                                        />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Box>
                                            <Button type="submit" style={{border:'1px solid black', margin :"15px",borderRadius:'0px'}}>Đặt hàng</Button>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                        </Box>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default OrderPage;
