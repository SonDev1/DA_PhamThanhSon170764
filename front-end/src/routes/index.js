import { LoginPage } from "../../src/pages/Auth/LoginPage/index";
import { SocialRedirect } from "../pages/Auth/SocialMediaRedirect";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";

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
        exact: true,
        page : Product,
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
        path:'*',
        page : NotFound,
    },
]