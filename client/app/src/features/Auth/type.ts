export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  score: number;
};

export type UserWithoutId = Omit<User, 'id'>;
export type UserWithoutIdAndName = Omit<UserWithoutId, 'name'>;
export type UserWithoutPassword = Omit<User, 'password'>;
