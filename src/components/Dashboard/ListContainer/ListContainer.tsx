import React from 'react';
import s from './ListContainer.module.scss';

type Props = {
  children: JSX.Element[] | JSX.Element;
  title: string
};

const ListContainer = ({ children, title }: Props) => {
  return (
    <div className={s.list}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
};

export default ListContainer