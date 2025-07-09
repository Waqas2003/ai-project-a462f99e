import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded px-4 py-6">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;