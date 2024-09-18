import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/types/users.types';

interface IInitialState {
  users: IUser[];
  hiddenUsers: IUser[];
  archivedUsers: IUser[];
}

const initialState: IInitialState = {
  users: [],
  hiddenUsers: [],
  archivedUsers: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },

    archiveUser: (state, action: PayloadAction<number>) => {
      const user = state.users.find(
        user => user.id === action.payload
      ) as IUser;

      state.users = state.users.filter(user => user.id !== action.payload);

      state.archivedUsers.push(user);
    },

    hideUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },

    returnUser: (state, action: PayloadAction<number>) => {
      const user = state.archivedUsers.find(
        user => user.id === action.payload
      ) as IUser;

      state.archivedUsers = state.archivedUsers.filter(
        user => user.id !== action.payload
      );

      state.users.push(user);
    },
  },
});

export const { setUsers, hideUser, archiveUser, returnUser } =
  usersSlice.actions;

export default usersSlice.reducer;
