import { createContext, useEffect, useState } from "react";
import uuid from "react-uuid";

//Use context API to share data between components
export const MemberContext = createContext();

const MemberContextProvider = (props) => {
  const [members, setMembers] = useState([
    {
      id: uuid(),
      firstName: "Jay",
      lastName: "Zhang",
      email: "abc@gmail.com",
      contactNumber: "408-408-8508",
      role: "admin",
    },
  ]);

  useEffect(() => {
    setMembers(JSON.parse(localStorage.getItem("members")));
  }, []);

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  });

  const sortedMembers = members.sort((a, b) => {
    if (a.firstName === b.firstName) {
      return a.lastName - b.lastName;
    } else if (a.firstName < b.firstName) {
      return -1;
    } else {
      return 1;
    }
  });

  const addMember = (id, firstName, lastName, email, contactNumber, role) => {
    setMembers([
      ...members,
      { id, firstName, lastName, email, contactNumber, role },
    ]);
  };

  const editMember = (id, editedMember) => {
    setMembers(
      members.map((member) => (member.id === id ? editedMember : member))
    );
  };

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <MemberContext.Provider
      value={{ sortedMembers, addMember, editMember, deleteMember }}
    >
      {props.children}
    </MemberContext.Provider>
  );
};
export default MemberContextProvider;
