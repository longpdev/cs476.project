import { RegisterData } from "./types/registerData";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const registerAPI = async (data: RegisterData) => {
  const res = await fetch(`${API_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resBody = await res.json();
  if (!res.ok) throw new Error(resBody.message);
  return resBody;
};
