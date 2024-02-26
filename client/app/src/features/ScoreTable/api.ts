import type { User } from '../Auth/type';

async function scoreFetch(): Promise<User> {
  const res = await fetch('api/score/');
  const data = await res.json();
  return data.users;
}

export default scoreFetch;
