import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import shortid from 'shortid';

import s from './Applicant.module.scss';
import actions from '../../redux/app/actions';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {IApplicant} from '../../interfaces/IApplicant.inteface'

type Props = {
  setActive: (applicantStatus: boolean) => void;
};

const ApplicantForm = ({ setActive }: Props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [desiredPosition, setDesiredPosition] = useState('');
  const [status, setStatus] = useState('');

  // brings dispatcher here
  const dispatch = useAppDispatch();
  // brings global state here
  const applicantsState = useAppSelector(({ applicants }) => {
    return applicants;
  });
  // brings global state of column order here
  const columnOrderState = useAppSelector(({ columnOrder }) => {
    return columnOrder;
  });
  const columnsState = useAppSelector(({ columns }) => {
    return columns;
  });

  // catches form changes
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    if (evt.currentTarget.name === 'name') {
      setName(value);
    }
    if (evt.currentTarget.name === 'number') {
      setNumber(value);
    }
    if (evt.currentTarget.name === 'desiredPosition') {
      setDesiredPosition(value);
    }
    setStatus('application');
  };

  //creates new applicant object and sends it to reducer through dispatcher
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const newApplicant: IApplicant = {
      id: shortid.generate(),
      name,
      number,
      desiredPosition,
      status,
    };
    // const id = shortid.generate();

    // const newApplicant = {
    //   id: {
    //     id,
    //     name,
    //     number,
    //     desiredPosition,
    //     status,
    //   },
    // };

    // const checkedApplicantsNames = columnOrderState.map(columnId => {
    //   const column = columnsState[columnId];
    //   const applicants = column.applicantIds.map(
    //     applicantId => applicantsState[applicantId],
    //   );

    //   return applicants.map(applicant => applicant.name.toLowerCase());
    // });

    dispatch(actions.addApplicant(newApplicant));

    // const checkedApplicantsNames = applicants.map(applicant => {
    //   return applicant.name.toLowerCase();
    // });

    // if (!checkedApplicantsNames.includes(name.toLowerCase())) {
    //   dispatch(actions.addApplicant(newApplicant));
    // } else {
    //   alert(`${name} is already in list`);
    // }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setDesiredPosition('');
    setActive(false);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className={s.formContainer}>
          <label className={s.label}>
            <p className={s.labelText}>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name can contain letters, spaces,  dashes, apostrophes e.g. Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
              required
              onChange={handleChange}
              value={name}
              className={s.input}
            />
          </label>
          <label className={s.label}>
            <p className={s.labelText}>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Telephone number can contain numbers, dashes, spaces, round brackets and can begin with +"
              required
              onChange={handleChange}
              value={number}
              className={s.input}
            />
          </label>
          <label className={s.label}>
            <p className={s.labelText}>Desired position</p>
            <input
              type="text"
              name="desiredPosition"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Text can contain letters, spaces,  dashes, apostrophes e.g. Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
              required
              onChange={handleChange}
              value={desiredPosition}
              className={s.input}
            />
          </label>
          <Button type="submit" variant="btn btn-success">
            Add Candidate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplicantForm;
