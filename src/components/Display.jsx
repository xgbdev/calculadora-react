/* eslint-disable react/prop-types */

const Display = ({ value }) => (
  <div className="mb-4 p-4 text-right text-xl font-mono bg-gray-200 rounded-lg">
    {value || '0'}
  </div>
);

export default Display;
