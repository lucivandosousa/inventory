import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9999'
})

export const fetchItems = async () => {
  const response = await api.get('/items')
  return response.data
}

export const fetchItem = async (id) => {
  const response = await api.get(`/items/${id}`)
  return response.data;
}

export const createItem = async (item) => {
  const response = await api.post('/items', item)
  return response.data
}

export const updateItem = async (id, data) => {
  const response = await api.patch(`/items/${id}`, data)
  return response.data
}

export const deleteItem = async (id) => {
  await api.delete(`/items/${id}`)
}