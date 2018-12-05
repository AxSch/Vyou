import request from "axios";

const personalityQuestions = () => {
  return request
  .get("/api/v1/questions/personality/")
}

const energyFlowQuestions = () => {
  return request
  .get("/api/v1/questions/energy_flow/")
}


const questionsService = {
  personalityQuestions,
  energyFlowQuestions
}
export default questionsService;
