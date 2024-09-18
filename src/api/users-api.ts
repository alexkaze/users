import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserResponse, IUser, IUserProfile } from '@/types/users.types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const usersApi = createApi({
  reducerPath: 'usersApi',

  tagTypes: ['Users'],

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: builder => ({
    getUsers: builder.query<IUser[], void>({
      query: () => `users?_start=0&_limit=6`,

      transformResponse: (response: IUserResponse[]) =>
        response.map(user => ({
          id: user.id,
          username: user.username,
          address: user.address.city,
          company: user.company.name,
        })),

      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Users' as const, id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),

    getUserById: builder.query<IUserProfile, number>({
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
