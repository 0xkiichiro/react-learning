import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const InstructorDetails = () => {
  const { id, name } = useParams();
  const navigate = useNavigate();
  const inst = useLocation();

  //   const [inst, setInst] = useState([]);

  //   const getInstructor = () => {
  //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setInst(data))
  //       .catch((err) => console.log(err));
  //   };
  //   useEffect(() => {
  //     getInstructor();
  //   }, [id]);

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
};

export default InstructorDetails;
