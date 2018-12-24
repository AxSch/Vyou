import request from "axios";

const login = (email, password) => {
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
  logout
};

export default authService;
