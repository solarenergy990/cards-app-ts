import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import shortid from 'shortid';

import s from './Applicant.module.scss';
import actions from '../../redux/app/actions'

// import StatusContext from '../../context/context';
import IApplicant from '../../interfaces/IApplicant.inteface'

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';

type Props = {
  // onSubmit: (applicant: IApplicant) => void;
  setActive: (applicantStatus: boolean) => void;
}

const ContactForm = ({
  // onSubmit,
  setActive,
  
}: Props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [desiredPosition, setDesiredPosition] = useState('');
  // const { status, setStatus } = useContext(StatusContext);
  const   [status, setStatus] = useState('');

  const dispatch = useAppDispatch();
  const applicants = useAppSelector(({applicants}) => {
    
    return applicants;
  });
 

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

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

      const newApplicant = {
      id: shortid.generate(),
      name,
      number,
      desiredPosition,
      status,
    };

      const checkedApplicantsNames = applicants.map(applicant => {
      return applicant.name.toLowerCase();
    });

      if (!checkedApplicantsNames.includes(name.toLowerCase())) {
      dispatch(actions.addApplicant(newApplicant))
    } else {
      alert(`${name} is already in list`);
    }

    // onSubmit({ name, number, desiredPosition, status });

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

export default ContactForm;
