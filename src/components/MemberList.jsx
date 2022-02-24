import React from "react";
import { useContext } from "react";
import { MemberContext } from "../context/MemberContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import Member from "./Member";

//List screen
const MemberList = () => {
  const { sortedMembers } = useContext(MemberContext);
  const navigate = useNavigate();
  return (
    <div className="screen">
      <Button
        symbol={"+"}
        func={() => {
          navigate("/new");
        }}
      />
      <Header
        mainHeader={"Team members"}
        subHeader={"You have " + `${sortedMembers.length}` + " members."}
      />
      {sortedMembers.map((member) => {
        return <Member key={member.id} member={member} />;
      })}
    </div>
  );
};

export default MemberList;
