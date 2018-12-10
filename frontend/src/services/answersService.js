import request from "axios";

const sendPersonalityAnswers = (userId, question, index) => {
  return request
  .post("/api/v1/answers/personality_answers/", {
  question_id: index,
  question: question.question,
  question_sign: question.questionSign,
  category_name: question.categoryName,
  scale_alpha: question.scaleAlpha,
  answer_score: question.value,
  category_id: question.categoryId,
  profile: userId
  }
)
}

const updatePersonalityAnswers = (userId, answer, index) => {
  return request
  .put(`/api/v1/answers/personality_answers/${index}/`, {
  question_id: answer.question_id,
  question: answer.question,
  question_sign: answer.question_sign,
  category_name: answer.category_name,
  category_id: answer.category_id,
  scale_alpha: answer.scale_alpha,
  answer_score: answer.answer_score,
  profile: userId
  }
)
}

const sendEnergyFlowAnswers = (userId, question, index) => {
  return request
  .post("/api/v1/answers/personality_answers/", {
  question_id: index,
  question: question.question,
  question_sign: question.questionSign,
  category_name: question.categoryName,
  scale_alpha: question.scaleAlpha,
  answer_score: question.value,
  category_id: question.categoryId,
  profile: userId
  }
)
}

const updateEnergyFlowAnswers = (userId, answer, index) => {
  return request
  .put(`/api/v1/answers/personality_answers/${index}/`, {
  question_id: answer.question_id,
  question: answer.question,
  question_sign: answer.question_sign,
  category_name: answer.category_name,
  category_id: answer.category_id,
  scale_alpha: answer.scale_alpha,
  answer_score: answer.answer_score,
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
  updatePersonalityAnswers,
  sendEnergyFlowAnswers,
  updateEnergyFlowAnswers,
  fetchCompPersonalityAnswers
};

export default answersService;
