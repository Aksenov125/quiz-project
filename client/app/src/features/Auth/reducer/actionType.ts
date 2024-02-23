import type { User, UserWithoutPassword } from '../type';

export type Action = 
{ type: 'auth/registration'; payload: { message: string; user: UserWithoutPassword } }
| { type: 'auth/login'; payload: { message: string; user: UserWithoutPassword } }
| { type: 'auth/user', payload: {user: UserWithoutPassword}}
| { type: 'score/user', payload: number}


