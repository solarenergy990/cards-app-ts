import React from 'react';
import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import ListContainer from '../ListContainer/ListContainer';
import s from './ApprovedList.module.scss';

// import {IApplicant} from '../../../interfaces/IApplicant.inteface';

import { useAppSelector } from '../../../redux/hooks/hooks';

// type Props = {
//   applicants: IApplicant[];
  
// };

const ApprovedList = () => {
  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });
  

  return (
    <ListContainer title={'Approved'}>
      <ul>
        {applicantsState.map(applicant => {
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
