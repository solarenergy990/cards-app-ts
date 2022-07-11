import { useState } from 'react';
import s from './Dashboard.module.scss';
import ApplicationList from './ApplicationList/ApplicationList';
import InterviewList from './InterviewList/InterviewList';
import ApprovedList from './ApprovedList/ApprovedList';
import Modal from '../Modal/Modal';
import ApplicantForm from '../ApplicantForm/ApplicantForm';

import { DragDropContext } from 'react-beautiful-dnd';

// import { useAppSelector } from '../../redux/hooks/hooks';
// import { IApplicant } from '../../interfaces/IApplicant.inteface';

const Dashboard = () => {
  const [modalActive, setModalActive] = useState(false);
  // const [applicants, setApplicants] = useState<IApplicant[]>([])

  // const columnsState = useAppSelector(({ columns }) => {
  //   return columns;
  // });
  // const applicantsState = useAppSelector(({ applicants }) => {
  //   return applicants;
  // });
  // const columnOrderState = useAppSelector(({ columnOrder }) => {
  //   return columnOrder;
  // });

  const onDragEnd = (result: any) => {
    // TODO: to do drag and
    console.log(result)
    return result;
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
