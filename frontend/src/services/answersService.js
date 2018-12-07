import request from "axios";

const sendPersonalityAnswers = userId => {
  return request
  .get("/api/v1/answers/personality_answers/", {
    params: {
      profile: userId
    }
  }
)
}



const answersService = {
  sendPersonalityAnswers
};

export default answersService;
