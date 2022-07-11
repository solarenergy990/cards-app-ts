export interface IApplicant {
  id: string;
  name: string;
  desiredPosition: string;
  number: string;
  status: string;
}

export interface IColumn {
  id: string;
  title: string;
  applicantIds: string[];
}
