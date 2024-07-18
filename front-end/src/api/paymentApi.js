import axiosClient from './axiosClient';

const paymentApi = {
    add(payloadPay) {
        const url = 'api/orders';
        return axiosClient.post(url,payloadPay);
    },
    remove(userId, productIds) {
        console.log( "userId :" , userId);
        console.log( "productIds :" , productIds);
        const encodedProductIds = encodeURIComponent(JSON.stringify(productIds));
        const url = `api/carts/user?userId=${userId}&productIds=${encodedProductIds}`;
        return axiosClient.put(url);
    },
}

export default paymentApi;
