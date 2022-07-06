import React from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import s from './InterviewList.module.scss';

import IApplicant from '../../../interfaces/IApplicant.inteface'

interface Props {
  applicants: IApplicant[];
  onApplicantDelete: (applicantId: string) => void;
  onApproveApplicant: (applicantId: string) => void;
}

const InterviewList = ({
  applicants,
  onApplicantDelete,
  onApproveApplicant,
}: Props) => {
  return (
    <>
      <div className={s.list}>
        <h2 className={s.title}>Interview</h2>

        <ul>
          {applicants.map(applicant => {
            // const { id, name, number, desiredPosition, status } = applicant;
            const { id, status } = applicant;

            return (
              <div className={s.card} key={id}>
                {status === 'interview' && (
                  <ApplicantCard
                    // applicantName={name}
                    // applicantNumber={number}
                    // applicantDesiredPosition={desiredPosition}
                    // onClickRemove={() => onApplicantDelete(id)}
                    // onClickToApprove={() => onApproveApplicant(id)}
                    applicantsData={applicant}
                    onClickRemove={onApplicantDelete}
                    onClickToApprove={onApproveApplicant}
                    // applicantStatus={status}
                  />
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default InterviewList;
