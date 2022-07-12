import NotFound from "./NotFound";

import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const InstructorDetails = () => {
  const { id, name } = useParams();
  const navigate = useNavigate();
  // const location = useLocation();
  // const inst = location.state;

  const [inst, setInst] = useState(null);
  const [error, setError] = useState(false);

  const getInstructor = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("oops, something went wrong");
        }
        return res.json();
      })
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructor();
  }, [id]);

  if (error) {
    return <NotFound />;
  } else if (!inst) {
    return (
      <div className="text-center">
        <h1>Data is fetching...</h1>
      </div>
    );
  } else {
    return (
      <div className="container text-center">
        <img
          className="w-50"
          src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
          alt="instructor-image"
        />
        <h3>{inst.name}</h3>
        <h4>{inst.email}</h4>
        <h5>{inst.phone}</h5>
        <div>
          <button onClick={() => navigate("/")} className="btn btn-success">
            Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-danger">
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default InstructorDetails;
