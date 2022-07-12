import { IApplicant, IColumn } from '../../interfaces/IApplicant.inteface';

const applicants: IApplicant[] = [
  {
    id: 'id-1',
    name: 'Anna Rosenfeld',
    desiredPosition: 'manager',
    number: '459-12-56',
    status: 'interview',
  },
  {
    id: 'id-2',
    name: 'Hans Kripke',
    desiredPosition: 'tutor',
    number: '443-89-12',
    status: 'application',
  },
  {
    id: 'id-3',
    name: 'John Simpson',
    desiredPosition: 'erasure technitian',
    number: '645-17-79',
    status: 'application',
  },
  {
    id: 'id-4',
    name: 'Alice Snooper',
    desiredPosition: 'warehouse helper',
    number: '227-91-26',
    status: 'application',
  },
];

const columns: IColumn[] = [
  {
    id: 'application',
    title: 'Application',
    applicantIds: ['id-1', 'id-2', 'id-3', 'id-4'],
  },
  {
    id: 'interview',
    title: 'Interview',
    applicantIds: [],
  },
  {
    id: 'approved',
    title: 'Approved',
    applicantIds: [],
  },
];

const columnOrder = ['application', 'interview', 'approved'];

const initialData = {
  applicants,
  columns,
  columnOrder,
};

export default initialData;
