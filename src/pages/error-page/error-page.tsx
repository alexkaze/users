import styles from './error.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Упс!</h1>
        <h2 className={styles.subtitle}>404. Страница не найдена</h2>
        <p className={styles.text}>
          Вероятно, страница была перенесена или вы ввели некорректный адрес
          страницы.
        </p>
      </div>
    </div>
  );
};

export { ErrorPage };
