import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss'; // Import CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Result
        status="404"
        title={<span className="result-title">404</span>}
        subTitle={<span className="result-subtitle">Sorry, the page you visited does not exist.</span>}
        extra={
          <Link to="/">
            <a href="products" className="wrapper__back__homet__button">Back Home</a>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;
