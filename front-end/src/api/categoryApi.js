import axiosClient from "./axiosClient"

const categoryApi = {
    // async getAll(){
    //     const category = await axiosClient.get('/api/categories');
    //     return category;
    // },
    getAll(params){
        const url = '/api/categories';
        return axiosClient.get(url,{
            params: params
        })
    },

    getTypesByGender: async (typeGender) => {
        console.log(`/api/categories/${typeGender}`);
        const response = await axiosClient.get(`/api/categories/${typeGender}`);
        return response;
      },

    get(id){
        const url = `/api/categories/${id}`;
        return axiosClient.get(url)
    },

    add(data){
        const url = '/categories';
        return axiosClient.post(url,data)
    },

    update(data){
        const url = `/categories/${data.id}`;
        return axiosClient.patch(url,data)
    },
    
    remove(id){
        const url = `/categories/${id}`;
        return axiosClient.delete(url)
    }
}

export default categoryApi