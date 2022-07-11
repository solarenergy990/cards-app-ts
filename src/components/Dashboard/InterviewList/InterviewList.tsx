import React from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import ListContainer from '../ListContainer/ListContainer';
import s from './InterviewList.module.scss';

// import {IApplicant} from '../../../interfaces/IApplicant.inteface';
import { useAppSelector } from '../../../redux/hooks/hooks';

// interface Props {
//   applicants: IApplicant[];
 
// }

const InterviewList = () => {

  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });
  return (
    <ListContainer title={'Interview'}>
      <ul>
        {applicantsState.map(applicant => {
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
