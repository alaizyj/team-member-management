import { MemberContext } from "../context/MemberContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import Form from "./Form";
import Header from "./Header";
import Button from "./Button";

//Add screen
const AddMember = () => {
  const navigate = useNavigate();
  const newMember = {
    id: uuid(),
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    role: "regular",
  };

  return (
    <div className="screen">
      <Button
        symbol={"✖"}
        func={() => {
          navigate("/");
        }}
      />
      <Header
        mainHeader={"Add a team member"}
        subHeader={"Set email, location and role."}
      />
      <Form member={newMember} add={true} />
    </div>
  );
};

export default AddMember;
