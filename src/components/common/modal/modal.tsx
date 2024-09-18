import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

type Props = {
  onHideModal: () => void;
  children?: React.ReactNode;
};

const portalElement = document.getElementById('modal-root') as HTMLDivElement;

const Modal = ({ onHideModal, children }: Props) => {
  return (
    <>
      {createPortal(
        <div className={styles.backdrop} onClick={onHideModal}></div>,
        portalElement
      )}
      {createPortal(<>{children}</>, portalElement)}
    </>
  );
};

export { Modal };
