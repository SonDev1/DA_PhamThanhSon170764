// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import cartsApi from '../../api/cartApi';
// import { formatPrice } from '../../../src/utils/common';
// import { Box, makeStyles, Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     paddingBottom: theme.spacing(2),
//     borderBottom: `1px solid ${theme.palette.grey[300]}`,
//   },
//   name: {
//     fontWeight: '700',
//     fontFamily: 'Alumni Sans',
//   },
//   descriptionBox: {
//     fontFamily: 'Montserrat !important',
//   },
//   descriptionTitle: {
//     fontWeight: '800',
//     fontFamily: 'Montserrat !important',
//     fontSize: '20px',
//     borderTop: `1px solid ${theme.palette.grey[300]}`,
//     marginTop: '10px',
//   },
//   description: {
//     fontFamily: 'Montserrat !important',
//     fontSize: '20px',
//   },
//   priceBox: {
//     borderBottom: `1px solid ${theme.palette.grey[300]}`,
//     margin: '15px 0px',
//   },
//   salePrice: {
//     marginRight: theme.spacing(1),
//     fontSize: '18px',
//     fontFamily: 'Montserrat',
//     fontWeight: '600',
//   },
//   originalPrice: {
//     marginRight: theme.spacing(1),
//     fontSize: '18px',
//     fontFamily: 'Montserrat',
//     textDecoration: 'line-through',
//     color: '#807D7C',
//   },
//   promotionPercent: {
//     color: '#dc4136',
//     fontSize: '18px',
//     fontFamily: 'Montserrat',
//     fontWeight: '500',
//   },
//   dialSize: {
//     display: 'flex',
//     marginTop: '10px',
//     borderBottom: `1px solid ${theme.palette.grey[300]}`,
//     margin: '15px 0px',
//   },
//   sizeName: {
//     justifyContent: 'center',
//     fontFamily: 'Montserrat',
//     fontSize: '24px',
//   },
//   payment: {
//     margin: '15px 0px',
//   },
//   policy: {
//     display: 'flex',
//     flexDirection: 'row',
//     marginBottom: '.5rem',
//     gap: '.8rem',
//     '& > span': {
//       color: '#807D7C',
//       fontFamily: 'Montserrat',
//       fontSize: '20px',
//     },
//   },
// }));

// function CartPages(props) {
//   const classes = useStyles();

//   const [cartList, setCartList] = useState([]);

//   const userId = localStorage.getItem('userId');

//   useEffect(() => {
//     (async () => {
//       try {
//         const cartList = await cartsApi.getAll(userId);
//         setCartList(cartList); // Update state with fetched cart list
//         console.log('cartItem:', cartList);
//       } catch (error) {
//         console.log('Failed to fetch carts list', error);
//       }
//     })();
//   }, [userId]);

//   return (
//     <Box
//       style={{
//         marginTop: '100px',
//         display: 'flex',
//         flexDirection: 'row',
//       }}
//     >
//       <Box
//         style={{
//           width: '50%',
//         }}
//       >
//         Left
//       </Box>
//       <Box>
//         {cartList.map((cartItem) => (
//           <Box key={cartItem._id}>
//             {cartItem.product.map((productItem, index) => (
//               <Box
//                 key={index}
//                 style={{
//                   width: '100%',
//                   display: 'flex',
//                   flexDirection: 'row',
//                 }}
//               >
//                 <Box className="cart__img">
//                   <img src={productItem.imageUrl} alt={productItem.name} />
//                 </Box>
//                 <Box className="cart__desc">
//                   <Box>
//                     <Typography component="h1" variant="h5" className={classes.name}>
//                       {productItem.name}
//                     </Typography>
//                     <Typography component="p" className={classes.description}>
//                       Quantity: {cartItem.quantity}
//                     </Typography>
//                   </Box>
//                   <Box>
//                     <Typography component="p" className={classes.salePrice}>
//                       {formatPrice(productItem.salePrice)}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }

// CartPages.propTypes = {
//   // Define prop types if any
// };

