import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Users from "./Users";

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef("");

  console.log("text:", text, "search:", search);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  console.log(users);

  const handleSearch = () => {
    setSearch(text);
    // setSearch(inputRef.current.value);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ),
    [users, search]
  );
  console.log(filteredUsers);

  const addUser = useCallback(() => {
    setUsers(...users, {
      id: users.length + 1,
      name: `Clarusway-${users.length - 9}`,
    });
  }, [users]);

  return (
    <div>
      {/* //! instead of using onClick we can use ref //! onChange too many renders! */}
      {/* <input type="search" ref={inputRef} /> */}
      <input type="search" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSearch}>Search User</button>
      <Users users={filteredUsers} addUser={addUser} />
      {/* <Users users={users} /> */}
    </div>
  );
};

export default UseMemoCallBack;
