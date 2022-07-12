import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import ListContainer from '../ListContainer/ListContainer';
import s from './ApplicationList.module.scss';
import { Button } from 'react-bootstrap';

import { Droppable, Draggable } from 'react-beautiful-dnd';

import { useAppSelector } from '../../../redux/hooks/hooks';

interface Props {
  setActive: (activeStatus: boolean) => void; // not sure yet
}

const ApplicationList = ({ setActive}: Props) => {
  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });

  // console.log(applicants)
  return (
    <ListContainer title={'Application'}>
      <Droppable droppableId="application">
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
                      {status === 'application' && (
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

      <div className={s.button}>
        <Button
          type="button"
          variant="btn btn-success"
          onClick={() => setActive(true)}
        >
          +
        </Button>
      </div>
    </ListContainer>
  );
};

export default ApplicationList;
