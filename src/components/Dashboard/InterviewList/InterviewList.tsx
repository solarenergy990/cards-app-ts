import React from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import s from './InterviewList.module.scss';

import IApplicant from '../../../interfaces/IApplicant.inteface';

interface Props {
  applicants: IApplicant[];
}

const InterviewList = ({ applicants }: Props) => {
  return (
    <>
      <div className={s.list}>
        <h2 className={s.title}>Interview</h2>

        <ul>
          {applicants.map(applicant => {
            const { id, status } = applicant;

            return (
              <div className={s.card} key={id}>
                {status === 'interview' && (
                  <ApplicantCard applicantsData={applicant} />
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
