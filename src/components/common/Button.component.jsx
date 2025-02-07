import React from 'react';


export const Button = ({ children, loading, ...props }) => {
  return (
    <button
      {...props}
      disabled={loading}
      className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-200 ${
        loading ? 'opacity-75 cursor-not-allowed' : ''
      }`}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          Processing...
        </div>
      ) : (
        children
      )}
    </button>
  );
};
