import request from "axios";

const sendPersonalityAnswers = (userId, answer, index) => {
  return request
  .post("/api/v1/answers/personality_answers/", {
  question_id: index,
  question: answer.question,
  question_sign: answer.questionSign,
  category_name: answer.categoryName,
  scale_alpha: answer.scaleAlpha,
  answer_score: answer.value,
  category_id: answer.categoryId,
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

const sendEnergyFlowAnswers = (userId, answer, index) => {
  return request
  .post("/api/v1/answers/energy_flow_answers/", {
    question_id: index,
    question: answer.question,
    category_name: answer.categoryName,
    category_id: answer.categoryId,
    subcategory_name: answer.subCategoryName,
    answer_score: answer.value,
    profile: userId
  }
)
}

const updateEnergyFlowAnswers = (userId, answer, index) => {
  return request
  .put(`/api/v1/answers/energy_flow_answers/${index}/`, {
  question_id: answer.question_id,
  question: answer.question,
  category_name: answer.category_name,
  category_id: answer.category_id,
  subcategory_name: answer.subcategory_name,
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

const fetchCompEFAnswers = (userId, categoryId) => {
  return request
  .get("/api/v1/answers/energy_flow_answers/", {
    params: {
      profile: userId,
      category_id: categoryId
    }
  }
)
}

const fetchCompELAnswers = (userId, categoryId) => {
  return request
  .get("/api/v1/answers/energy_level_answers/", {
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
  fetchCompPersonalityAnswers,
  fetchCompEFAnswers,
  fetchCompELAnswers
};

export default answersService;
