import { useState } from 'react';
import s from './Dashboard.module.scss';
import ApplicationList from './ApplicationList/ApplicationList';
import InterviewList from './InterviewList/InterviewList';
import ApprovedList from './ApprovedList/ApprovedList';
import Modal from '../Modal/Modal';
import ApplicantForm from '../ApplicantForm/ApplicantForm';

import { DragDropContext } from 'react-beautiful-dnd';

import actions from '../../redux/app/actions';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
// import { IApplicant } from '../../interfaces/IApplicant.inteface';

const Dashboard = () => {
  const [modalActive, setModalActive] = useState(false);
  // const [applicants, setApplicants] = useState<IApplicant[]>([])

  // const columnsState = useAppSelector(({ columns }) => {
  //   return columns;
  // });
  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });
  const dispatch = useAppDispatch();
  // const columnOrderState = useAppSelector(({ columnOrder }) => {
  //   return columnOrder;
  // });

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
  };

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <ApplicantForm setActive={setModalActive} />
      </Modal>

      <DragDropContext onDragEnd={onDragEnd}>
        <ApplicationList setActive={setModalActive}></ApplicationList>

        <InterviewList />
        <ApprovedList />
      </DragDropContext>
    </>
  );
};

export default Dashboard;
