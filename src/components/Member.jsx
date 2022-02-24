import pic from "../img/pic.png";
import { useNavigate } from "react-router-dom";

//Member card component, shown on the list screen
const Member = ({ member }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/details", {
      state: {
        id: member.id,
        firstName: member.firstName,
        lastName: member.lastName,
        contactNumber: member.contactNumber,
        email: member.email,
        role: member.role,
      },
    });
  };

  return (
    <div className="member_card" onClick={(e) => handleClick(e)}>
      <img className="profile-img" src={pic} alt="profile-pic" />
      <div className="member_info">
        <div className="name_info">
          <p>{member.firstName + " " + member.lastName + " "}</p>
          <p>{member.role === "admin" ? "(admin)" : ""}</p>
        </div>
        <div className="contact_info">
          <p>{member.contactNumber}</p>
          <p>{member.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
