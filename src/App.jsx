import React from "react";
import MemberList from "./components/MemberList";
import MemberContextProvider from "./context/MemberContext";
import { Routes, Route, Link } from "react-router-dom";
import AddMember from "./components/AddMember";
import EditMember from "./components/EditMember";

function App() {
  return (
    <MemberContextProvider>
      <Routes>
        {/* three screens */}
        <Route exact path="/" element={<MemberList />} />
        <Route exact path="/new" element={<AddMember />} />
        <Route exact path="/details" element={<EditMember />} />
      </Routes>
    </MemberContextProvider>
  );
}
export default App;
