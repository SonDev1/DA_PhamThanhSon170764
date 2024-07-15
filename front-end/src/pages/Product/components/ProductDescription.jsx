import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

ProductDescription.propTypes = {
    product: PropTypes.object,
}

function ProductDescription({product}) {
    // const safeDescription = DOMPurify.sanitize(product.description)
  return (
    <Paper elevation={0} style={{
        padding: '15px',
    }}>
        {/* <div dangerouslySetInnerHTML={{__html: safeDescription}} /> */}
        <div>ProductDescription </div>
    </Paper>  
  )
}


export default ProductDescription
