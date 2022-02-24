//Customized header component for all three screens
const Header = ({ mainHeader, subHeader }) => {
  return (
    <div className="page_header">
      <h1> {mainHeader} </h1> <p className="sub_header"> {subHeader} </p>{" "}
    </div>
  );
};

export default Header;
