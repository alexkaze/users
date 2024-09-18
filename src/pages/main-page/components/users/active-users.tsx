import { useAppSelector } from '@/store/redux-hooks';
import { Title } from '@/components/common';
import { UsersList } from '../users-list';

const ActiveUsers = () => {
  const { users } = useAppSelector(state => state.users);

  return (
    <div>
      <Title>Активные</Title>
      <UsersList data={users} />
    </div>
  );
};

export { ActiveUsers };
