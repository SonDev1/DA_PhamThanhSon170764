import React from 'react'
import PropTypes from 'prop-types'
import FilterByCategory from './Filters/FilterByCategory'
import MenuItemLeft from '../components/Menu'

function ProductFilter({ filters, onChange }) {
  const handleCategoryChange = (newCategoryGender) => {
    if (!onChange) return;
    const newFilters = {
        ...filters,
        'name': newCategoryGender,
    };
    onChange(newFilters);
    // console.log('newFilters',newFilters);
};

  return (
    <div>
      {/* <FilterByCategory onChange={handleCategoryChange}/> */}
      <MenuItemLeft/>
    </div>
  )
}

ProductFilter.propTypes = {}

export default ProductFilter
