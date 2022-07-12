import { useState } from 'react';

import ApplicationList from './ApplicationList/ApplicationList';
// import InterviewList from './InterviewList/InterviewList';
// import ApprovedList from './ApprovedList/ApprovedList';
import Modal from '../Modal/Modal';
import ApplicantForm from '../ApplicantForm/ApplicantForm';

import { DragDropContext } from 'react-beautiful-dnd';

import actions from '../../redux/app/actions';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { IApplicant } from '../../interfaces/IApplicant.inteface';

const Dashboard = () => {
  const [modalActive, setModalActive] = useState(false);

  const applicantsState: IApplicant[] = useAppSelector(({ applicants }) => {
    return applicants;
  });
  const columnsState = useAppSelector(({ columns }) => {
    return columns;
  });
  const dispatch = useAppDispatch();

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    // console.log(result);
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // condition moves cards in one column
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
      // console.log([reorderedApplicant]);
      // joining reordered applicants with the rest applicants
      const reorderedApplicants = [...applicants, ...restApplicants];
      // dispatching new array to reducer
      dispatch(actions.reorderApplicants(reorderedApplicants));
      // console.log(applicantsState);
    }

    if (source.droppableId !== destination.droppableId) {
      console.log(source.droppableId !== destination.droppableId);
      const applicants = Array.from(applicantsState);

      console.log(applicants);
      const applicantToChangePosition = applicants.find(
        applicant => applicant.id === draggableId,
      );

      if (
        applicantToChangePosition 
        
      ) {
        const { id, name, number, desiredPosition } = applicantToChangePosition;

        const applicant = {
          id,
          name,
          number,
          desiredPosition,
          status: destination.droppableId,
        };

        console.log(applicant);
        dispatch(actions.deleteApplicant(id));
        dispatch(actions.setApplicantToInterview(applicant));
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
        {/* <ApplicationList setActive={setModalActive} /> */}
        {/* <InterviewList /> */}
        {/* <ApprovedList /> */}
      </DragDropContext>
    </>
  );
};

export default Dashboard;
