import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">Add User</Button>
    </Form>
  );
};

export default AddUserForm;
