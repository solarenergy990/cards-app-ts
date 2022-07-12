import React from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import ListContainer from '../ListContainer/ListContainer';
import s from './InterviewList.module.scss';

import { Droppable, Draggable } from 'react-beautiful-dnd';
// import {IApplicant} from '../../../interfaces/IApplicant.inteface';
import { useAppSelector } from '../../../redux/hooks/hooks';

// interface Props {
//   applicants: IApplicant[];

// }

const InterviewList = () => {
  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });


  return (
    <ListContainer title={'Interview'}>
      <Droppable droppableId="interview" type='CARDS'>
        {(provided) => {
          console.log('provided in droppable :', provided)
          return (
            <ul {...provided.droppableProps} ref={provided.innerRef} >
            {applicantsState.map((applicant, index) => {
              const { id, status } = applicant;

              return (
                <Draggable key={id} draggableId={id}  index={index}>
                  {(provided) => {
                    // console.log('provided in draggable :',provided)
                    return (<li
                      className={s.card}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {status === 'interview' && (
                        <ApplicantCard applicantsData={applicant} />
                      )}
                    </li>)
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
          ) 
        }}
      </Droppable>
    </ListContainer>
  );
};

export default InterviewList;
