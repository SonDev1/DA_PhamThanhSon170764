import React from 'react'
import PropTypes from 'prop-types'
import FilterByCategory from './Filters/FilterByCategory'
import MenuItemLeft from '../components/Menu'

function ProductFilter({ filters, onChange }) {
//   const handleCategoryChange = (newCategoryGender) => {
//     if (!onChange) return;
//     const newFilters = {
//         ...filters,
//         'name': newCategoryGender,
//     };
//     onChange(newFilters);
//     console.log('newFilters',newFilters);
// };
const handleCategoryChange = (newCategoryGender) => {
  if (!onChange) return;
  const newFilters = {
    ...filters,
    [newCategoryGender[0]]: newCategoryGender[1],
  };
  onChange(newFilters);
  console.log('newFilters', newFilters);
};

  return (
    <div>
      {/* <FilterByCategory onChange={handleCategoryChange}/> */}
      <MenuItemLeft onChange={handleCategoryChange}/>
    </div>
  )
}

ProductFilter.propTypes = {}

export default ProductFilter
