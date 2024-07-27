import { LoginData } from './types/loginData';
import { RegisterData } from './types/registerData';
import { PetType } from './Pages/FindAPet/FindAPet';
import { ApplicationData } from './types/applicationData';
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

export const addPetApi = async (petFormData: FormData) => {
  const res = await fetch(`${API_URL}/api/pets/addpet`, {
    method: 'POST',
    credentials: 'include',
    body: petFormData,
  });

  if (!res.ok) throw new Error('Failed to add pet!');
  return res.json();
};

export const getAllPets = async (): Promise<PetType[]> => {
  const res = await fetch(`${API_URL}/api/pets`);

  if (!res.ok) throw new Error('Failed to get all pets');
  return res.json();
};

export const fetchPetById = async (id: string): Promise<PetType> => {
  const res = await fetch(`${API_URL}/api/pets/getpet/${id}`);
  if (!res.ok) throw new Error('Failed to get pet by id');
  return res.json();
};

export const updatePetById = async (petFormData: FormData) => {
  const res = await fetch(
    `${API_URL}/api/pets/updatepet/${petFormData.get('_id')}`,
    {
      method: 'PUT',
      credentials: 'include',
      body: petFormData,
    }
  );

  if (!res.ok) throw new Error('Failed to update pet!');
  return res.json();
};

export const deletePetById = async (id: string) => {
  const res = await fetch(`${API_URL}/api/pets/deletePet/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Failed to delete pet by Id!');
  return res.json();
};

export const getAllUser = async () => {
  const res = await fetch(`${API_URL}/api/users/getalluser`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Failed to fetch user!');
  return res.json();
};

//update user
export const updateUser = async (props: {
  id: string;
  userDetail: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
}) => {
  const response = await fetch(`${API_URL}/api/users/updateuser/${props.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(props.userDetail),
  });
  return response.json;
};

//delete user
// export const deleteUser = async (id: string) => {
//   const response = await fetch(`${API_URL}/api/users/${id}`, {
//     method: 'DELETE',
//   });
//   if (!response.ok) throw new Error('Failed to delete user!');
//   return response.json();
// };

//blocked the user

export const blockUser = async (props: { id: string; blocked: boolean }) => {
  const response = await fetch(`${API_URL}/api/users/blocked/${props.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({ blocked: props.blocked }),
  });
  return response.json;
};

export const applicationAPI = async (data: ApplicationData) => {
  const res = await fetch(`${API_URL}/api/applications/addApplication`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const resBody = await res.json();
  if (!res.ok) throw new Error(resBody.message || 'Failed to submit request!');
  return resBody;
};

export const getAllApplications = async () => {
  const res = await fetch(`${API_URL}/api/applications/getallapplications`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Failed to fetch application!');
  return res.json();
};

export const getUserById = async (id: string) => {
  const res = await fetch(`${API_URL}/api/users/getUserById/${id}`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Failed to fetch user!');
  return res.json();
};

export const getApplicationById = async (id: string) => {
  const res = await fetch(`${API_URL}/api/applications/get-application/${id}`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Failed to fetch application!');
  return res.json();
};

export const updateApplicationStatus = async ({
  id,
  status,
}: {
  id: string;
  status: string;
}) => {
  const res = await fetch(
    `${API_URL}/api/applications/updateApplicationStatus`,
    {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, status }),
    }
  );

  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(
      errorResponse.message || 'Failed to update application status!'
    );
  }

  return res.json();
};

export const updatePetStatusById = async ({
  id,
  isAdopted,
  ownerId,
}: {
  id: string;
  isAdopted: boolean;
  ownerId: string;
}) => {
  const res = await fetch(`${API_URL}/api/pets/updatePetOwer`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, isAdopted, ownerId }),
  });

  if (!res.ok) throw new Error('Failed to update pet adopted status!');

  return res.json();
};

export const updateUserPetIds = async ({
  id,
  adoptedPetId,
}: {
  id: string;
  adoptedPetId: string;
}) => {
  const res = await fetch(`${API_URL}/api/users/updateUserPetIds`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, adoptedPetId }),
  });
  if (!res.ok) throw new Error('Failed to update pet list for user');
  return res.json();
};
