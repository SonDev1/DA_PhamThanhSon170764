import React from 'react';
import PropTypes from 'prop-types';
import './blog.scss';
import PostList from './components/PostList';
import { Divider, Typography, Button } from 'antd'; // Import các thành phần Ant Design

const { Title, Paragraph } = Typography;
const data = [
    {
      id: 1,
      title: "Top 10 Đồng Hồ Sang Trọng",
      description: "Khám phá những mẫu đồng hồ sang trọng hàng đầu trong năm 2024.",
      imageUrl: "https://curnonwatch.com/blog/wp-content/uploads/2023/03/Aesthetic-la-gi-1024x576.jpg",
    },
    {
      id: 2,
      title: "Cách Bảo Quản Đồng Hồ Cơ",
      description: "Hướng dẫn chi tiết về cách bảo quản đồng hồ cơ để giữ được độ bền.",
      imageUrl: "https://curnonwatch.com/blog/wp-content/uploads/2023/02/qua-tot-nghiep-1024x576.jpg",
    },
    {
      id: 3,
      title: "Xu Hướng Đồng Hồ Thời Trang 2024",
      description: "Những xu hướng đồng hồ thời trang đang gây sốt trong năm nay.",
      imageUrl: "https://curnonwatch.com/blog/wp-content/uploads/2023/03/Phoi-do-voi-quan-jeans-500x300.jpg",
    },
    {
      id: 4,
      title: "Lịch Sử Của Đồng Hồ Rolex",
      description: "Tìm hiểu về lịch sử của thương hiệu đồng hồ nổi tiếng Rolex.",
      imageUrl: "https://curnonwatch.com/blog/wp-content/uploads/2023/03/phoi-do-voi-cardigan-500x300.jpg",
    },
    {
      id: 5,
      title: "Đồng Hồ Thể Thao Tốt Nhất",
      description: "Danh sách những đồng hồ thể thao tốt nhất cho người đam mê vận động.",
      imageUrl: "https://curnonwatch.com/blog/wp-content/uploads/2022/08/cac-hang-dong-ho-noi-tieng-2-1024x576.jpg",
    },
    {
      id: 6,
      title: "Tại Sao Nên Chọn Đồng Hồ Automatic?",
      description: "Lợi ích của việc sử dụng đồng hồ automatic so với đồng hồ quartz.",
      imageUrl: "https://curnonwatch.com/blog/wp-content/uploads/2022/04/Paul.Sneakpeek-1024x769.jpg",
    },
  ];
  const data2 = [
    {
      id: 7,
      title: "Phong Cách Đồng Hồ Cho Người Yêu Thể Thao",
      description: "Khám phá những mẫu đồng hồ phù hợp với phong cách năng động và mạnh mẽ.",
      imageUrl: "data:image/jpeg;base64,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",
    },
    {
      id: 8,
      title: "Đồng Hồ Thông Minh Và Cuộc Sống Hiện Đại",
      description: "Lợi ích của đồng hồ thông minh đối với sức khỏe và công việc hằng ngày.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2zF-WSVRNOon11SVqihSpLsseIAO5ote0g&s",
    },
    {
      id: 9,
      title: "Cách Chọn Đồng Hồ Theo Phong Thủy",
      description: "Tìm hiểu cách chọn đồng hồ hợp phong thủy, mang lại may mắn và thịnh vượng.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvS1XDjsUYOvougBcGETYy6ywdTwP2SDR4g&s",
    },
    {
      id: 10,
      title: "Bí Quyết Phối Đồ Với Đồng Hồ Thời Trang",
      description: "Hướng dẫn cách phối đồ hoàn hảo với đồng hồ thời trang cho mọi dịp.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBajCmutJ7W5D3tsjVz8K9YpC13zu3hzHVnw&s",
    },
    {
      id: 11,
      title: "Xu Hướng Đồng Hồ Vintage Đang Trở Lại",
      description: "Tìm hiểu tại sao đồng hồ cổ điển lại đang được ưa chuộng trở lại trong năm 2024.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyMb4pzpbxU7V4-Dnf-gnI1r1P72rtZSpFQ&s",
    },
    {
      id: 12,
      title: "Top Đồng Hồ Automatic Đáng Mua Nhất 2024",
      description: "Danh sách các mẫu đồng hồ automatic chất lượng, đáng sở hữu trong năm nay.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9kIMXFFYR9jHiIwUgy4QBBufZPH-gte_SMA&s",
    },
  ];
function Blog(props) {
    return (
        <div>
            {/* Container 1 */}
            <div className='aban'>
                <div className='aban__wrapBlog'>
                    <div className='aban__bg'>
                        <img
                            style={{ height: 'fitContent' }}
                            src='https://curnonwatch.com/blog/wp-content/themes/ashe/assets/images/bannerDesktop.png'
                            alt='Blog'
                        />
                    </div>
                    <div className='container'>
                        <div className='aban__inner'>
                            <div
                                className='aban__ctn'
                                data-aos='zoom-in'
                            >
                                <img
                                    src='https://curnonwatch.com/blog/wp-content/themes/ashe/assets/images/whynotLogo.svg'
                                    alt='whynot'
                                    className='bannerLogo'
                                ></img>
                                <p className='aban__desc'>
                                    Với mục đích truyền cảm hứng đến cho các bạn trẻ, đây là nơi
                                    Curnon tâm sự, trò chuyện, chia sẻ những điều người trẻ đang
                                    trăn trở, những câu chuyện truyền cảm hứng mang tinh thần "Why
                                    not?", với hy vọng giúp các bạn thay đổi cách nhìn cũng như cách
                                    giải quyết mọi vấn đề trong cuộc sống.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container2'>
                <nav className='wrapper__header1__navbar'>
                    <a href='/products' className='active'>HOME</a>
                    <a href='/watch'>WATCH</a>
                    <a href='/fashion'>FASHION</a>
                    <a href='/gift'>GIFT</a>
                    <a href='/grooming'>GROOMING</a>
                </nav>
            </div>

            {/* Post List 1 */}
            <div className="wrapper__content">
                <PostList data={data} />
            </div>

            {/* Divider và UI giữa 2 PostList */}
            <Divider style={{ margin: '40px 0' }}>
                <Title level={2}>Khám phá thêm bài viết thú vị</Title>
                <Paragraph>
                    Bạn muốn tìm hiểu thêm về xu hướng mới, các mẹo bảo quản đồng hồ và nhiều hơn nữa? Hãy khám phá thêm những bài viết bên dưới.
                </Paragraph>
                <Button type="primary" size="large" style={{ background: 'black', border: 'none' }}>
                    Xem thêm bài viết
                </Button>
            </Divider>

            {/* Post List 2 */}
            <div className="wrapper__content">
                <PostList data={data2} />
            </div>
        </div>
    );
}

Blog.propTypes = {};

export default Blog;
