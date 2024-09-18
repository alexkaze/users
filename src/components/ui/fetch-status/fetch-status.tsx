import styles from './fetch-status.module.scss';

type Props = {
  children: React.ReactNode;
  loader?: boolean;
};

const FetchStatus = ({ children, loader }: Props) => {
  const titleStyle = loader ? `${styles.title} ${styles.loader}` : styles.title;

  return (
    <div className={styles.wrapper}>
      <h2 className={titleStyle}>{children}</h2>
    </div>
  );
};

export { FetchStatus };
