import React from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import s from './ApprovedList.module.scss';

import IApplicant from '../../../interfaces/IApplicant.inteface';

type Props = {
  applicants: IApplicant[];
};

const ApprovedList = ({ applicants }: Props) => {
  return (
    <>
      <div className={s.list}>
        <h2 className={s.title}>Approved</h2>

        <ul>
          {applicants.map(applicant => {
            const { id, status } = applicant;

            return (
              <div className={s.card} key={id}>
                {status === 'approved' && (
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

export default ApprovedList;
