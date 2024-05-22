const API_URL = 'http://localhost:4000'
export const API_ROUTES = {
   LOGIN: `${API_URL}/auth/login`,
   REGISTER: `${API_URL}/auth/register`,
   ME: `${API_URL}/auth/me`,
   USER_API: `${API_URL}/users`,
   ROLE_API: `${API_URL}/roles`,
   FORM_API: `${API_URL}/frms`,
}

export const MSG = {
   LOADING: 'loading...',
   NO_DATA: 'no data',
}