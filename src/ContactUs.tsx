import * as React from 'react';
import { Form } from './Form';

const ContactUs: React.SFC = () => {
  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   props.onNameChange(e.currentTarget.value);
  // };

  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   props.onEmailChange(e.currentTarget.value);
  // };

  // const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   props.onReasonChange(e.currentTarget.value);
  // };

  // const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   props.onNotesChange(e.currentTarget.value);
  // };

  return (
    <Form defaultValues={{ name: '', email: '', reason: 'Support', notes: '' }}>
      <Form.Field name='name' label='Your name' />
      <Form.Field name='email' label='Your email address' type='Email' />
      <Form.Field
        name='reason'
        label='Reason you need to contact us'
        type='Select'
        options={['Marketing', 'Support', 'Feedback', 'Jobs', 'Other']}
      />
      <Form.Field name='notes' label='Additional notes' type='TextArea' />
    </Form>
  );
};

export default ContactUs;
