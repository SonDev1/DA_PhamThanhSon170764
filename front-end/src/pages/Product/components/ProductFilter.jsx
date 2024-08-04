import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import MenuItemLeft from '../components/Menu';

function ProductFilter({ filters, onChange }) {
    // const handleCategoryChange = (newCategoryGender) => {
    //     if (!onChange) return;
    //     const newFilters = {
    //         ...filters,
    //         [newCategoryGender[0]]: newCategoryGender[1],
    //     };
    //     onChange(newFilters);
    // };
    const handleCategoryChange = (newCategoryGender) => {
        if (!onChange) return;
        const newFilters = {
          ...filters,
          typeId: newCategoryGender[1] || filters.typeId, // Sử dụng typeId nếu có, nếu không thì giữ giá trị hiện tại
        };
        onChange(newFilters);
      };
      

    return (
        <div>
            <MenuItemLeft onChange={handleCategoryChange} />
        </div>
    );
}

ProductFilter.propTypes = {};

export default ProductFilter;
