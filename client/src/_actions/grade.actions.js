import { gradeConstants } from "../_constants";
import { gradeService } from "../_services";
import { alertActions } from "./";

export const classActions = {
  getGradeStudentSubjecte,
  getGradeTeacherStudentSubjecte
};

function getGradeStudentSubjecte(idStudent, idSubject) {
  return dispatch => {
    dispatch(request());

    gradeService
      .getGradeStudentSubjecte(idStudent, idSubject)
      .then(
        grades => dispatch(success(grades)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: classConstants.GETALL_STUDENT_GRADES_REQUEST };
  }
  function success(grades) {
    return { type: classConstants.GETALL_STUDENT_GRADES_SUCCESS, grades };
  }
  function failure(error) {
    return { type: classConstants.GETALL_STUDENT_GRADES_FAILURE, error };
  }
}

function getGradeTeacherStudentSubjecte(idTeacher, idStudent, idSubject) {
  return dispatch => {
    dispatch(request());

    gradeService
      .getGradeTeacherStudentSubjecte(idTeacher, idStudent, idSubject)
      .then(
        grades => dispatch(success(grades)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: classConstants.GETALL_TEACHER_STUDENT_GRADES_REQUEST };
  }
  function success(grades) {
    return {
      type: classConstants.GETALL_TEACHER_STUDENT_GRADES_SUCCESS,
      grades
    };
  }
  function failure(error) {
    return {
      type: classConstants.GETALL_TEACHER_STUDENT_GRADES_FAILURE,
      error
    };
  }
}
