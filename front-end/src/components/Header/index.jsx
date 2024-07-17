import { Badge, Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, Search, ShoppingCart } from '@material-ui/icons';
import 'boxicons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cartsApi from '../../api/cartApi';
import logo from '../../assets/logo/logo.svg';
import { logout } from '../../pages/Auth/userSlice';
import SearchComponent from '../../pages/Product/components/Search';
import '../Header/style.scss';
import { cartItemsCountSelector } from '../../pages/Cart/selectors';

function Header(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State để điều khiển dropdown
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const [cartList, setCartList] = useState([]);
    const [userId, setUserId] = useState();
    const cartItemsCount = useSelector(cartItemsCountSelector);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            setIsLoggedIn(true);
            setUserId(userId);
        }
    }, []);

    // const cartItemsCount = useSelector(cartItemsCountSelector);

    // Call API de lay tong so luong san pham thay vi lay so luong tu Redux
    //==========================================================================================
    useEffect(() => {
        if (!userId) {
            return;
        }
        (async () => {
            try {
                const cartList = await cartsApi.getAll(userId);
                setCartList(cartList);
            } catch (error) {
                console.log('Failed to fetch carts list', error);
            }
        })();
    }, [userId]);
    // const cartItemsCount = cartList.length;
    //==========================================================================================
    // Handler để xử lý khi ấn vào icon search
    const handleSearchClick = () => {
        setIsDropdownOpen(!isDropdownOpen); // Đảo ngược trạng thái hiển thị dropdown
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
        handleCloseMenu();
        navigate('/');
    };

    const handleUserInfo = () => {
        navigate('/account');
    };

    return (
        <div className='wrapper__header'>
            <a
                href='/'
                className='wrapper__header__logo'
            >
                <img
                    src={logo}
                    alt='logo'
                />
            </a>

            <nav className='wrapper__header__navbar'>
                <a
                    style={{ '--i': 1 }}
                    href='/products'
                    className='active'
                >
                    HOME
                </a>
                <a
                    style={{ '--i': 2 }}
                    href='/about'
                >
                    NAM GIỚI
                </a>
                <a
                    style={{ '--i': 3 }}
                    href='/reviews'
                >
                    NỮ GIỚI
                </a>
                <a
                    style={{ '--i': 4 }}
                    href='/about'
                >
                    VỀ CHÚNG TÔI
                </a>
                <a
                    style={{ '--i': 5 }}
                    href='/blog'
                >
                    BLOG
                </a>
            </nav>

            <div className='wrapper__header__social-media'>
                {isLoggedIn ? (
                    // <Box>
                    //     <a style={{ '--i': 1, marginRight: '18px' }} href='/cart'>
                    //         <box-icon type='solid' name='cart' color='#000'></box-icon>
                    //     </a>
                    //     <a style={{ '--i': 2, marginRight: '18px' }} href='/account'>
                    //         <box-icon type='solid' name='user-circle' color='#000'></box-icon>
                    //     </a>
                    //     <a style={{ '--i': 3, marginRight: '18px' }} href='#' onClick={handleSearchClick}>
                    //         <box-icon type='solid' name='search-alt-2'></box-icon>
                    //     </a>
                    // </Box>
                    <Box>
                        {/* <a style={{ '--i': 3, marginRight: '18px' }} href='#' onClick={handleSearchClick}>
                            <box-icon name='search-alt-2'></box-icon>
                        </a> */}
                        <IconButton
                            size='large'
                            color='inherit'
                            onClick={handleSearchClick}
                        >
                            <Search />
                        </IconButton>
                        <IconButton
                            size='large'
                            color='inherit'
                            onClick={handleCartClick}
                        >
                            <Badge
                                badgeContent={cartItemsCount}
                                color='error'
                            >
                                <ShoppingCart style={{ color: 'black' }} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            color='inherit'
                            onClick={handleUserClick}
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                ) : (
                    <>
                        {/* <a style={{ '--i': 1 }} href='https://www.youtube.com/@CurnonWatch'>
                            <box-icon type='logo' name='youtube' color='#000'></box-icon>
                        </a> */}
                        <a
                            style={{ '--i': 2 }}
                            href='https://www.facebook.com/curnonwatch'
                        >
                            <box-icon
                                type='logo'
                                name='facebook-circle'
                                color='#000'
                            ></box-icon>
                        </a>
                        <a
                            style={{ '--i': 3 }}
                            href='https://www.instagram.com/curnonwatchcom/'
                        >
                            <box-icon
                                type='logo'
                                name='instagram-alt'
                                color='#000'
                            ></box-icon>
                        </a>
                        <a
                            style={{ '--i': 4 }}
                            href='/login'
                        >
                            <box-icon
                                type='solid'
                                name='user-circle'
                                color='#000'
                            ></box-icon>
                        </a>
                    </>
                )}
            </div>

            <div className={`search-dropdown ${isDropdownOpen ? 'active' : ''}`}>
                <SearchComponent />
            </div>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
            >
                {/* <MenuItem onClick={handleCloseMenu}>Profile</MenuItem> */}
                <MenuItem onClick={handleUserInfo}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

Header.propTypes = {};

export default Header;
