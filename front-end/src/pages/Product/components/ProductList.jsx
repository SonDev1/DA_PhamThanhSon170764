import { Box, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import Product from './Product'


ProductList.propTypes = {
  data: PropTypes.array,
}


function ProductList({data = []}) {
  return (
    <Box style={{
        background: "transparent"
    }}>
        <Grid container
            style={{
              background: "transparent"
          }}
        >
            {data.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                    <Product  product={product}/>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}

export default ProductList
