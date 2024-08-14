import React from 'react';
import './BlogPage.scss';

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="header">
        <div className="logo">
          <h1>Why Not?</h1>
          <p>Với mục đích truyền cảm hứng đến cho các bạn trẻ...</p>
        </div>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li className="active">Watch</li>
            <li>Fashion</li>
            <li>Gift</li>
            <li>Lifestyle</li>
            <li>Grooming</li>
          </ul>
        </nav>
      </div>
      <main className="main-content">
        <h2>Chủ đề Watch</h2>
        <div className="articles">
          <Article
            image="https://curnonwatch.com/blog/wp-content/uploads/2022/08/cac-hang-dong-ho-noi-tieng-2-1024x576.jpg"
            category="Watch"
            date="August 3, 2022"
            title="Top 30 Hãng Đồng Hồ Nổi Tiếng Tốt Nhất Trên Thế Giới | 2023"
          />
          <Article
            image="https://curnonwatch.com/blog/wp-content/uploads/2022/04/DSC_2767-1024x1024.jpg"
            category="Watch"
            date="May 5, 2022"
            title="Bí kíp chọn size đồng hồ vừa vặn với cổ tay bạn"
          />
          <Article
            image="https://curnonwatch.com/blog/wp-content/uploads/2022/04/Paul.Sneakpeek-1024x769.jpg"
            category="Watch"
            date="May 4, 2022"
            title="Kính sapphire là gì? Những mẫu đồng hồ kính sapphire dưới 3 triệu"
          />
          {/* Add more Article components as needed */}
        </div>
      </main>
    </div>
  );
};

const Article = ({ image, category, date, title }) => (
  <div className="article">
    <img src={image} alt={title} />
    <div className="article-info">
      <span className="category">{category}</span>
      <span className="date">{date}</span>
      <h3 className="title">{title}</h3>
    </div>
  </div>
);

export default Blog;
