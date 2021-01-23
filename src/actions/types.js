const STATES = name => ({
  request: name + "_request",
  success: name + "_success",
  failure: name + "_failure"
});

// auth actions & reducer types
export const LOG_IN = Object.create(STATES("LOG_IN"));
export const LOG_OUT = Object.create(STATES("LOG_OUT"));

// main actions & reducer types
export const GET_DATA = Object.create(STATES("GET_DATA"));