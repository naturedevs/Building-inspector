const API_URL = 'http://localhost:4000'
export const API_ROUTES = {
   LOGIN: `${API_URL}/auth/login`,
   REGISTER: `${API_URL}/auth/register`,
   ME: `${API_URL}/auth/me`,

   GET_USER_LIST: `${API_URL}/users`,
   DELETE_USER: `${API_URL}/users`,
   ADD_USER: `${API_URL}/users`,
   UPDATE_USER: `${API_URL}/users`,

   GET_ROLE_LIST: `${API_URL}/roles`,
   DELETE_ROLE: `${API_URL}/roles`,
   ADD_ROLE: `${API_URL}/roles`,
   UPDATE_ROLE: `${API_URL}/roles`,
}