import { UserImage } from '@/components/ui';
import styles from './aside.module.scss';

const Aside = () => {
  return (
    <>
      <UserImage className={styles.img} />

      <div className={styles.categoris}>
        <div className={styles.category}>Данные профиля</div>
        <div className={styles.category}>Рабочее пространство</div>
        <div className={styles.category}>Приватность</div>
        <div className={styles.category}>Безопасность</div>
      </div>
    </>
  );
};

export { Aside };
