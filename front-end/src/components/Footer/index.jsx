import React from "react";
import PropTypes from "prop-types";
import "boxicons";
import "../Footer/style.scss";
import logo from '../../assets/logo/logo.svg';

function Footer(props) {
  return (
    <div className="wrapper__footer">
      <a href="/" className="wrapper__footer__logo">
      <img src={logo} alt="logo"/>

      </a>

      <nav className="wrapper__footer__navbar">
        <a style={{ "--i": 1 }} href="/" className="active">
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

      <div className="wrapper__footer__social-media">
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
          <box-icon type="logo" name="instagram-alt" color="#000"></box-icon>
        </a>
      </div>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
