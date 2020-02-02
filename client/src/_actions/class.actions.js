import { classConstants } from "../_constants";
import { classService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const classActions = {
  getAllClasses,
  createClass,
  getClass,
  addNewStudent
};

function getAllClasses() {
  return dispatch => {
    dispatch(request());

    classService
      .getAllClasses()
      .then(
        classes => dispatch(success(classes)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: classConstants.GETALL_CLASSES_REQUEST };
  }
  function success(classes) {
    return { type: classConstants.GETALL_CLASSES_SUCCESS, classes };
  }
  function failure(error) {
    return { type: classConstants.GETALL_CLASSES_FAILURE, error };
  }
}

function createClass(newClass) {
  return dispatch => {
    dispatch(request(newClass));

    classService.createClass(newClass).then(
      newClass => {
        dispatch(success(newClass));
        dispatch(alertActions.success("Class created successfully"));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(newClass) {
    return { type: classConstants.CREATE_CLASS_REQUEST, class: newClass };
  }
  function success(newClass) {
    return { type: classConstants.CREATE_CLASS_SUCCESS, class: newClass };
  }
  function failure(error) {
    return { type: classConstants.CREATE_CLASS_FAILURE, error };
  }
}

function getClass(id) {
  return dispatch => {
    dispatch(request());

    classService
      .getClass(id)
      .then(
        classObj => dispatch(success(classObj)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: classConstants.GET_CLASS_REQUEST };
  }
  function success(classObj) {
    return { type: classConstants.GET_CLASS_SUCCESS, classObj };
  }
  function failure(error) {
    return { type: classConstants.GET_CLASS_FAILURE, error };
  }
}

function addNewStudent(id, email) {
  return dispatch => {
    dispatch(request());

    classService
      .addNewStudent(id, email)
      .then(
        () => dispatch(success()),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: classConstants.ADD_STUDENT_IN_CLASS_REQUEST };
  }
  function success() {
    return { type: classConstants.ADD_STUDENT_IN_CLASS_SUCCESS };
  }
  function failure(error) {
    return { type: classConstants.ADD_STUDENT_IN_CLASS_FAILURE };
  }
}
