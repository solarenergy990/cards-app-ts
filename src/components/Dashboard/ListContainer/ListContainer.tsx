import React from 'react';

import Card from 'react-bootstrap/Card';
import s from './ListContainer.module.scss';

type Props = {
  children: JSX.Element[] | JSX.Element;
  title: string;
};

const ListContainer = ({ children, title }: Props) => {
  return (
    <>
      <div className={s.list}>
        <Card className="text-center">
          <Card.Header>{title}</Card.Header>
          <Card.Body className={s['card-body']}>{children}</Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ListContainer;
