import { useState } from 'react';

import ApplicationList from './ApplicationList/ApplicationList';
import Modal from '../Modal/Modal';
import ApplicantForm from '../ApplicantForm/ApplicantForm';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import actions from '../../redux/app/actions';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { IApplicant } from '../../interfaces/IApplicant.inteface';

const Dashboard = () => {
  const [modalActive, setModalActive] = useState(false);

  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });
  const columnsState = useAppSelector(({ columns }) => {
    return columns;
  });
  const dispatch = useAppDispatch();

  // dnd logick
  const onDragEnd = (result: DropResult): void => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    
    // condition moves cards within one column
    if (source.droppableId === destination.droppableId) {
      // creating new array of applicants
      const applicants = Array.from(
        applicantsState.filter(applicant => {
          return applicant.status === destination.droppableId;
        }),
      );

      const restApplicants = Array.from(
        applicantsState.filter(applicant => {
          return applicant.status !== destination.droppableId;
        }),
      );
      // reordering new array
      const [reorderedApplicant] = applicants.splice(source.index, 1);
      applicants.splice(destination.index, 0, reorderedApplicant);
      // joining reordered applicants with the rest applicants
      const reorderedApplicants = [...applicants, ...restApplicants];
      // dispatching new array to reducer
      dispatch(actions.reorderApplicants(reorderedApplicants));
    }

    // condition moves cards between columns
    if (source.droppableId !== destination.droppableId) {
      const applicants = Array.from(applicantsState);

      const applicantToChangePosition = applicants.find(
        applicant => applicant.id === draggableId,
      );

      if (applicantToChangePosition) {
        const { id, name, number, desiredPosition } = applicantToChangePosition;

        const applicant: IApplicant = {
          id,
          name,
          number,
          desiredPosition,
          status: destination.droppableId,
        };

        const newApplicants = [
          ...applicants.filter(applicant => applicant.id !== id),
          applicant,
        ];

        // reordering new array, finding an object to be reordered
        const [reorderedApplicant] = Array.from(newApplicants).filter(
          applicant => {
            return applicant.id === draggableId;
          },
        );
        // adding an object to the correct position
        newApplicants.splice(destination.index, 0, reorderedApplicant);
        // removing an object from the default position
        newApplicants.pop();

        dispatch(actions.reorderApplicants(newApplicants));
      }
    }
  };

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <ApplicantForm setActive={setModalActive} />
      </Modal>
      <DragDropContext onDragEnd={onDragEnd}>
        {columnsState.map(column => {
          return (
            <ApplicationList
              setActive={setModalActive}
              column={column}
              key={column.id}
            />
          );
        })}
      </DragDropContext>
    </>
  );
};

export default Dashboard;
