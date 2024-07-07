import axiosClient from './axiosClient';

const productsApi = {
    // Strapi API Document (https://docs.strapi.io/dev-docs/quick-start)
    // async getAll(params) {
    //     // Transform _page to _start
    //     // const newParams = { ...params };
    //     // newParams._start =
    //     //     !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
    //     // // Remove un-needed key
    //     // delete newParams._page;
    //     const productList = await axiosClient.get('/api/products');
    //     // const count = await axiosClient.get('/products/count', { params: newParams });
    //     // return {
    //     //     data: productList,
    //     //     pagination: {
    //     //         page: params._page,
    //     //         limit: params._limit,
    //     //         total: count,
    //     //     },
    //     // };
    //     return productList;
    // },

    async getAll(params) {
        // Transform _page to _start
        const newParams = { ...params };
        // Fetch product list + count
        const productList = await axiosClient.get('/api/products', { params: newParams });
        return productList;
    },

    get(id) {
        const url = `/api/products/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/api/product';
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/api/product/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/api/product/${id}`;
        return axiosClient.delete(url);
    },
};

export default productsApi;
