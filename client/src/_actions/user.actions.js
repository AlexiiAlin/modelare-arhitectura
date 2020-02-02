import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const userActions = {
  login,
  logout,
  getAllTeachers,
  createTeacher,
  getTeacher,
  getAllStudents,
  delete: _delete
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      user => {
        dispatch(success(user));
        switch (user.role) {
          case 3:
            history.push("/admin/teachers");
            window.location.reload();
            break;
          case 2:
            history.push("/teacher/profile");
            window.location.reload();
            break;
          case 1:
            history.push("/student/profile");
            window.location.reload();
            break;
          default:
            break;
        }
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function createTeacher(teacher) {
  return dispatch => {
    dispatch(request(teacher));

    userService.createTeacher(teacher).then(
      user => {
        dispatch(success());
        history.push("/admin/teacher/" + user._id);
        window.location.reload();
        dispatch(alertActions.success("Teacher created successfully"));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(teacher) {
    return { type: userConstants.CREATE_TEACHER_REQUEST, teacher };
  }
  function success(teacher) {
    return { type: userConstants.CREATE_TEACHER_SUCCESS, teacher };
  }
  function failure(error) {
    return { type: userConstants.CREATE_TEACHER_FAILURE, error };
  }
}

function getAllTeachers() {
  return dispatch => {
    dispatch(request());

    userService
      .getAllTeachers()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: userConstants.GETALL_TEACHERS_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_TEACHERS_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_TEACHERS_FAILURE, error };
  }
}

function getTeacher(id) {
  return dispatch => {
    dispatch(request());

    userService
      .getTeacher(id)
      .then(
        teacher => dispatch(success(teacher)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: userConstants.GET_TEACHER_REQUEST };
  }
  function success(teacher) {
    return { type: userConstants.GET_TEACHER_SUCCESS, teacher };
  }
  function failure(error) {
    return { type: userConstants.GET_TEACHER_FAILURE, error };
  }
}

function getAllStudents() {
  return dispatch => {
    dispatch(request());

    userService
      .getAllStudents()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: userConstants.GETALL_STUDENTS_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_STUDENTS_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_STUDENTS_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService
      .delete(id)
      .then(
        user => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}
