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
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id ? { ...user, deleting: true } : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state;
  }
}
