import config from "config";
import { authHeader } from "../_helpers";

export const gradeService = {
  getGradeStudentSubjecte,
  getGradeTeacherStudentSubjecte
};

function getGradeStudentSubjecte(idStudent, idSubject) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(
    `${config.apiUrl}/grades/${idStudent}/${idSubject}`,
    requestOptions
  ).then(handleResponse);
}

function getGradeTeacherStudentSubjecte(idTeacher, idStudent, idSubject) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(
    `${config.apiUrl}/grades/${idTeacher}/${idStudent}/${idSubject}`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
