import request from "axios";

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
  return fetch(`/api/v1/auth/login/`, requestOptions)
    .then(handleResponse)
    .then((email, key) => {
      if (key) {
        localStorage.setItem('email', JSON.stringify(email));
      }
      return email;
    });
}

const loginUser = (email, password) => {
  return request
  .post('/api/v1/auth/login/', {
    email: email,
    password: password
  })
}



const logout = () => {
  return request
  .post('/api/v1/auth/logout/')
}

const authService = {
  login,
  loginUser,
  logout
};

export default authService;
