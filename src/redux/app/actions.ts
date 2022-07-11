import { createAction } from '@reduxjs/toolkit';
import { IApplicant } from '../../interfaces/IApplicant.inteface';

const addApplicant = createAction<IApplicant, 'app/addApplicant'>(
  'app/addApplicant',
);
const setApplicantToInterview = createAction<
  IApplicant,
  'app/setApplicantToInterview'
>('app/setApplicantToInterview');
const setApplicantToApproved = createAction<
  IApplicant,
  'app/setApplicantToApproved'
>('app/setApplicantToApproved');
const deleteApplicant = createAction<string, 'app/deleteApplicant'>(
  'app/deleteApplicant',
);

const appActions = {
  addApplicant,
  setApplicantToInterview,
  setApplicantToApproved,
  deleteApplicant,
};
export default appActions;
