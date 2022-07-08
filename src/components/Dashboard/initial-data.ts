const initialData = {
  applicants: {
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
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Application',
      applicantIds: ['id-1', 'id-2', 'id-3', 'id-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Interview',
      applicantIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Application',
      applicantIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;
