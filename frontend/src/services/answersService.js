import request from "axios";

const sendPersonalityAnswers = (userId, question) => {
  return request
  .post("/api/v1/answers/personality_answers/", {
  question_id: question.questionId,
  question: question.question,
  question_sign: question.questionSign,
  category_name: question.categoryName,
  scale_alpha: question.scaleAlpha,
  answer_text: question.answer_text,
  answer_score: question.value,
  category_id: question.categoryId,
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
