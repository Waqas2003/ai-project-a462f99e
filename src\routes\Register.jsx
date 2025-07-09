import React from 'react';

const Register = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <form>
        <label>
          Name:
          <input type="text" className="block w-full p-2 pl-10 text-sm text-gray-700" />
        </label>
        <label>
          Email:
          <input type="email" className="block w-full p-2 pl-10 text-sm text-gray-700" />
        </label>
        <label>
          Password:
          <input type="password" className="block w-full p-2 pl-10 text-sm text-gray-700" />
        </label>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;