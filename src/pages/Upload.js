import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../Component/MyButton';

const Feeds = () => {
    const navigate = useNavigate();
    const [model, setModel] = useState({});

    const moveToUpdate = () => {
        navigate('/Updates', {
            state: {
                data: model // Pass the entire model object
            }
        });
        console.log(model);
    };
    

    return (
        <div>
            <div className='justify-center p-5 bg-gray-100'>
                <p>Click the submit button, you see your send gthe Information </p>
            </div>

            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

                <form className="space-y-6 bg-white p-6 rounded-md shadow-md w-80">
                    <div>
                        <input
                            onChange={(e) => setModel({ ...model, firstName: e.target.value })}
                            placeholder="Enter your name"
                            className="w-full border-0 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            onChange={(e) => setModel({ ...model, email: e.target.value })}
                            placeholder="Enter your email"
                            className="w-full border-0 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            onChange={(e) => setModel({ ...model, imageUrl: e.target.value })}
                            placeholder="Enter image URL"
                            className="w-full border-0 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <textarea
                            onChange={(e) => setModel({ ...model, message: e.target.value })}
                            placeholder="Enter description"
                            className="w-full border-0 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </form>
                <div>
                    <MyButton className='text-5xl' onClick={moveToUpdate} />
                </div>
            </div>
        </div>
    );
};

export default Feeds;
