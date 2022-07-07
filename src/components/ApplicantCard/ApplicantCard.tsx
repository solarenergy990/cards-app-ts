import React from 'react';
import { Card, Button } from 'react-bootstrap';

import IApplicant from '../../interfaces/IApplicant.inteface';

import actions from '../../redux/app/actions';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';

type Props = {
  applicantsData: IApplicant;
};

const ApplicantCard = ({ applicantsData }: Props) => {
  const { id, name, number, desiredPosition, status } = applicantsData;

  // brings global state here
  const applicants = useAppSelector(({ applicants }) => {
    return applicants;
  });
  // brings dispatcher here
  const dispatch = useAppDispatch();

  // Changes status for an applicant so that he moves to the interview column
  const handleMoveApplicantToIterview = () => {
    if (status === 'application') {
      const applicantForInterview = applicants.find(
        applicant => id === applicant.id,
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

        // erasing an applicant from previous status column
        dispatch(actions.deleteApplicant(id));
        // setting new array of applicants with changed applicant data
        dispatch(actions.setApplicantToInterview(applicant));
      }
    }
  };

   // Changes status for an applicant so that he moves to the approved column
  const handleMoveApplicantToApproved = () => {
    if (status === 'interview') {
      const applicantForApproval = applicants.find(
        applicant => id === applicant.id,
      );

      if (applicantForApproval) {
        const { id, name, number, desiredPosition } = applicantForApproval;

        const applicant = {
          id,
          name,
          number,
          desiredPosition,
          status: 'approved',
        };

        // erasing an applicant from previous status line
        dispatch(actions.deleteApplicant(id));
        // setting new array of applicants with changed applicant
        dispatch(actions.setApplicantToApproved(applicant));
      }
    }
  };

  const handleDeleteApplicant = () => {
    if (id) {
      dispatch(actions.deleteApplicant(id));
    }
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Candidate</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
          <Card.Text>Candidates desired position: {desiredPosition}</Card.Text>
          <Card.Text>Candidates number: {number}</Card.Text>

          <Button
            type="button"
            variant="danger"
            onClick={handleDeleteApplicant}
          >
            Delete
          </Button>
          {status === 'application' && (
            <Button
              type="button"
              variant="success"
              onClick={handleMoveApplicantToIterview}
            >
              Make appointment
            </Button>
          )}
          {status === 'interview' && (
            <Button
              type="button"
              variant="success"
              onClick={handleMoveApplicantToApproved}
            >
              Approve Candidate
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApplicantCard;
