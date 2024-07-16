import axiosClient from "./axiosClient"

const menuApi = {
    async getAll(){
        const data = await axiosClient.get('/api/menus');
        console.log(" data : " ,data);
        // debugger
        return data;
    },

}

export default menuApi