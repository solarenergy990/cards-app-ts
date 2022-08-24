import React from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import ListContainer from '../ListContainer/ListContainer';
import s from './ApplicationList.module.scss';
// import { Button } from 'react-bootstrap';

import { Droppable, Draggable } from 'react-beautiful-dnd';

import { useAppSelector } from '../../../redux/hooks/hooks';

import { IColumn } from '../../../interfaces/IApplicant.inteface';

interface Props {
  column: IColumn;
}

const ApplicationList = ({ column }: Props) => {
  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });

  const filteredState = Array.from(applicantsState).filter(
    applicant => applicant.status === column.id,
  );

  return (
    <ListContainer title={column.title}>
      <Droppable droppableId={column.id}>
        {provided => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {filteredState.map((applicant, index) => {
              const { id } = applicant;
              return (
                <Draggable draggableId={id} key={id} index={index}>
                  {provided => {
                    return (
                      <li
                        className={s.card}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <ApplicantCard applicantsData={applicant} />
                      </li>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </ListContainer>
  );
};

export default ApplicationList;
