import config from "config";
import { authHeader } from "../_helpers";

export const classService = {
  getAllClasses,
  createClass,
  getClass,
  addNewStudent
};

function getAllClasses() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/classes`, requestOptions).then(handleResponse);
}

function createClass(classObj) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(classObj)
  };
  console.log(requestOptions);
  return fetch(`${config.apiUrl}/classes`, requestOptions).then(handleResponse);
}

function getClass(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/classes/${id}`, requestOptions).then(
    handleResponse
  );
}

function addNewStudent(id, email) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify({ email: email })
  };

  return fetch(`${config.apiUrl}/classes/${id}`, requestOptions).then(
    handleResponse
  );
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
