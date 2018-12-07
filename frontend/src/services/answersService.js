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

const fetchCompPersonalityAnswers = (userId, categoryId) => {
  return request
  .get("/api/v1/answers/personality_answers/", {
    params: {
      profile: userId,
      category_id: categoryId
    }
  }
)
}



const answersService = {
  sendPersonalityAnswers,
  fetchCompPersonalityAnswers
};

export default answersService;
