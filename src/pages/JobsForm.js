import { useState } from "react"
import MyButton from "../Component/MyButton";
import { useNavigate } from "react-router-dom";

export default function JobsForm() {

    const [model, setModel] = useState({});
    const navigate = useNavigate()


    const uploadForm = () => {
        console.log(model)
        navigate('/Jobs',{
            state:{
                data: model
            }
        })
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <div className='justify-center p-5 bg-gray-100'>
                            <p>Click the submit button, you see your send gthe Information </p>
                        </div>

                        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

                            <form className="space-y-5 bg-white p-6 rounded-md shadow-md w-80">
                                <div>
                                    <div>
                                        <input
                                            onChange={(e) => setModel({ ...model, imageUrl: e.target.value })}
                                            placeholder="Enter Image Url"
                                            className="w-full border-0 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 "
                                        />
                                    </div> <br />
                                    <input
                                        onChange={(e) => setModel({ ...model, title: e.target.value })}
                                        placeholder="EnterJob Title"
                                        className="w-full border-0 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        onChange={(e) => setModel({ ...model, company: e.target.value })}
                                        placeholder="Enter Company"
                                        className="w-full border-0 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        onChange={(e) => setModel({ ...model, location: e.target.value })}
                                        placeholder="Enter Job Location"
                                        className="w-full border-0 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        onChange={(e) => setModel({ ...model, description: e.target.value })}
                                        placeholder="Enter Job Description"
                                        className="w-full border-0 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </form>
                            <div>
                                <MyButton className='text-5xl'  onClick={uploadForm}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}