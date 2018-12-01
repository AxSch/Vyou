import request from "axios";

const personalityQuestions = () => {
  return request
  .get("/api/v1/questions/personality/")
}

const energyLevelQuestions = () => {
  return request
  .get("/api/v1/questions/energy_level/")
}


const questionsService = {
  personalityQuestions,
  energyLevelQuestions
}
export default questionsService;
