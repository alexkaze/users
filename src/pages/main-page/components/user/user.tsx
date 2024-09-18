import { UserImage } from '@/components/ui';
import { RoundedContainer } from '@/components/ui';
import { Options } from '../options';
import styles from './user.module.scss';

type Props = {
  id: number;
  username: string;
  address: string;
  company: string;
  archived?: boolean;
};

const User = ({ id, username, address, company, archived }: Props) => {
  return (
    <RoundedContainer>
      <li className={styles.user}>
        <UserImage className={styles['user__img']} />

        <div className={styles['user__info']}>
          <div className={styles['user__username']}>{username}</div>
          <div className={styles['user__company']}>{company}</div>
          <div className={styles['user__address']}>{address}</div>
        </div>

        <Options id={id} archived={archived} />
      </li>
    </RoundedContainer>
  );
};

export { User };
