import { useDispatch } from 'react-redux';
import { returnUser } from '@/store/users-slice';
import styles from './options.module.scss';

type Props = {
  id: number;
};

const ArchivedOptions = ({ id }: Props) => {
  const dispatch = useDispatch();
  const returnUserHandler = () => dispatch(returnUser(id));

  return (
    <div className={styles.option} onClick={returnUserHandler}>
      Активировать
    </div>
  );
};

export { ArchivedOptions };
