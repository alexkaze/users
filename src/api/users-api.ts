import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserResponse, IUser } from '@/types/users.types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const usersApi = createApi({
  reducerPath: 'usersApi',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: builder => ({
    getUsers: builder.query<IUser[], void>({
      query: () => `users?_start=0&_limit=6`,

      transformResponse: (response: IUserResponse[]) =>
        response.map(user => ({
          ...user,
          address: user.address.city,
          company: user.company.name,
        })),
    }),

    getUserById: builder.query<IUser, number>({
      query: id => `users/${id}`,

      transformResponse: (response: IUserResponse) => ({
        ...response,
        address: response.address.city,
        company: response.company.name,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
