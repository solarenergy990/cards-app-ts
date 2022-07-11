import { createReducer } from '@reduxjs/toolkit';
import initialData from '../../components/Dashboard/initial-data';
import appActions from './actions';

// import initialApplicants from '../../components/Dashboard/applicants.json';





const {
  addApplicant,
  setApplicantToInterview,
  setApplicantToApproved,
  deleteApplicant,
  reorderApplicants
} = appActions;

  // interface IInitialState {
  //   applicants: IApplicant[];
  // }

// const initialState = {
//   applicants: initialApplicants,
// };

const initialState = initialData

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
    }).addCase(reorderApplicants, (state, action)=> {
      return {
        ...state, 
        applicants: [...action.payload]
      }
    });
});
