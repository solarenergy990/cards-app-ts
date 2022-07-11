import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import ListContainer from '../ListContainer/ListContainer';
import s from './ApplicationList.module.scss';
import { Button } from 'react-bootstrap';

import { IApplicant, IColumn } from '../../../interfaces/IApplicant.inteface';

interface Props {
  applicants: IApplicant[];
  column: IColumn;
  setActive: (sctiveStatus: boolean) => void; // not sure yet
}

const ApplicationList = ({ applicants,column, setActive }: Props) => {
  return (
    <ListContainer title={column.title}>
      <ul>
        {applicants.map(applicant => {
          const { id, status } = applicant;
          return (
            <div className={s.card} key={id}>
              {status === 'application' && (
                <ApplicantCard applicantsData={applicant} />
              )}
            </div>
          );
        })}
      </ul>

      <div className={s.button}>
        <Button
          type="button"
          variant="btn btn-success"
          onClick={() => setActive(true)}
        >
          +
        </Button>
      </div>
    </ListContainer>
  );
};

export default ApplicationList;
