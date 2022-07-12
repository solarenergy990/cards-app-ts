import { useState } from 'react';

import ApplicationList from './ApplicationList/ApplicationList';
import InterviewList from './InterviewList/InterviewList';
import ApprovedList from './ApprovedList/ApprovedList';
import Modal from '../Modal/Modal';
import ApplicantForm from '../ApplicantForm/ApplicantForm';

import { DragDropContext } from 'react-beautiful-dnd';

import actions from '../../redux/app/actions';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';

const Dashboard = () => {
  const [modalActive, setModalActive] = useState(false);

  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });
  const dispatch = useAppDispatch();

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    //  creating new array from state
    const applicants = Array.from(applicantsState);
    // reordering new array
    const [reorderedApplicant] = applicants.splice(result.source.index, 1);
    applicants.splice(result.destination.index, 0, reorderedApplicant);
    console.log(result);

    // dispatching new array to reducer
    dispatch(actions.reorderApplicants(applicants));
    console.log(applicantsState);
  };

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <ApplicantForm setActive={setModalActive} />
      </Modal>
      <DragDropContext onDragEnd={onDragEnd}>
        <ApplicationList setActive={setModalActive} />
        <InterviewList />
        <ApprovedList />
      </DragDropContext>
    </>
  );
};

export default Dashboard;
