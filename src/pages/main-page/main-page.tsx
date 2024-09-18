import { useEffect } from 'react';
import { useAppDispatch } from '@/store/redux-hooks';
import { useGetUsersQuery } from '@/api/users-api';
import { setUsers } from '@/store/users-slice';
import { ActiveUsers, ArchivedUsers } from '@/pages/main-page/components/users';
import styles from './main-page.module.scss';

const MainPage = () => {
  const { data: fetchedUsers = [], isLoading, error } = useGetUsersQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fetchedUsers.length > 0) {
      dispatch(setUsers(fetchedUsers));
    }
  }, [fetchedUsers, dispatch]);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Fetching failed!</h2>;

  return (
    <div className={styles.users}>
      <ActiveUsers />
      <ArchivedUsers />
    </div>
  );
};

export { MainPage };
