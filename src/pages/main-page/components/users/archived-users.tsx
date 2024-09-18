import { useAppSelector } from '@/store/redux-hooks';
import { Title } from '@/components/common';
import { UsersList } from '../users-list';

const ArchivedUsers = () => {
  const { archivedUsers } = useAppSelector(state => state.users);

  return (
    <div>
      <Title>Архив</Title>
      <UsersList data={archivedUsers} archived={true} />
    </div>
  );
};

export { ArchivedUsers };
