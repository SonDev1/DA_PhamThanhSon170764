import axiosClient from './axiosClient';

const productsApi = {
    async getAll(userId) {
        // Transform _page to _start
        const cartList = await axiosClient.get(`/api/cart/user/${userId}`,
            //  { params: newParams }
            );
        return cartList;
    },

    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/product';
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/product/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
};

export default productsApi;
