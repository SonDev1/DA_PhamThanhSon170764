import axiosClient from "./axiosClient"

const userApi = {
    register(data){
        const url = 'api/auth/register';
        return axiosClient.post(url,data)
    },

    login(data){
        const url = 'api/auth/login';
        return axiosClient.post(url,data)
    },
    getInfo(userId){
        const url = `api/auth/${userId}`;
        return axiosClient.get(url)
    }
    // updateUser()
}
// console.log('userApi',userApi);

export default userApi