const BASE_URL = 'https://auth.nomoreparties.co';

const handleError = res => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка № ${res.status} – ${res.status}`);
}

const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
    .then(handleError)
}