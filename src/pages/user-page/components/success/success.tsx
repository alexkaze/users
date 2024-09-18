import { RoundedContainer } from '@/components/ui';
import { CrossIcon, SuccessIcon } from '@/components/common';
import styles from './success.module.scss';

type Props = {
  onHideModal: () => void;
};

const Success = ({ onHideModal }: Props) => {
  return (
    <RoundedContainer className={styles.container}>
      <div className={styles.cross} onClick={onHideModal}>
        <CrossIcon />
      </div>

      <SuccessIcon />
      <div className={styles.title}>Изменения сохранены!</div>
    </RoundedContainer>
  );
};

export { Success };
