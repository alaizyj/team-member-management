import { useLocation, useNavigate } from "react-router-dom";
import Form from "./Form";
import Header from "./Header";
import Button from "./Button";

//Edit screen
const EditMember = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editedMember = {
    id: location.state.id,
    firstName: location.state.firstName,
    lastName: location.state.lastName,
    email: location.state.email,
    contactNumber: location.state.contactNumber,
    role: location.state.role,
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
        mainHeader={"Edit team member"}
        subHeader={"Edit contact info, location and role."}
      />
      <Form member={editedMember} add={false} />
    </div>
  );
};

export default EditMember;
