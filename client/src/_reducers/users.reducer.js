import { userConstants } from "../_constants";

export function users(state = {}, action) {
  switch (action.type) {
    // START TEACHER
    case userConstants.GETALL_TEACHERS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_TEACHERS_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_TEACHERS_FAILURE:
      return {
        error: action.error
      };
    case userConstants.CREATE_TEACHER_REQUEST:
      return {
        ...state,
        registering: true
      };
    case userConstants.CREATE_TEACHER_SUCCESS:
      return state;
    case userConstants.CREATE_TEACHER_FAILURE:
      return state;
    case userConstants.GET_TEACHER_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_TEACHER_SUCCESS:
      return {
        teacher: action.teacher
      };
    case userConstants.GET_TEACHER_FAILURE:
      return {
        error: action.error
      };
    case userConstants.UPDATE_TEACHER_REQUEST:
      return {
        ...state,
        updating: true
      };
    case userConstants.UPDATE_TEACHER_SUCCESS:
      return {
        teacher: action.teacher
      };
    case userConstants.UPDATE_TEACHER_FAILURE:
      return {
        ...state,
        error: action.error
      };
    // STOP TEACHER
    // START STUDENT
    case userConstants.GETALL_STUDENTS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_STUDENTS_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_STUDENTS_FAILURE:
      return {
        error: action.error
      };
    // STOP STUDENT
    default:
      return state;
  }
}
