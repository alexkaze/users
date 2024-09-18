import { IUser } from '@/types/users.types';
import { User } from '../user';
import styles from './users-list.module.scss';

type Props = {
  data: IUser[];
  archived?: boolean;
};

const UsersList = ({ data, archived }: Props) => {
  return (
    <ul className={styles.users}>
      {data.map(user => (
        <User
          key={user.id}
          id={user.id}
          username={user.username}
          address={user.address}
          company={user.company}
          archived={archived}
        />
      ))}
    </ul>
  );
};

export { UsersList };
