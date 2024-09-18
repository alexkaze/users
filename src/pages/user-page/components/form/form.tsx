import { useState } from 'react';
import { IUserProfile } from '@/types/users.types';
import { FormItem } from '../form-item';
import { Modal } from '@/components/common';
import { Success } from '../success';
import styles from './form.module.scss';

type Props = {
  data: IUserProfile;
};

const Form = ({ data }: Props) => {
  const { name, username, email, address, phone, company } = data;

  const [timer, setTimer] = useState<null | NodeJS.Timeout>(null);
  const [modal, setModal] = useState(false);

  const [enteredName, setName] = useState(name);
  const [enteredUsername, setUsername] = useState(username);
  const [enteredEmail, setEmail] = useState(email);
  const [enteredAddress, setAddress] = useState(address);
  const [enteredPhone, setPhone] = useState(phone);
  const [enteredCompany, setCompany] = useState(company);

  const hideModal = () => {
    clearTimeout(timer!);
    setTimer(null);
    setModal(false);
  };

  const submitFormHandler = () => {
    if (
      !enteredName ||
      !enteredUsername ||
      !enteredEmail ||
      !enteredAddress ||
      !enteredPhone ||
      !enteredCompany
    )
      return;

    setModal(true);

    if (!timer) {
      const timerId = setTimeout(() => {
        setModal(false);
        setTimer(null);
      }, 4000);

      setTimer(timerId);
    }
  };

  return (
    <form className={styles.form} action="/" method="POST">
      <FormItem
        title="Имя"
        value={enteredName}
        id="name"
        type='"text"'
        onChange={setName}
        required
      />

      <FormItem
        title="Никнейм"
        value={enteredUsername}
        id="nickname"
        type='"text"'
        onChange={setUsername}
        required
      />

      <FormItem
        title="Почта"
        value={enteredEmail}
        id="email"
        type='"email"'
        onChange={setEmail}
        required
      />

      <FormItem
        title="Город"
        value={enteredAddress}
        id="city"
        type='"text"'
        onChange={setAddress}
        required
      />

      <FormItem
        title="Телефон"
        value={enteredPhone}
        id="phone"
        type='"tel"'
        onChange={setPhone}
        required
      />

      <FormItem
        title="Название Компании"
        value={enteredCompany}
        id="company"
        type='"text"'
        onChange={setCompany}
        required
      />

      <div className={styles['btn-wrapper']}>
        <button
          className={styles.btn}
          type="button"
          onClick={submitFormHandler}
        >
          Сохранить
        </button>
      </div>

      {modal && (
        <Modal onHideModal={hideModal}>
          <Success onHideModal={hideModal} />
        </Modal>
      )}
    </form>
  );
};

export { Form };
