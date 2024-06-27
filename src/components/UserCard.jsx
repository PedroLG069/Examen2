import React from 'react';
import { Card, Button } from 'react-bootstrap';

const UserCard = ({ user, onDelete }) => {
  return (
    <Card className="user-card">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>Email: {user.email}</Card.Text>
        <Card.Text>Phone: {user.phone}</Card.Text>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
