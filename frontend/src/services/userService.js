import config from 'config';
// import { authHeader } from '../helpers/auth-header';

const userService = {
  login,
  logout,
  // signup,
  // getAll,
  // getById,
  // update,
  // delete: deleteUser
};



const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if(!response.ok){
      if(response.status === 401) {
        logout();
        window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.rejecte(error);
    }
    return data;
  });
}

const login = (email, password) => {
  const requestOptions  = {
    method: 'POST',
    headers: { 'Content-Type': 'applicatio/json'},
    body: JSON.stringify({
      email,
      password
    })
  };
  return fetch(`${config.apiUrl}/api/auth/login/`, requestOptions)
    .then(handleResponse)
    .then((email)=> {
      if (email.token) {
        localStorage.setIte('email', JSON.stringify(email));
      }
      return email;
    });
}

const logout = () => {
  localStorage.removeItem('email');
}

export default userService;
