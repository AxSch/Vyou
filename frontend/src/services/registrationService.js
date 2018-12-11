import request from "axios";

const registerUser = (email, password1, password2) => {
  return request
  .post("/api/v1/registration/", {
      email: email,
      password1: password1,
      password2: password2
    }
  )
}

const registrationService = {
  registerUser
}

export default registrationService;
