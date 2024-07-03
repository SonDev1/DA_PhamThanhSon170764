import React from 'react'
import PropTypes from 'prop-types'
import FilterByCategory from './Filters/FilterByCategory'

function ProductFilter({ filters, onChange }) {
  const handleCategoryChange = (newCategoryGender) => {
    if (!onChange) return;
    const newFilters = {
        ...filters,
        'gender': newCategoryGender,
    };
    onChange(newFilters);
    // console.log('newFilters',newFilters);
};

  return (
    <div>
      <FilterByCategory onChange={handleCategoryChange}/>
    </div>
  )
}

ProductFilter.propTypes = {}

export default ProductFilter
