import { createReducer } from '@reduxjs/toolkit';
import initialState from '../../components/Dashboard/initial-data';
import appActions from './actions';

const {
  addApplicant,
  moveApplicant,
  deleteApplicant,
  reorderApplicants,
} = appActions;

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
