/* eslint-disable react/prop-types */

const Button = ({ value, onClick }) => (
  <button
    className="font-bold p-4 bg-gray-300 rounded-lg shadow hover:bg-gray-400 active:bg-gray-500 focus:outline-none"
    onClick={onClick}
  >
    {value}
  </button>
);

export default Button;
