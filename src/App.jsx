import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Container>
      <Row>
        <Col>
          <AddUserForm addUser={addUser} />
        </Col>
        <Col>
          <UserList users={users} deleteUser={deleteUser} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
