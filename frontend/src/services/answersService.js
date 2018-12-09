import request from "axios";

const sendPersonalityAnswers = (userId, question) => {
  return request
  .post("/api/v1/answers/personality_answers/", {
  question_id: question.questionId,
  question: question.question,
  question_sign: question.questionSign,
  category_name: question.category_name,
  scale_alpha: question.scale_alpha,
  answer_text: question.answer_text,
  answer_score: question.answer_score,
  category_id: question.category_id,
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
