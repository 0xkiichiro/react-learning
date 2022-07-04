import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
  //! get
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);

  //! post (create) to API
  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  //! delete
  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  //! update (put:whole update, patch:partial update)
  const editTutorial = async (id, title, descs) => {
    const filtered = tutorials
      .filter((tutorial) => tutorial.id === id)
      .map((item) => ({ title: title, description: descs }));
    try {
      await axios.put(`${url}/${id}`, filtered[0]);
      console.log(filtered);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </>
  );
};

export default Home;
