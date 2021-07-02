import {
  SAVE_ID_SALE
} from '../actions.js'

export function onSaveID(id) {
  return {
    type: SAVE_ID_SALE,
    payload: { id }
  };
}
