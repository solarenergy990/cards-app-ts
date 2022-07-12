import React from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import ListContainer from '../ListContainer/ListContainer';
import s from './ApprovedList.module.scss';

import { Droppable, Draggable } from 'react-beautiful-dnd';

import { useAppSelector } from '../../../redux/hooks/hooks';

const ApprovedList = () => {
  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });


  return (
    <ListContainer title={'Approved'}>
      <Droppable droppableId="approved">
        {provided => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {applicantsState.map((applicant, index) => {
              const { id, status } = applicant;

              return (
                <Draggable draggableId={id} key={id} index={index}>
                  {provided => (
                    <li
                      className={s.card}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {status === 'approved' && (
                        <ApplicantCard applicantsData={applicant} />
                      )}
                    </li>
                  )}
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

export default ApprovedList;
