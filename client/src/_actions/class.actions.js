import { classConstants } from "../_constants";
import { classService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const classActions = {
  getAllClasses
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
