import React from 'react';

export const Players = ({ socket, joinedUsers }) => {
  return (
    <div className="bg-blue-200 w-[210px] h-[500px]">
      <h2>Joined Users:</h2>
      <ul>
        {joinedUsers.map((user) => (
          <li key={user.userID}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
