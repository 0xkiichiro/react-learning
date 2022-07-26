import React, { memo, useState } from "react";
import UserItem from "./UserItem";

const Users = ({ users }) => {
  console.log("Users Comp. Rendered");
  return (
    <div className="users">
      <button id="add-button" onClick={null}>
        Add User
      </button>
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default memo(Users);
