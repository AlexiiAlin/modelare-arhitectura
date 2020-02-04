import { gradeConstants } from "../_constants";

export function grades(state = {}, action) {
  switch (action.type) {
    case gradeConstants.GETALL_STUDENT_GRADES_REQUEST:
      return {
        loading: true
      };
    case gradeConstants.GETALL_STUDENT_GRADES_SUCCESS:
      return {
        items: action.grades
      };
    case gradeConstants.GETALL_STUDENT_GRADES_FAILURE:
      return {
        error: action.error
      };
    case gradeConstants.GETALL_TEACHER_STUDENT_GRADES_REQUEST:
      return {
        loading: true
      };
    case gradeConstants.GETALL_TEACHER_STUDENT_GRADES_SUCCESS:
      return {
        items: action.grades
      };
    case gradeConstants.GETALL_TEACHER_STUDENT_GRADES_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
