import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const getForms = () => api.get(`/forms/formList`)
export const updateFormById = (id, items) => api.post(`/forms/${id}`, items)
export const getFormById = id => api.get(`/forms/${id}`)

const apis = {
    getForms,
    updateFormById,
    getFormById,
};

export default apis