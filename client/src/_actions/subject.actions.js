import { subjectConstants } from "../_constants";
import { subjectService } from "../_services";
import { alertActions } from "./";

export const subjectActions = {
  getAllSubjects,
  createSubject,
  getSubject,
  addClassAndTeacher,
  removeClassAndTeacher
};

function getAllSubjects() {
  return dispatch => {
    dispatch(request());

    subjectService
      .getAllSubjects()
      .then(
        subjects => dispatch(success(subjects)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: subjectConstants.GETALL_SUBJECTS_REQUEST };
  }
  function success(subjects) {
    return { type: subjectConstants.GETALL_SUBJECTS_SUCCESS, subjects };
  }
  function failure(error) {
    return { type: subjectConstants.GETALL_SUBJECTS_FAILURE, error };
  }
}

function createSubject(subject) {
  return dispatch => {
    dispatch(request(subject));

    subjectService.createSubject(subject).then(
      subject => {
        dispatch(success(subject));
        dispatch(alertActions.success("Subject created successfully"));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(subject) {
    return { type: subjectConstants.CREATE_SUBJECT_REQUEST, subject: subject };
  }
  function success(subject) {
    return { type: subjectConstants.CREATE_SUBJECT_SUCCESS, subject: subject };
  }
  function failure(error) {
    return { type: subjectConstants.CREATE_SUBJECT_FAILURE, error };
  }
}

function getSubject(id) {
  return dispatch => {
    dispatch(request());

    subjectService
      .getSubject(id)
      .then(
        subject => dispatch(success(subject)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: subjectConstants.GET_SUBJECT_REQUEST };
  }
  function success(subject) {
    return { type: subjectConstants.GET_SUBJECT_SUCCESS, subject };
  }
  function failure(error) {
    return { type: subjectConstants.GET_SUBJECT_FAILURE, error };
  }
}

function addClassAndTeacher(id, className, teacherEmail) {
  return dispatch => {
    dispatch(request());

    subjectService
      .addClassAndTeacher(id, className, teacherEmail)
      .then(
        subject => dispatch(success(subject)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: subjectConstants.ADD_CLASS_AND_TEACHER_TO_SUBJECT_REQUEST };
  }
  function success(subject) {
    return {
      type: subjectConstants.ADD_CLASS_AND_TEACHER_TO_SUBJECT_SUCCESS,
      subject
    };
  }
  function failure(error) {
    return {
      type: subjectConstants.ADD_CLASS_AND_TEACHER_TO_SUBJECT_FAILURE,
      error
    };
  }
}

function removeClassAndTeacher(id, idClass, idTeacher) {
  return dispatch => {
    dispatch(request());

    subjectService
      .removeClassAndTeacher(id, idClass, idTeacher)
      .then(
        subject => dispatch(success(subject)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return {
      type: subjectConstants.REMOVE_CLASS_AND_TEACHER_FROM_SUBJECT_REQUEST
    };
  }
  function success(subject) {
    return {
      type: subjectConstants.REMOVE_CLASS_AND_TEACHER_FROM_SUBJECT_SUCCESS,
      subject
    };
  }
  function failure(error) {
    return {
      type: subjectConstants.REMOVE_CLASS_AND_TEACHER_FROM_SUBJECT_FAILURE,
      error
    };
  }
}
