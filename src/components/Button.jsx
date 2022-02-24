//customized button component for three screens
const Button = ({ symbol, func }) => {
  return (
    <div className="top_button_div">
      <button className="top_button" onClick={func}>
        {symbol}
      </button>
    </div>
  );
};

export default Button;
