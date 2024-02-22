import type { User } from '../type';

export type Action = { type: 'auth/registration'; payload: { message: string; user: User } };
