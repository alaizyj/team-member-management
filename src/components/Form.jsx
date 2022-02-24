import { useState, useContext, useEffect } from "react";
import { MemberContext } from "../context/MemberContext";
import { useNavigate } from "react-router-dom";

//Form component for add and edit screens
const Form = ({ member, add }) => {
  const navigate = useNavigate();
  const { editMember } = useContext(MemberContext);
  const { addMember } = useContext(MemberContext);
  const { deleteMember } = useContext(MemberContext);

  const id = member.id;
  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [email, setEmail] = useState(member.email);
  const [contactNumber, setContactNumber] = useState(member.contactNumber);
  const [role, setRole] = useState(member.role);

  const currentMember = { id, firstName, lastName, email, contactNumber, role };
  const [formErrors, setFormErrors] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(currentMember));
    setCanSubmit(true);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteMember(id);
    navigate("/");
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && canSubmit) {
      add && addMember(id, firstName, lastName, email, contactNumber, role);
      !add && editMember(id, currentMember);
      navigate("/");
    }
  }, [formErrors]);

  const validate = (newMember) => {
    const errors = {};
    const regexName = /^[a-zA-Z ]{2,30}$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexContactNumber =
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!newMember.firstName) {
      errors.firstName = "First name is required!";
    } else if (!regexName.test(newMember.firstName)) {
      errors.firstName = "Invalid first name!";
    }
    if (!newMember.lastName) {
      errors.lastName = "Last name is required!";
    } else if (!regexName.test(newMember.lastName)) {
      errors.lastName = "Invalid last name!";
    }
    if (!newMember.email) {
      errors.email = "Email is required!";
    } else if (!regexEmail.test(newMember.email)) {
      errors.email = "Invalid email format!";
    }
    if (!newMember.contactNumber) {
      errors.contactNumber = "Contact number is required!";
    } else if (!regexContactNumber.test(newMember.contactNumber)) {
      errors.contactNumber = "Invalid contact number!";
    }

    return errors;
  };

  return (
    <div className="screen">
      <form className="form">
        <label className="form_title">
          <span>Info</span>
        </label>
        <label>
          <input
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={currentMember.firstName}
            placeholder="First name"
            type="text"
          ></input>
          <p className="error">{formErrors.firstName}</p>
          <input
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={currentMember.lastName}
            placeholder="Last name"
            type="text"
          ></input>
          <p className="error">{formErrors.lastName}</p>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={currentMember.email}
            placeholder="Email address"
            type="text"
          ></input>
          <p className="error">{formErrors.email}</p>
          <input
            name="contactNumber"
            onChange={(e) => setContactNumber(e.target.value)}
            value={currentMember.contactNumber}
            placeholder="Contact number"
            type="text"
          ></input>
          <p className="error">{formErrors.contactNumber}</p>
        </label>
        <label className="form_title">
          <span>Role</span>
        </label>
        <div className="checkbox">
          <input
            className="radio_check"
            id="reg"
            type="radio"
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value="regular"
            checked={currentMember.role === "regular"}
          ></input>
          <label htmlFor="reg">Regular - Can't delete members</label>
        </div>
        <div className="checkbox">
          <input
            className="radio_check"
            id="adm"
            type="radio"
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value="admin"
            checked={currentMember.role === "admin"}
          ></input>
          <label htmlFor="adm">Admin - Can delete members</label>
        </div>
        <div className="button_area">
          <div
            className="delete_button_div"
            style={{ display: add ? "none" : "block" }}
          >
            <button
              className="delete_button"
              onClick={(e) => handleDelete(e)}
              type="submit"
            >
              Delete
            </button>
          </div>
          <div className="add_button_div">
            <button
              className="add_button"
              onClick={(e) => handleSubmit(e)}
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
