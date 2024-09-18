import image from '@/assets/user.webp';
import styles from './user-image.module.scss';

type Props = {
  className?: string;
};

const UserImage = ({ className }: Props) => {
  const containerStyle = className
    ? `${styles.container} ${className}`
    : styles.container;

  return (
    <div className={containerStyle}>
      <img className={styles.img} src={image} alt="User photo" />
    </div>
  );
};

export { UserImage };
