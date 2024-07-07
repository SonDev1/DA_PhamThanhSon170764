import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'


ProductThumnail.propTypes = {
    product : PropTypes.object
}


function ProductThumnail({product}) {
    // const thumbnailUrl = product.thumbnail 
    // ? `${STATIC_HOST}${product.thumbnail?.url}`
    // : THUMBNAIL_PLACEHOLDER
    const thumbnailUrl = "https://curnonwatch.com/wp-content/uploads/2024/06/NGO06970-1-e1717429748128.jpg"
  return (
    <Box>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  )
}

export default ProductThumnail
