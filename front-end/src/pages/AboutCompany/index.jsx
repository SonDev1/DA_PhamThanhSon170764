import React from 'react';
import PropTypes from 'prop-types';
import '../AboutCompany/style.scss';

function AboutCompany(props) {
    return (
        <div>
            {/* Container 1 */}
            <div className='aban'>
                <div className='aban__wrap'>
                    <div className='aban__bg'>
                        <img
                            style={{height:"fitContent"}}
                            src='https://curnonwatch.com/wp-content/uploads/2024/04/ANN_8524-Edit.jpg'
                            alt='About Company'
                        />
                    </div>
                    <div className='container'>
                        <div className='aban__inner'>
                            <div className='aban__ctn' data-aos='zoom-in'>
                                <span className='aban__text'>/cơ - nần/</span>
                                <h1 className='aban__title'>Chào bạn, chúng tôi là CURNON!</h1>
                                <p className='aban__desc'>
                                    Chúng tôi biến sản phẩm phụ kiện không thể thiếu trở thành những
                                    biểu tượng tinh thần đầy cảm hứng, để thúc đẩy thế hệ trẻ Việt
                                    Nam không ngừng tiến lên phía trước
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container 2 */}
            <div className='aban2'>
                <div className='aban2__flex'>
                    <div className='aban2__left1'>
                        <div className='aban2__desc'>
                            <h2 className='aban2__title '>TẠI SAO KHÔNG?</h2>
                            <div className='aban2__desc2 '>
                                <p>
                                    Đó là câu hỏi của chúng tôi khi bắt đầu.
                                    <span className='fw-6'>
                                        Và cũng là tinh thần “Why not” chúng tôi khát khao truyền
                                        tải
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='aban2__right1'>
                        <div className='aban2__img' >
                            <div className='aban2__box'>
                                <img
                                    src='https://curnonwatch.com/wp-content/uploads/2024/04/ANN_8573-Edit.jpg'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='aban2__flex' style={{height:"500px"}}>
                    <div className='aban2__left2' style={{height:"500px"}}>
                        <div className='aban2__img' data-aos='zoom-in' style={{height:"500px"}}>
                            <div className='aban2__box' style={{height:"500px"}}>
                                <img
                                    style={{height:"fitContent"}}
                                    src='https://curnonwatch.com/wp-content/uploads/2024/04/8_310076-Edit.jpeg'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                    <div className='aban2__right2'>

                        <div className='aban2__desc' data-aos='fade-up'>
                            <h2 className='aban2__title f-title fw-7 t-center'>CURNON</h2>
                            <div className='aban2__desc2 fw-5 t16 t-center mona-content'>
                                <div>
                                    <div>
                                        <span>
                                        Với những sản phẩm được thiết kế bằng nhiệt huyết, khát khao
                                        và khối óc đầy sáng tạo của đội ngũ chính những người trẻ
                                        Việt Nam, chúng tôi tin rằng tinh thần “Why not” ấy sẽ luôn
                                        đồng hành và truyền cảm hứng cho bạn mỗi ngày.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

AboutCompany.propTypes = {};

export default AboutCompany;
