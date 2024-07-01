import React from "react";
import PropTypes from "prop-types";
import "boxicons";
import '../Header/style.scss';

function Header(props) {
  return (
          <div className="wrapper__header">
          <a href="/" className="wrapper__header__logo">
            Cars.
          </a>

          <nav className="wrapper__header__navbar">
            <a href="/" className="active">Home</a>
            <a href="about">About</a>
            <a href="reviews">Review</a>
            <a href="featured">Featured</a>
            <a href="contact">Contact</a>
          </nav>

          <div className="wrapper__header__social-media">
            <a href="logo-x">
              <box-icon type="logo" name="twitter"></box-icon>
            </a>
            <a href="logo-fb">
              <box-icon type="logo" name="facebook-circle"></box-icon>
            </a>
            <a href="logo-ig">
              <box-icon type="logo" name="instagram-alt"></box-icon>
            </a>
          </div>
        </div>
        
  );
}

Header.propTypes = {};

export default Header;
