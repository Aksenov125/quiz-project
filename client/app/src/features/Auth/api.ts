import type { User, UserWithoutId } from './type';

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
