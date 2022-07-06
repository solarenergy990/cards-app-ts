import { useState } from 'react';
import ApplicationList from './ApplicationList/ApplicationList';
import InterviewList from './InterviewList/InterviewList';
import ApprovedList from './ApprovedList/ApprovedList';
import Modal from '../Modal/Modal';
import ApplicantForm from '../ApplicantForm/ApplicantForm';

// import shortid from 'shortid';

// import initialApplicants from '../../components/Dashboard/applicants.json';

import IApplicant from '../../interfaces/IApplicant.inteface';
import {  useAppSelector } from '../../redux/hooks/hooks';



const Dashboard = () => {
  // const [applicants, setApplicants] = useState<IApplicant[]>(initialApplicants);
  const [modalActive, setModalActive] = useState(false);

  const applicants = useAppSelector(({applicants}) => {
    return applicants;
  });

  // const addApplicant = (data: IApplicant) => {
  //   const { name, number, desiredPosition, status } = data;

  //   const applicant = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //     desiredPosition,
  //     status,
  //   };

  //   const checkedApplicantsNames = applicants.map(applicant => {
  //     return applicant.name.toLowerCase();
  //   });

  //   if (!checkedApplicantsNames.includes(name.toLowerCase())) {
  //     setApplicants(prevApplicants => {
  //       return [...prevApplicants, applicant];
  //     });
  //   } else {
  //     alert(`${name} is already in list`);
  //   }
  // };

  // const deleteApplicant = (applicantId: string) => {
  //   setApplicants(applicants.filter(applicant => applicant.id !== applicantId));
  // };

  const makeApplicantAppointment = (applicantId: string) => {
    const applicantForInterview = applicants.find(
      applicant => applicantId === applicant.id,
    );

    if (applicantForInterview) {
      const { id, name, number, desiredPosition } = applicantForInterview;

      const applicant = {
        id,
        name,
        number,
        desiredPosition,
        status: 'interview',
      };

      // erasing an applicant from previous status line
      setApplicants(
        applicants.filter(applicant => applicant.id !== applicantId),
      );

      // setting new array of applicants with changed applicant
      setApplicants(prevApplicants => {
        // console.log(prevApplicants)
        return [...prevApplicants, applicant];
      });
    }

    // temporary
    // if (applicantForInterview) {
    //   applicantForInterview.status = 'interview';
    // }
  };

  // const approveApplicant = (applicantId: string) => {
  //   const applicantForApproval = applicants.find(
  //     applicant => applicantId === applicant.id,
  //   );

  //   if (applicantForApproval) {
  //     const { id, name, number, desiredPosition } = applicantForApproval;

  //     const applicant = {
  //       id,
  //       name,
  //       number,
  //       desiredPosition,
  //       status: 'approved',
  //     };

  //     // erasing an applicant from previous status line
  //     setApplicants(
  //       applicants.filter(applicant => applicant.id !== applicantId),
  //     );

  //     // setting new array of applicants with changed applicant
  //     setApplicants(prevApplicants => {
  //       // console.log(prevApplicants)
  //       return [...prevApplicants, applicant];
  //     });
  //   }

  //   // temporary
  //   // if (applicantForApproval) {
  //   //   applicantForApproval.status = 'approved';
  //   // }
  //   // setApplicants(prevApplicants => {
  //   //   // console.log(prevApplicants)
  //   //   return [...prevApplicants];
  //   // });
  // };

  const getVisibleApplicants = () => {
    return applicants.filter(applicant => applicant.name.toLowerCase());
  };

  const visibleApplicants = getVisibleApplicants();

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <ApplicantForm 
        // onSubmit={addApplicant} 
        setActive={setModalActive} />
      </Modal>
      <ApplicationList
        applicants={visibleApplicants}
        // onApplicantDelete={deleteApplicant}
        setActive={setModalActive}
        onApplicantToInterview={makeApplicantAppointment}
      />
      <InterviewList
        applicants={visibleApplicants}
        onApplicantDelete={deleteApplicant}
        onApproveApplicant={approveApplicant}
      />

      <ApprovedList
        applicants={visibleApplicants}
        onApplicantDelete={deleteApplicant}
      />
    </>
  );
};

export default Dashboard;
