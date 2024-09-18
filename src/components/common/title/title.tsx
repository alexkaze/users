import styles from './title.module.scss';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export { Title };
