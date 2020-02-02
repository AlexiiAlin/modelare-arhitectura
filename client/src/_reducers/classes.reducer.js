import { classConstants } from "../_constants";

export function classes(state = {}, action) {
  switch (action.type) {
    case classConstants.GETALL_CLASSES_REQUEST:
      return {
        loading: true
      };
    case classConstants.GETALL_CLASSES_SUCCESS:
      return {
        items: action.classes
      };
    case classConstants.GETALL_CLASSES_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
