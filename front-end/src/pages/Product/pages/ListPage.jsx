import React from 'react'
import PropTypes from 'prop-types'
import ProductFilter from '../components/ProductFilter'
import ProductList from '../components/ProductList'
import './style.scss'
import FilterViewer from '../components/FilterViewer'

function ListPage(props) {
  return (
      <div className='wrapper__product'>
        <div className='wrapper__product__filter'>
          <ProductFilter/>
        </div>
        <div className='wrapper__product__productList'>
          <div className='wrapper__product__productList__filterViewer '>
            <FilterViewer/>
          </div>
          <div className='wrapper__product__productList__products '>
            <ProductList/>
          </div>
        </div>
      </div>
  )
}

ListPage.propTypes = {}

export default ListPage
