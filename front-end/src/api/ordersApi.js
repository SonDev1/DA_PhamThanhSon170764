import axiosClient from './axiosClient';

const orderApi = {
    add(payloadPay) {
        const url = 'api/orders';
        return axiosClient.post(url,payloadPay);
    },
    get(userId) {

    },
    remove(userId, productIds) {
        console.log( "userId :" , userId);
        console.log( "productIds :" , productIds);
        const encodedProductIds = encodeURIComponent(JSON.stringify(productIds));
        const url = `api/carts/user?userId=${userId}&productIds=${encodedProductIds}`;
        return axiosClient.put(url);
    },
}

export default orderApi;
