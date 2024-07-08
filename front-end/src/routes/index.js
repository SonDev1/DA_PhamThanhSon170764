import { LoginPage } from "../../src/pages/Auth/LoginPage/index";
import AccountInfo from "../pages/AccountInfo";
import { SocialRedirect } from "../pages/Auth/SocialMediaRedirect";
import CartPages from "../pages/Cart";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import DetailPage from "../pages/Product/pages/DetailPage";
import MenuItemLeft from "../pages/Product/components/Menu/index";

export const routes = [
    { 
        path:'/',
        exact: true,
        page : HomePage,
        isShowHeader : true,
        isShowFooter : false,
    },
    { 
        path:'/login',
        exact: true,
        page : LoginPage,
        isShowHeader : false,
        isShowFooter : false,
    },
    { 
        path:'/products',
        // exact: true,
        page : Product,
        isShowHeader : true,
        isShowFooter : true,
    },
    { 
        path:'/products/:productId',
        // exact: true,
        page : DetailPage,
        isShowHeader : true,
        isShowFooter : true,
    },
    { 
        path:'/auth/social/redirect',
        page : SocialRedirect,
        isShowHeader : true,
        isShowFooter : true,
    },
    { 
        path:'/cart',
        page : CartPages,
        isShowHeader : true,
        isShowFooter : true,
    },
    { 
        path:'/account',
        page : AccountInfo,
        isShowHeader : true,
        isShowFooter : true,
    },
    { 
        path:'/test',
        page : MenuItemLeft,
        isShowHeader : true,
        isShowFooter : true,
    },
    { 
        path:'*',
        page : NotFound,
    },
]