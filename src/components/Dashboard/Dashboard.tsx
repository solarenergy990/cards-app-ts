import { useState } from 'react';
import ApplicationList from './ApplicationList/ApplicationList';
import InterviewList from './InterviewList/InterviewList';
import ApprovedList from './ApprovedList/ApprovedList';
import Modal from '../Modal/Modal';
import ApplicantForm from '../ApplicantForm/ApplicantForm';

import { useAppSelector } from '../../redux/hooks/hooks';

const Dashboard = () => {
  const [modalActive, setModalActive] = useState(false);

  const applicants = useAppSelector(({ applicants }) => {
    return applicants;
  });

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <ApplicantForm setActive={setModalActive} />
      </Modal>
      <ApplicationList applicants={applicants} setActive={setModalActive} />
      <InterviewList applicants={applicants} />

      <ApprovedList applicants={applicants} />
    </>
  );
};

export default Dashboard;
