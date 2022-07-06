import React from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import ListContainer from '../ListContainer/ListContainer';
import s from './ApprovedList.module.scss';

import IApplicant from '../../../interfaces/IApplicant.inteface';

type Props = {
  applicants: IApplicant[];
};

const ApprovedList = ({ applicants }: Props) => {
  return (
    <ListContainer title={'Approved'}>
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
    </ListContainer>
  );
};

export default ApprovedList;
