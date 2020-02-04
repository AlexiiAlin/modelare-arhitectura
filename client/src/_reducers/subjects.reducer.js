import { subjectConstants } from "../_constants";

export function subjects(state = {}, action) {
  switch (action.type) {
    case subjectConstants.GETALL_SUBJECTS_REQUEST:
      return {
        loading: true
      };
    case subjectConstants.GETALL_SUBJECTS_SUCCESS:
      return {
        items: action.subjects
      };
    case subjectConstants.GETALL_SUBJECTS_FAILURE:
      return {
        error: action.error
      };
    case subjectConstants.CREATE_SUBJECT_REQUEST:
      return {
        ...state,
        registering: true
      };
    case subjectConstants.CREATE_SUBJECT_SUCCESS:
      return {
        ...state,
        registered: true,
        subject: action.subject
      };
    case subjectConstants.CREATE_SUBJECT_FAILURE:
      return state;
    case subjectConstants.GET_SUBJECT_REQUEST:
      return {
        loading: true
      };
    case subjectConstants.GET_SUBJECT_SUCCESS:
      return {
        subject: action.subject
      };
    case subjectConstants.GET_SUBJECT_FAILURE:
      return {
        error: action.error
      };
    case subjectConstants.ADD_CLASS_AND_TEACHER_TO_SUBJECT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case subjectConstants.ADD_CLASS_AND_TEACHER_TO_SUBJECT_SUCCESS:
      return {
        subject: action.subject
      };
    case subjectConstants.ADD_CLASS_AND_TEACHER_TO_SUBJECT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case subjectConstants.REMOVE_CLASS_AND_TEACHER_FROM_SUBJECT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case subjectConstants.REMOVE_CLASS_AND_TEACHER_FROM_SUBJECT_SUCCESS:
      return {
        subject: action.subject
      };
    case subjectConstants.REMOVE_CLASS_AND_TEACHER_FROM_SUBJECT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case subjectConstants.GETALL_STUDENT_SUBJECTS_REQUEST:
      return {
        loading: true
      };
    case subjectConstants.GETALL_STUDENT_SUBJECTS_SUCCESS:
      return {
        items: action.subjects
      };
    case subjectConstants.GETALL_STUDENT_SUBJECTS_FAILURE:
      return {
        error: action.error
      };
    case subjectConstants.GETALL_TEACHER_SUBJECTS_REQUEST:
      return {
        loading: true
      };
    case subjectConstants.GETALL_TEACHER_SUBJECTS_SUCCESS:
      return {
        items: action.subjects
      };
    case subjectConstants.GETALL_TEACHER_SUBJECTS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
