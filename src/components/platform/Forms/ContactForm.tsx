import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import FormGroup from './util/FormGroup';
import FormLabel from './util/FormLabel';
import FormInput from './util/FormInput';
import NewContactMutation from '../../../mutations/NewContactMutation';

const ContactForm: React.FC = () => {
  const [postContact, { data, loading, error }] = useMutation(NewContactMutation);
  const initialState = {
    userName: '',
    email: '',
    message: '',
    failed: false,
    error: '',
    success: false,
  };

  const [state, dispatch] = useState(initialState);

  useEffect(() => {
    if (state.success) {
      Router.push('/contact/success');
    }
  }, [state.success]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.persist();

    const contact = {
      name: state.userName,
      email: state.email,
      message: state.message,
    };

    postContact({ variables: { input: contact } })
      .then(result => {
        dispatch({
          ...state,
          success: true,
          failed: false,
        });
      })
      .catch(error_ => {
        dispatch({
          ...state,
          error: 'Contact did not send. Please try again',
          failed: true,
        });
      });
  };

  const handleInputChange = (e: React.SyntheticEvent) => {
    let element = e.currentTarget as HTMLInputElement;
    dispatch({
      ...state,
      [element.name]: element.value,
    });
  };

  const errorMessage = <div>{state.error || error}</div>;

  return (
    <form onSubmit={onSubmit}>
      {state.failed ? errorMessage : ''}
      <FormGroup>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput
          id="userName"
          name="userName"
          onChange={handleInputChange}
          required
          type="text"
          value={state.userName}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput
          id="email"
          name="email"
          onChange={handleInputChange}
          required
          type="email"
          value={state.email}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="message">Message:</FormLabel>
        <FormInput
          id="message"
          name="message"
          onChange={handleInputChange}
          required
          type="text"
          value={state.message}
        />
      </FormGroup>

      <Button style={{ border: '1px solid #000', background: '#fff' }} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
