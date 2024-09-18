import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from '@/components/common';
import { navigationMap } from '@/router/navigation-map';
import styles from './nav-back.module.scss';

const NavBack = () => {
  const navigate = useNavigate();
  const navigateToMain = () => navigate(navigationMap.users);

  return (
    <div className={styles.navback} onClick={navigateToMain}>
      <div className={styles.icon}>
        <ArrowIcon />
      </div>

      <div className={styles.title}>Назад</div>
    </div>
  );
};

export { NavBack };
