import axiosClient from './axiosClient';

const orderApi = {
    add(payloadPay) {
        const url = 'api/orders';
        return axiosClient.post(url,payloadPay);
    },
    remove(userId, productIds) {
        const url = `api/carts/user?userId=${userId}&productIds=${JSON.stringify(productIds)}`;
        // const url = `api/carts/user?userId=${userId}&productIds=["${productIds}"]`;
        return axiosClient.put(url);
    },
}

export default orderApi;
