const authHeader = () => {
  //return auth header with JWT token
  let email = JSON.parse(localStorage.getItem('email'));
  if (email && email.token) {
    return {
      'Authorization': 'Bearer' + email.token
    };
  } else {
    return {
      error: 'Not Authorized'
    };
  }
}

export default authHeader;
