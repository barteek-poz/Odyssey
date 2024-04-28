const Button = ({ text }) => {
  return (
    <button className="BUTTON border rounded-lg w-24 h-8 cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
      {text}
    </button>
  );
};

export default Button;
