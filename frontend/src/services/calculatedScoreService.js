import request from "axios";

const personalityScore = (profile) => {
  return request
  .get(`/api/v1/calculations/personality_score/${profile}/`)
}

const energyScore = (profile) => {
  return request
  .get(`/api/v1/calculations/energy_score/${profile}/`)
}

const calculatedScoreService = {
  personalityScore,
  energyScore
}

export default calculatedScoreService;
