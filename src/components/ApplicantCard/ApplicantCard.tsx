import React from 'react';
import { Card, Button } from 'react-bootstrap';

import IApplicant from '../../interfaces/IApplicant.inteface';

type Props = {
  applicantsData: IApplicant;
  onClickRemove: (applicantId: string) => void;
  onClickToInterview?: (applicantId: string) => void;
  onClickToApprove?: (applicantId: string) => void;
};

const ApplicantCard = ({
  applicantsData,
  onClickRemove,
  onClickToInterview,
  onClickToApprove,
}: Props) => {
  const { id, name, number, desiredPosition, status } = applicantsData;

  const handleMoveApplicantToIterview = () => {
    if (onClickToInterview && id) {
      onClickToInterview(id);
    }
  };

  const handleMoveApplicantToApproved = () => {
    if (onClickToApprove && id) {
      onClickToApprove(id);
    }
  };

  const handleDeleteApplicant = () => {
    if (id) {
      onClickRemove(id);
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
