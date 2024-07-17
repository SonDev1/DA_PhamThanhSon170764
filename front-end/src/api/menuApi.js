import axiosClient from "./axiosClient"

const menuApi = {
    async getAll(){
        const data = await axiosClient.get('/api/menus');
        return data;
    },

}

export default menuApi