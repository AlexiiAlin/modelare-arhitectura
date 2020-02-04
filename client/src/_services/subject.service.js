import config from "config";
import { authHeader } from "../_helpers";

export const classService = {
  getAllSubjects,
  createSubject,
  getSubject,
  addClassAndTeacher,
  removeClassAndTeacher,
  getAllSubjectsStudent,
  getAllSubjectsTeacher
};

function getAllSubjects() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/subjects`, requestOptions).then(
    handleResponse
  );
}

function createSubject(subject) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(subject)
  };
  console.log(requestOptions);
  return fetch(`${config.apiUrl}/subjects`, requestOptions).then(
    handleResponse
  );
}

function getSubject(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/subjects/${id}`, requestOptions).then(
    handleResponse
  );
}

function addClassAndTeacher(id, className, teacherEmail) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify({ className: className, teacherEmail: email })
  };

  return fetch(`${config.apiUrl}/subjects/${id}`, requestOptions).then(
    handleResponse
  );
}

function removeClassAndTeacher(id, idClass, idTeacher) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify({ idClass: idClass, idTeacher: idTeacher })
  };

  return fetch(`${config.apiUrl}/subjects/${id}`, requestOptions).then(
    handleResponse
  );
}

function getAllSubjectsStudent(idStudent) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(
    `${config.apiUrl}/subjects/students/${idStudent}`,
    requestOptions
  ).then(handleResponse);
}

function getAllSubjectsTeacher(idTeacher) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(
    `${config.apiUrl}/subjects/teachers/${idTeacher}`,
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
