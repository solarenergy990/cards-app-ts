import { createReducer } from '@reduxjs/toolkit';
import initialData from '../../components/Dashboard/initial-data';
import appActions from './actions';

const {
  addApplicant,
  moveApplicant,
  
  deleteApplicant,
  reorderApplicants,
} = appActions;

const initialState = initialData;

export default createReducer(initialState, builder => {
  builder
    .addCase(addApplicant, (state, action) => {
      return {
        ...state,
        applicants: [...state.applicants, action.payload],
      };
    })
    .addCase(moveApplicant, (state, action) => {
      return {
        ...state,
        applicants: [...state.applicants, action.payload],
      };
    })
    // .addCase(setApplicantToApproved, (state, action) => {
    //   return {
    //     ...state,
    //     applicants: [...state.applicants, action.payload],
    //   };
    // })
    .addCase(deleteApplicant, (state, action) => {
      return {
        ...state,
        applicants: [
          ...state.applicants.filter(
            applicant => applicant.id !== action.payload,
          ),
        ],
      };
    })
    .addCase(reorderApplicants, (state, action) => {
      return {
        ...state,
        applicants: [...action.payload],
      };
    });
});
