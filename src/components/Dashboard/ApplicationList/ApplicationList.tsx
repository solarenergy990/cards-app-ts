import ApplicantCard from '../../ApplicantCard/ApplicantCard';
import s from './ApplicationList.module.scss';
import { Button } from 'react-bootstrap';

import IApplicant from '../../../interfaces/IApplicant.inteface'

// applicant object looks like this
//     "id": "id-1",
//     "name": "Anna Rosenfeld",
//     "desiredPosition": "manager",
//     "number": "459-12-56",
//     "status": "interview"




interface Props {
  applicants: IApplicant[];
  // onApplicantDelete: (applicantId: string) => void;
  setActive: (sctiveStatus: boolean) => void; // not sure yet
  // onApplicantToInterview: (applicantId: string) => void;
}

const ApplicationList = ({
  applicants,
  // onApplicantDelete,
  setActive,
  // onApplicantToInterview,
}: Props) => {
  return (
    <>
      <div className={s.list}>
        <h2 className={s.title}>Applications</h2>

        <ul>
          {applicants.map(applicant => {
            const { id, status } = applicant;

            return (
              <div className={s.card} key={id}>
                {status === 'application' && (
                  <ApplicantCard
                    // applicantName={name}
                    // applicantNumber={number}
                    // applicantDesiredPosition={desiredPosition}
                    // onClickRemove={() => onApplicantDelete(id)}
                    // onClickToInterview={() => onApplicantToInterview(id)}
                    applicantsData={applicant}
                    // onClickRemove={onApplicantDelete}
                    // onClickToInterview={onApplicantToInterview}
                    // applicantStatus={status}
                    // applicantId={id}
                  />
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
      </div>
    </>
  );
};

export default ApplicationList;
