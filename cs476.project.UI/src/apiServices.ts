import { LoginData } from './types/loginData';
import { RegisterData } from './types/registerData';

const API_URL = import.meta.env.VITE_API_BASE_URL || '';

export const registerAPI = async (data: RegisterData) => {
  const res = await fetch(`${API_URL}/api/users/register`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const resBody = await res.json();
  if (!res.ok) throw new Error(resBody.message || 'Failed to register!');
  return resBody;
};

export const loginAPI = async (data: LoginData) => {
  const res = await fetch(`${API_URL}/api/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const resBody = await res.json();
  if (!res.ok) throw new Error(resBody.message || 'Failed to login!');
  return resBody;
};

export const signoutAPI = async () => {
  const res = await fetch(`${API_URL}/api/users/signout`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Failed to signout!');
  return res.json();
};

export const verifyToken = async () => {
  const res = await fetch(`${API_URL}/api/users/verifytoken`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Failed to verify token!');
  return res.json();
};
