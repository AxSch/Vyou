import request from "axios";

const sendPersonalityAnswers = (userId, question) => {
  return request
  .post("/api/v1/answers/personality_answers/", {
  questionId: question,
  question: question,
  category_name: question,
  scale_alpha: question,
  answer_text: question,
  answer_score: question,
  category_id: question,
  profile: userId
  }
)
}

const fetchPersonalityAnswers = userId => {
  return request
  .get("/api/v1/answers/personality_answers/", {
    params: {
      profile: userId
    }
  }
)
}



const answersService = {
  sendPersonalityAnswers,
  fetchPersonalityAnswers
};

export default answersService;
