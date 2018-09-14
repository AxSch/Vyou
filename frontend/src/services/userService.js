// import config from 'config';
// import { authHeader } from '../helpers/auth-header';





const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if(!response.ok){
      if(response.status === 401) {
        logout();
        window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

const login = (email, password) => {
  const requestOptions  = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      email,
      password
    })
  };
  return fetch(`http://127.0.0.1:8000/api/auth/login/`, requestOptions)
    .then(handleResponse)
    .then((email, key) => {
      if (key) {
        localStorage.setItem('email', JSON.stringify(email));
      }
      return email;
    });
}

const logout = () => {
  localStorage.removeItem('email');
}

const userService = {
  login,
  logout,
  // signup,
  // getAll,
  // getById,
  // update,
  // delete: deleteUser
};

export default userService;
