import { Box, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import Product from './Product'


ProductList.propTypes = {
  data: PropTypes.array,
}

ProductList.defaultProps = {
  data: [],
}

function ProductList({data}) {
  return (
    <Box style={{
        background: "transparent"
    }}>
        <Grid container
            // spacing={2}
            style={{
              background: "transparent"
          }}
        >
            {/* {data.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Product  product={product}/>
                </Grid>
            ))} */}
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </Grid>
    </Box>
  )
}

export default ProductList
