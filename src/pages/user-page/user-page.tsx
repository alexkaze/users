import { useParams } from 'react-router-dom';
import { useGetUserByIdQuery } from '@/api/users-api';
import { RoundedContainer } from '@/components/ui';
import { Title } from '@/components/common';
import { NavBack, Aside, Form } from './components';
import styles from './user-page.module.scss';

const UserPage = () => {
  const { userId } = useParams();
  const { data: user, isLoading, error } = useGetUserByIdQuery(+userId!);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Fetching failed!</h2>;

  return (
    <>
      <NavBack />

      <div className={styles.page}>
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
