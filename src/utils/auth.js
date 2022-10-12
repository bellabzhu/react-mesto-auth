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

export const register = (username, password, email) => {
  return request({
    url: '/auth/local/register'
  })
};

export const authorize = (identifier, password) => {
  return request({
    url: '/auth/local',
    data: { identifier, password},
  })
}

export const getContent = (token) => {
  return requesr({
    url: '/users/me',
    method: 'GET',
    token,
  })
}