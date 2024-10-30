// Notification.js
import React from 'react';

const NotificationItem = ({ title, message, time }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600">{message}</p>
      <span className="text-gray-500 text-sm">{time}</span>
    </div>
  );
};

const Notification = () => {
  const notifications = [
    {
      id: 1,
      title: 'New Connection Request',
      message: 'John Doe has sent you a connection request.',
      time: '2 minutes ago',
    },
    {
      id: 2,
      title: 'Profile Update',
      message: 'Your profile has been updated successfully.',
      time: '10 minutes ago',
    },
    {
      id: 3,
      title: 'Event Reminder',
      message: 'Don’t forget about the upcoming webinar tomorrow.',
      time: '1 hour ago',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </div>
  );
};

export default Notification;
