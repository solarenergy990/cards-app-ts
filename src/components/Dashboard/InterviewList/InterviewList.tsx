import React from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import ListContainer from '../ListContainer/ListContainer';
import s from './InterviewList.module.scss';

import IApplicant from '../../../interfaces/IApplicant.inteface';

interface Props {
  applicants: IApplicant[];
}

const InterviewList = ({ applicants }: Props) => {
  return (
    <ListContainer title={'Interview'}>
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
    </ListContainer>
  );
};

export default InterviewList;
