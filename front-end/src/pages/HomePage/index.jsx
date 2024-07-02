import React from 'react'
import PropTypes from 'prop-types'
import '../HomePage/style.scss';
// import ImageProduct from '../assets/images/NewImageProduct.png'
import newImageProduct from '../../assets/images/NewImageProduct.png';



function HomePage(props) {
  return (
    <div style={{
    }} 
      className='wrapper'
    >
      <section className="wrapper__home">
          <div className='wrapper__home__content'>
            <h1>New Detroit
            Arrival </h1>
            <h3>Redefined !</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ut ipsa? Impedit suscipit voluptates in delectus debitis sapiente labore unde assumenda, quae vel a modi ratione accusamus dignissimos ab rem!</p>
            <a href="products" className="wrapper__home__content__button">SHOP NOW</a>
          </div>

          <div className='wrapper__home__image'>
            <div className='wrapper__home__image__rhombus'>
              <img src={newImageProduct} alt="Detroit Watch Model 2"/>
              {/* <img src="https://via.placeholder.com/1920x1080" alt="Car Dealing Experian" /> */}
            </div>
          </div>

          <div className="wrapper__home__rhombus2">

          </div>
        </section>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage
