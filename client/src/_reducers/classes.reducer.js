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
      return {
        ...state,
        registered: true,
        newClass: action.class
      };
    case classConstants.CREATE_CLASS_FAILURE:
      return state;
    case classConstants.GET_CLASS_REQUEST:
      return {
        loading: true
      };
    case classConstants.GET_CLASS_SUCCESS:
      return {
        classObj: action.classObj
      };
    case classConstants.GET_CLASS_FAILURE:
      return {
        error: action.error
      };
    case classConstants.ADD_STUDENT_IN_CLASS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case classConstants.ADD_STUDENT_IN_CLASS_SUCCESS:
    console.log(action);
      return {
        classObj: action.classObj
      };
    case classConstants.ADD_STUDENT_IN_CLASS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
