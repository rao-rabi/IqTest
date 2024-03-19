const Button = ({ text, className }) => {
  return (
    <button className={`rounded-full bg-[#5235e8] text-white text-md text-center px-6 py-2 ${className}`}>
      {text}
    </button>
  );
};

export default Button;
