import { IApplicant, IColumn } from '../../interfaces/IApplicant.inteface';
import { ApplicantId, ColumnId } from '../../types/types';

// type ApplicantId = string;
// type ColumnId = string;

const applicants: Record<ApplicantId, IApplicant> = {
  'id-1': {
    id: 'id-1',
    name: 'Anna Rosenfeld',
    desiredPosition: 'manager',
    number: '459-12-56',
    status: 'interview',
  },
  'id-2': {
    id: 'id-2',
    name: 'Hans Kripke',
    desiredPosition: 'tutor',
    number: '443-89-12',
    status: 'application',
  },
  'id-3': {
    id: 'id-3',
    name: 'John Simpson',
    desiredPosition: 'erasure technitian',
    number: '645-17-79',
    status: 'application',
  },
  'id-4': {
    id: 'id-4',
    name: 'Alice Snooper',
    desiredPosition: 'warehouse helper',
    number: '227-91-26',
    status: 'application',
  },
};

const columns: Record<ColumnId, IColumn> = {
  'Application': {
    id: 'column-1',
    title: 'Application',
    applicantIds: ['id-1', 'id-2', 'id-3', 'id-4'],
  },
  'Interview': {
    id: 'column-2',
    title: 'Interview',
    applicantIds: [],
  },
  'Approved': {
    id: 'column-3',
    title: 'Approved',
    applicantIds: [],
  },
};

const columnOrder = ['Application', 'Interview', 'Approved'];

const initialData = {
  applicants,
  columns,
  columnOrder,
};

export default initialData;
