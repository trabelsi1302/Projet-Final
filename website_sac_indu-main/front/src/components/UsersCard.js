import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/actions/user";

const UsersCard = (el) => {
  const dispatch = useDispatch();
  const deleteuser = () => {
    dispatch(deleteUser(el._id));
  };
  console.log(el);
  return (
    <div>
      <p>{el.username}</p>
      <button onClick={deleteuser}>delete</button>
    </div>
  );
};

export default UsersCard;
