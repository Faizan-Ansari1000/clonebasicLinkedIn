import React from 'react';
import { useLocation } from 'react-router-dom';

const Updates = () => {
    const location = useLocation();
    const { data } = location.state || {}; // Use optional chaining to avoid errors

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                {/* Full-width image */}
                <img
                    src={data?.imageUrl}
                    alt="User"
                    className="w-full h-48 rounded-lg object-cover mb-4" // Image takes full width and has margin below
                />
                <h1 className="text-xl font-bold mb-4">User Details</h1>
                {data ? (
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <p className="font-semibold">Name:</p>
                            <p className="ml-2">{data.firstName}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="font-semibold">Email:</p>
                            <p className="ml-2">{data.email}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="font-semibold">Message:</p>
                            <p className="ml-2">{data.message}</p>
                        </div>
                    </div>
                ) : (
                    <p>No data received</p>
                )}
            </div>
        </div>
    );
};

export default Updates;
