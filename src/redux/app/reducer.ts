import { createReducer } from '@reduxjs/toolkit';
import appActions from './actions';

import initialApplicants from '../../components/Dashboard/applicants.json';
import IApplicant from '../../interfaces/IApplicant.inteface';


const {
  addApplicant,
  setApplicantToInterview,
  setApplicantToApproved,
  deleteApplicant,
} = appActions;

interface IInitialState {
  applicants: IApplicant[];
}

const initialState: IInitialState = {
  applicants: initialApplicants,
};

export default createReducer(initialState, builder => {
  builder
    .addCase(addApplicant, (state, action) => {
      return {
        ...state,
        applicants: [...state.applicants, action.payload],
      };
    })
    .addCase(setApplicantToInterview, (state, action) => {
      return {
        ...state,
        applicants: [...state.applicants, action.payload],
      };
    })
    .addCase(setApplicantToApproved, (state, action) => {
      return {
        ...state,
        applicants: [...state.applicants, action.payload],
      };
    }).addCase(deleteApplicant, (state, action) => {
      return {
        ...state,
        applicants: [...state.applicants.filter(applicant => applicant.id !== action.payload)],
      };
    });
});
