import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideUser, archiveUser } from '@/store/users-slice';
import { navigationMap } from '@/router/navigation-map';
import styles from './options.module.scss';

type Props = {
  id: number;
};

const ActiveOptions = ({ id }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToUser = () => navigate(`${navigationMap.users}/${id}`);
  const archiveUserHandler = () => dispatch(archiveUser(id));
  const hideUserHandler = () => dispatch(hideUser(id));

  return (
    <>
      <div className={styles.option} onClick={navigateToUser}>
        Редактировать
      </div>

      <div className={styles.option} onClick={archiveUserHandler}>
        Архивировать
      </div>

      <div className={styles.option} onClick={hideUserHandler}>
        Скрыть
      </div>
    </>
  );
};

export { ActiveOptions };
