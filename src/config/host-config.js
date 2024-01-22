// 첫글자가 대문자면 리액트 아니면 스크립트 파일

const LOCAL_PORT = '8484';
const API_BASE_URL = 'http://localhost:' + LOCAL_PORT;

const TODO = '/api/todos';
const AUTH = '/api/auth';

export const TODO_URL = API_BASE_URL + TODO;
export const AUTH_URL = API_BASE_URL + AUTH;