// export default CartPages;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cartsApi from '../../api/cartApi';
import { formatPrice } from '../../../src/utils/common';
import { Box, makeStyles, TextField, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import userApi from '../../api/userApi';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  name: {
    fontWeight: '700',
    fontFamily: 'Alumni Sans',
  },
  descriptionBox: {
    fontFamily: 'Montserrat !important',
  },
  descriptionTitle: {
    fontWeight: '800',
    fontFamily: 'Montserrat !important',
    fontSize: '20px',
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    marginTop: '10px',
  },
  description: {
    fontFamily: 'Montserrat !important',
    fontSize: '20px',
  },
  priceBox: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    margin: '15px 0px',
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
    margin: '15px 0px',
  },
  sizeName: {
    justifyContent: 'center',
    fontFamily: 'Montserrat',
    fontSize: '24px',
  },
  payment: {
    margin: '15px 0px',
  },
  policy: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '.5rem',
    gap: '.8rem',
    '& > span': {
      color: '#807D7C',
      fontFamily: 'Montserrat',
      fontSize: '20px',
    },
  },
  cartContainer: {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
  },
  cartImage: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    marginRight: theme.spacing(2),
  },
  cartDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  cartItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(2),
  },
  leftPanel: {
    width: '50%',
    borderRight: '1px solid black',
    padding :'20px'
  },
  rightPanel: {
    width: '50%',
  },
  input:{
    fontFamily: 'monospace',
  }
}));

const validationSchema = Yup.object().shape({
  // displayName: Yup.string().required('Required'),
  // email: Yup.string().email('Invalid email').required('Required'),
  // contactPhone: Yup.string().required('Required'),
});
function CartPages(props) {
  const classes = useStyles();

  const [cartList, setCartList] = useState([]);

  const userId = localStorage.getItem('userId');

  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    contactPhone: '',
  });

  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const cartList = await cartsApi.getAll(userId);
  //       setCartList(cartList);
  //       console.log('cartItem:', cartList);
  //     } catch (error) {
  //       console.log('Failed to fetch carts list', error);
  //     }
  //   })();
  // }, [userId]);

  useEffect(() => {
    if (!userId) {
      setError('No user ID found in local storage');
      return;
    }
  
    (async () => {
      try {
        const [cartList, userData] = await Promise.all([
          cartsApi.getAll(userId),
          userApi.getInfo(userId)
        ]);
  
        setCartList(cartList);
        console.log('cartItem:', cartList);
  
        setFormData(userData);
      } catch (error) {
        console.log('Failed to fetch data', error);
        setError('Failed to fetch data');
      }
    })();
  }, [userId]);
  

  return (
    <Box className={classes.cartContainer}>
      <Box className={classes.leftPanel}>
        <Box className={classes.address}>
          <Typography  component="h1" variant='h5' style={{fontFamily:'monospace'}}>
            Thông tin vận chuyển
          </Typography>
          <Formik
        initialValues={formData}
        enableReinitialize
        validationSchema={validationSchema}
        // onSubmit={handleUpdateUser}
      >
        {({ handleChange, handleBlur }) => (
          <Form className={classes.wrapper}>
            <Form className={classes.wrapper}>
             <Box className={classes.item}>
              <Typography className={classes.name}>Tên người đặt</Typography>
               <Field
                as={TextField}
                name="displayName"
                className={classes.input}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth={true}
                fontFamily='monospace'
              />
            </Box>
            <Box className={classes.item}>
              <Typography className={classes.name}>Email</Typography>
              <Field
                as={TextField}
                name="email"
                className={classes.input}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth={true}
              />
            </Box>
       
            <Box className={classes.item}>
              <Typography className={classes.name}>Số điện thoại</Typography>
              <Field
                as={TextField}
                name="contactPhone"
                className={classes.input}
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth={true}
              />
            </Box>
          </Form>
            {/* <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Update
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button> */}
          </Form>
        )}
      </Formik>  

        </Box>
      </Box>
      <Box className={classes.rightPanel}>
        {cartList.map((cartItem) => (
          <Box key={cartItem._id}>
            {cartItem.product.map((productItem, index) => (
              <Box key={index} className={classes.cartItem}>
                <Box className="cart__img">
                  <img src={productItem.imageUrl} alt={productItem.name} className={classes.cartImage} />
                </Box>
                <Box className={classes.cartDetails}>
                  <Typography component="h1" variant="h5" className={classes.name}>
                    {productItem.name}
                  </Typography>
                  <Typography component="p" className={classes.description}>
                    Quantity: {cartItem.quantity}
                  </Typography>
                  <Typography component="p" className={classes.salePrice}>
                    {formatPrice(productItem.salePrice)}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

CartPages.propTypes = {
  // Define prop types if any
};

export default CartPages;
