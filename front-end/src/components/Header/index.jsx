import React from "react";
import PropTypes from "prop-types";
import "boxicons";
import "../Header/style.scss";
import logo from '../../assets/logo/logo.svg';

function Header(props) {
  return (
    <div className="wrapper__header">
      <a href="/" className="wrapper__header__logo">
      <img src={logo} alt="logo"/>

      </a>

      <nav className="wrapper__header__navbar">
        <a style={{ "--i": 1 }} href="/products" className="active">
          HOME
        </a>
        <a style={{ "--i": 2 }} href="about">
          NAM GIỚI
        </a>
        <a style={{ "--i": 3 }} href="reviews">
          NỮ GIỚI
        </a>
        <a style={{ "--i": 4 }} href="featured">
          VỀ CHÚNG TÔI
        </a>
        <a style={{ "--i": 5 }} href="contact">
          BLOG
        </a>
      </nav>

      <div className="wrapper__header__social-media">
        <a style={{ "--i": 1 }} href="https://www.youtube.com/@CurnonWatch">
          <box-icon type="logo" name="youtube" color="#000"></box-icon>
        </a>
        <a style={{ "--i": 2 }} href="https://www.facebook.com/curnonwatch">
          <box-icon
            type="logo"
            name="facebook-circle"
            color="#000"
          ></box-icon>
        </a>
        <a style={{ "--i": 3 }} href="https://www.instagram.com/curnonwatchcom/">
          {/* <box-icon type="logo" name="instagram-alt" color="#000"></box-icon> */}
          <box-icon name='search-alt-2'></box-icon>
        </a>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
