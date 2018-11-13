import request from "axios";

const personalityQuestions = () => {
  return request
  .get("/api/v1/questions/personality/")
}


const questionsService = {
  personalityQuestions
}
export default questionsService;
