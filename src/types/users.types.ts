export interface IUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: { city: string };
  company: { name: string };
}

export interface IUser extends Pick<IUserResponse, 'id' | 'username'> {
  address: string;
  company: string;
}

export interface IUserProfile
  extends Omit<IUserResponse, 'address' | 'company'> {
  address: string;
  company: string;
}
