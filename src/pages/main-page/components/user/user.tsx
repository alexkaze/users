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
  const userStyle = archived
    ? `${styles.user} ${styles.archived}`
    : styles.user;

  const formatText = (text: string) => text.split(/[\s_-]/)[0];

  return (
    <RoundedContainer>
      <li className={userStyle}>
        <UserImage className={styles['user__img']} />

        <div className={styles['user__info']}>
          <div className={styles['user__username']}>{formatText(username)}</div>
          <div className={styles['user__company']}>{formatText(company)}</div>
          <div className={styles['user__address']}>{formatText(address)}</div>
        </div>

        <Options id={id} archived={archived} />
      </li>
    </RoundedContainer>
  );
};

export { User };
