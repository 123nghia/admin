import {
  TEST
} from '../actions.js'

const INIT_STATE = {
  test: "Duy 123",
}

export function getData_AllAPI (state = INIT_STATE, action){
  switch (action.type) {
      case TEST: {
          return { ...state, ahihi: "123456789awd" }
      }
      default: return { ...state }
  }
}

