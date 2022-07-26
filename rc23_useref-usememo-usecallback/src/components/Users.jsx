import React, { useState } from "react";

const Users = ({ users }) => {
  console.log("Users Comp. Rendered");
  return (
    <div>
      <button onClick={null}>Add User</button>
      {users?.map((user) => null)}
    </div>
  );
};

export default Users;
