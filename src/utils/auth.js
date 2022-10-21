export const BASE_URL = 'https://auth.nomoreparties.co';

const request = ({
  url,
  method = 'POST',
  token,
  data,
}) => {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...!!token && {'Authorization': `Bearer ${token}`},
    },
    ...!!data && { body: JSON. stringify(data) }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status)
  })
};

export const register = (email, password) =>
  fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  .then((res) => check(res));

// export const register = (data) => {
//   return request({
//     url: '/signup',
//     data,
//   })
// };

export const authorize = (data) => {
  return request({
    url: '/signin',
    data,
  })
}

export const getContent = (token) => {
  return request({
    url: '/users/me',
    method: 'GET',
    token,
  })
}

function check(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Возникла ошибка: ${res.status}`);
}