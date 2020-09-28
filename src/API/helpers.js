const TOKEN_KEY = 'CHP_TOKEN';
const USER_KEY = 'USER';
const VALUE = {};

export function setToken(valor) {
  localStorage.setItem(TOKEN_KEY, valor);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function setUser(valor) {
  localStorage.setItem(USER_KEY, valor);
}
export function getUser() {
  return localStorage.getItem(USER_KEY);
}
