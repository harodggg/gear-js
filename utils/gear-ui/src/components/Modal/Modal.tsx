import clsx from 'clsx';
import { ReactNode, useEffect, useState, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button/Button';
import { ReactComponent as xSVG } from './images/x.svg';
import styles from './Modal.module.scss';

type Props = {
  heading: string;
  close: () => void;
  children?: ReactNode;
  className?: string;
  size?: 'normal' | 'large';
};

const Modal = ({ heading, close, children, className, size = 'normal' }: Props) => {
  const [root, setRoot] = useState<HTMLDivElement>();

  const modalClassName = clsx(styles.modal, styles[size]);
  const bodyClassName = clsx(styles.body, className);

  const handleOverlayClick = ({ target, currentTarget }: MouseEvent) => {
    if (target === currentTarget) close();
  };

  useEffect(() => {
    const div = document.createElement('div');
    div.id = 'modal-root';
    document.body.appendChild(div);
    setRoot(div);

    return () => {
      document.body.removeChild(div);
    };
  }, []);

  const component = (
    <div className={styles.overlay} onClick={handleOverlayClick} data-testid="overlay">
      <div className={modalClassName} data-testid="modal">
        <header className={styles.header}>
          <h3 className={styles.heading}>{heading}</h3>
          <Button icon={xSVG} color="transparent" onClick={close} />
        </header>
        {children && (
          <div className={bodyClassName} data-testid="body">
            {children}
          </div>
        )}
      </div>
    </div>
  );

  return root ? createPortal(component, root) : null;
};

export { Modal, styles as modalStyles };
export type { Props as ModalProps };
