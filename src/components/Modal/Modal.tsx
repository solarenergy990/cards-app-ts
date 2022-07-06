import React from 'react';

import s from '../Modal/Modal.module.scss';

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
  children: JSX.Element[] | JSX.Element
}

const Modal = ({ active, setActive, children }: Props) => {
  return (
    <div
      className={active ? `${s.modal} ${s.active}` : s.modal}
      onClick={() => setActive(false)}
    >
      <div className={s.content} onClick={evt => evt.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
