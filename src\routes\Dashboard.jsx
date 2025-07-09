import React from 'react';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Card
        title="Upcoming Trips"
        description="View your upcoming trips"
        image="https://picsum.photos/200/300"
      />
      <Card
        title="Recent Bookings"
        description="View your recent bookings"
        image="https://picsum.photos/200/301"
      />
    </div>
  );
};

export default Dashboard;