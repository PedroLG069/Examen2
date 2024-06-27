import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, deleteUser }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={() => deleteUser(user.id)} />
      ))}
    </div>
  );
};

export default UserList;
