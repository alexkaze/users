import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/redux-hooks';
import { useGetUsersQuery } from '@/api/users-api';
import { setUsers } from '@/store/users-slice';
import { ActiveUsers, ArchivedUsers } from '@/pages/main-page/components/users';
import { FetchStatus } from '@/components/ui';
import styles from './main-page.module.scss';

const MainPage = () => {
  const { users } = useAppSelector(state => state.users);
  const { data: fetchedUsers = [], isLoading, error } = useGetUsersQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fetchedUsers.length > 0 && users.length === 0) {
      dispatch(setUsers(fetchedUsers));
    }
  }, [fetchedUsers, dispatch, users]);

  console.log(users);

  if (isLoading)
    return <FetchStatus loader={true}>Получение данных</FetchStatus>;

  if (error) return <FetchStatus>Не удалось получить данные!</FetchStatus>;

  return (
    <div className={styles.users}>
      <ActiveUsers />
      <ArchivedUsers />
    </div>
  );
};

export { MainPage };
