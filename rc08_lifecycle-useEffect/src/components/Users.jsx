import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //! component did mount
    fetchData();
  }, []);

  return (
    <div>
      <h1>Userlist</h1>
      <div className="row">
        <div className="col">
          <img src="" alt="" />
          <h6>Name:</h6>
        </div>
      </div>
    </div>
  );
};

export default Users;
