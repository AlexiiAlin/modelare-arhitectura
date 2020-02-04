import { classConstants } from "../_constants";

export function subjects(state = {}, action) {
  switch (action.type) {
    case classConstants.GETALL_SUBJECTS_REQUEST:
      return {
        loading: true
      };
    case classConstants.GETALL_SUBJECTS_SUCCESS:
      return {
        items: action.subjects
      };
    case classConstants.GETALL_SUBJECTS_FAILURE:
      return {
        error: action.error
      };
    case classConstants.CREATE_SUBJECT_REQUEST:
      return {
        ...state,
        registering: true
      };
    case classConstants.CREATE_SUBJECT_SUCCESS:
      return {
        ...state,
        registered: true,
        subject: action.subject
      };
    case classConstants.CREATE_SUBJECT_FAILURE:
      return state;
    case classConstants.GET_SUBJECT_REQUEST:
      return {
        loading: true
      };
    case classConstants.GET_SUBJECT_SUCCESS:
      return {
        subject: action.subject
      };
    case classConstants.GET_SUBJECT_FAILURE:
      return {
        error: action.error
      };
    case classConstants.ADD_CLASS_AND_TEACHER_TO_SUBJECT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case classConstants.ADD_CLASS_AND_TEACHER_TO_SUBJECT_SUCCESS:
      return {
        subject: action.subject
      };
    case classConstants.ADD_CLASS_AND_TEACHER_TO_SUBJECT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case classConstants.REMOVE_CLASS_AND_TEACHER_FROM_SUBJECT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case classConstants.REMOVE_CLASS_AND_TEACHER_FROM_SUBJECT_SUCCESS:
      return {
        subject: action.subject
      };
    case classConstants.REMOVE_CLASS_AND_TEACHER_FROM_SUBJECT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
