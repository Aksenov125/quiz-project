import type { User, UserWithoutId, UserWithoutIdAndName, UserWithoutPassword } from './type';

export const registrationFetch = async (
  obj: UserWithoutId,
): Promise<{ message: string; user: User }> => {
  const res = await fetch('/api/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data;
};

export const loginFetch = async (obj: UserWithoutIdAndName): Promise<{ user: User }> => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data;
};


export const userfetch = async ():Promise<UserWithoutPassword> => {
  const res = await fetch('/api/auth')
  const data = await res.json()
  return data
  
}

export const logoutfetch = async ():Promise<{message:string}> => {
  const res = await fetch('/api/auth/logout')
  const data = await res.json()
  return data
  
}
