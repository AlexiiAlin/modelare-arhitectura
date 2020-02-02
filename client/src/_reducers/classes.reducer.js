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
    case classConstants.CREATE_CLASS_REQUEST:
      return {
        ...state,
        registering: true
      };
    case classConstants.CREATE_CLASS_SUCCESS:
      return state;
    case classConstants.CREATE_CLASS_FAILURE:
      return state;
    default:
      return state;
  }
}
