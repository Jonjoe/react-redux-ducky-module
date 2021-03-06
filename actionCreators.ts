/*
  | ActionCreators for [Module] 
  ------------------------------------------------------------------
  [description]
*/

// Base Imports
// -----------------------------------------------------------------
import * as types from "./actionTypes";

// Named Action
// -----------------------------------------------------------------
const namedAction = (/*Args*/) => {
  // Do something
  return {
    type: types.FETCH_RESOURCE,
    payload: {}
  };
};

// Export Definition
// -----------------------------------------------------------------
export { namedAction };
