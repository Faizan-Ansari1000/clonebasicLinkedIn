import React from 'react';
import { useLocation } from 'react-router-dom';

const Jobs = () => {

    const location = useLocation();

    const { data } = location.state || {};

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <h1 className="text-xl font-bold mb-4">Job Details</h1>
            {data ? (
                <div className="space-y-4">
                    <div className="flex items-center">
                        <img
                            src={data.imageUrl}
                            alt="Job"
                            className="w-24 h-24 rounded-md object-cover mr-4"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold">{data.title}</h2>
                            <p className="text-gray-600">{data.company}</p>
                            <p className="text-gray-500">{data.location}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Description:</p>
                        <p className="text-gray-700">{data.description}</p>
                    </div>
                </div>
            ) : (
                <p>No data received</p>
            )}
        </div>
    </div>
    )



};

export default Jobs;
