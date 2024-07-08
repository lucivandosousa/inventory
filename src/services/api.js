import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9999'
})

export const fetchItems = async () => {
  const response = await api.get('/items')
  return response.data
}

export const fetchItem = async (id) => {
  const response = await api.get(`/items/${id}`);
  return response.data;
}
