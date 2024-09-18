export interface IUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: { city: string };
  company: { name: string };
}

export interface IUser extends Omit<IUserResponse, 'address' | 'company'> {
  address: string;
  company: string;
}
