import { useParams } from 'react-router-dom';
import { useGetUserByIdQuery } from '@/api/users-api';
import { FetchStatus, RoundedContainer } from '@/components/ui';
import { Title } from '@/components/common';
import { NavBack, Aside, Form } from './components';
import styles from './user-page.module.scss';

const UserPage = () => {
  const { userId } = useParams();
  const { data: user, isLoading, error } = useGetUserByIdQuery(+userId!);

  if (isLoading)
    return <FetchStatus loader={true}>Получение данных</FetchStatus>;

  if (error) return <FetchStatus>Не удалось получить данные!</FetchStatus>;

  return (
    <>
      <NavBack />

      <div className={styles.container}>
        <aside>
          <RoundedContainer className={styles.aside}>
            <Aside />
          </RoundedContainer>
        </aside>

        <RoundedContainer className={styles.info}>
          <Title>Данные профиля</Title>
          <Form data={user!} />
        </RoundedContainer>
      </div>
    </>
  );
};

export { UserPage };
