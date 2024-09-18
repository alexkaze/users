import styles from './rounded-container.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const RoundedContainer = ({ children, className }: Props) => {
  const style = className
    ? `${styles.container} ${className}`
    : styles.container;

  return <div className={style}>{children}</div>;
};

export { RoundedContainer };
