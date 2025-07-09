import React from 'react';
import Card from '../components/Card';

const Trips = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold">Trips</h1>
      <Card
        title="Trip to Paris"
        description="View trip details"
        image="https://picsum.photos/200/302"
      />
      <Card
        title="Trip to Rome"
        description="View trip details"
        image="https://picsum.photos/200/303"
      />
    </div>
  );
};

export default Trips;