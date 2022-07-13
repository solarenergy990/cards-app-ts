import React, { useEffect, useState } from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import ListContainer from '../ListContainer/ListContainer';
import s from './ApplicationList.module.scss';
import { Button } from 'react-bootstrap';

import { Droppable, Draggable } from 'react-beautiful-dnd';

import { useAppSelector } from '../../../redux/hooks/hooks';

import { IColumn, IApplicant } from '../../../interfaces/IApplicant.inteface';

interface Props {
  column: IColumn;
  setActive: (activeStatus: boolean) => void; // not sure yet
}

const ApplicationList = ({ setActive, column }: Props) => {
  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });

  const filteredState = Array.from(applicantsState).filter(applicant => applicant.status === column.id)

  
  return (
    <ListContainer title={column.title}>
      <Droppable droppableId={column.id}>
        {provided => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {filteredState.map((applicant, index) => {
              const { id } = applicant;
              // console.log('droppable provided',provided)
              return (
                <Draggable draggableId={id} key={id} index={index}>
                  {provided => {
                    // console.log('draggableprovided :', provided)
                    return (
                      <li
                        className={s.card}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <ApplicantCard applicantsData={applicant} />
                      </li>
                    )
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <div className={s.button}>
        {column.id === 'application' && (
          <Button
            type="button"
            variant="btn btn-success"
            onClick={() => setActive(true)}
          >
            +
          </Button>
        )}
      </div>
    </ListContainer>
  );
};

export default ApplicationList;
