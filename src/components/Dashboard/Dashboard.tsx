import { useState } from 'react';
import Column from './ApplicationList/ApplicationList';
// import InterviewList from './InterviewList/InterviewList';
// import ApprovedList from './ApprovedList/ApprovedList';
import Modal from '../Modal/Modal';
import ApplicantForm from '../ApplicantForm/ApplicantForm';

import { useAppSelector } from '../../redux/hooks/hooks';
// import { IApplicant } from '../../interfaces/IApplicant.inteface';

const Dashboard = () => {
  const [modalActive, setModalActive] = useState(false);
  // const [applicants, setApplicants] = useState<IApplicant[]>([])

  const columnsState = useAppSelector(({ columns }) => {
    return columns;
  });
  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });
  const columnOrderState = useAppSelector(({ columnOrder }) => {
    return columnOrder;
  });

  

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <ApplicantForm setActive={setModalActive} />
      </Modal>
      <ul>
        {columnOrderState.map(columnId => {
          const column = columnsState[columnId];
          const applicants = column.applicantIds.map(
            applicantId => applicantsState[applicantId],
          );
          return (
            <Column
              key={column.id}
              column={column}
              applicants={applicants}
              setActive={setModalActive}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Dashboard;
