import React from 'react';
import s from '../Container/Container.module.scss';

interface Props {
  children: JSX.Element[] | JSX.Element
}


const Container = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};


export default Container;