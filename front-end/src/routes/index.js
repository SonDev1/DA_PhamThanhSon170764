import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

export const routes = [
    { 
        path:'/',
        exact: true,
        page : HomePage,
        isShowHeader : true,
    },
    { 
        path:'*',
        page : NotFound,
    },
]