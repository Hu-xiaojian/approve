import axios from "axios";

const _axios = axios.create();
_axios.interceptors.response.use((response) => {
  return response.data.data;
}, () => {

})

export const getList = (params: any): Promise<Array<any>> => _axios.get('/api/list', { params });

export const deleteItem = (params: any): Promise<any> => _axios.get('/api/deleteItem', { params });