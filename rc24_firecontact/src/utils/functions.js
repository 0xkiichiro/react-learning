import firebase from "./firebase";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "./toastify";

export const addUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    userName: info.userName,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
  Toastify("add successful!");
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

export const handleDelete = (id) => {
  const db = getDatabase(firebase);
  // const userRef = ref(db, "users/");
  remove(ref(db, "users/" + id));
  Toastify("delete successful!");
};

export const updateUser = (info) => {
  const db = getDatabase(firebase);
  const updates = {};
  updates["users/" + info.id] = info;

  Toastify("edit successful!");
  return update(ref(db), updates);
};
