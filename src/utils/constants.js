const API_URL = 'http://localhost:4000'
export const API_ROUTES = {
   LOGIN: `${API_URL}/auth/login`,
   REGISTER: `${API_URL}/auth/register`,
   ME: `${API_URL}/auth/me`,

   GET_USER_LIST: `${API_URL}/users`,
   DELETE_USER: `${API_URL}/users/delete`,
   ADD_USER: `${API_URL}/users/add`,
   UPDATE_USER: `${API_URL}/users/update`,
   
   GET_ROLE_LIST: `${API_URL}/role/list`,
   DELETE_ROLE: `${API_URL}/role/delete`,
   ADD_ROLE: `${API_URL}/role/add`,
   UPDATE_ROLE: `${API_URL}/role/update`,
}