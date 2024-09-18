import { useState } from 'react';
import styles from './form-item.module.scss';

type Props = {
  title: string;
  value: string;
  id: string;
  type: string;
  onChange: (value: string) => void;
  required?: boolean;
};

const FormItem = ({ title, value, id, type, onChange, required }: Props) => {
  const [inpFocus, setInpFocus] = useState(false);

  let inpStyle = styles.input;
  if (inpFocus) inpStyle = `${inpStyle} ${styles.focus}`;
  if (!value) inpStyle = `${inpStyle} ${styles.error}`;
  const errMsg = value ? '' : 'Поле должно быть заполнено';

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <div className={styles.item}>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>

      <input
        className={inpStyle}
        value={value}
        type={type}
        id={id}
        name={id}
        placeholder={errMsg || ''}
        required={required}
        onChange={changeInputHandler}
        onFocus={() => setInpFocus(true)}
        onBlur={() => setInpFocus(false)}
      />
    </div>
  );
};

export { FormItem };
