import axios from "axios"
import { useEffect, useState } from "react"

export default function Post() {

    const [postData, setPostData] = useState([])
    const [showLoader, setShowLoader] = useState(false)

    const getAPiData = () => {
        setShowLoader(true)
        axios.get('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json')
            .then((res) => {
                console.log(res.data)
                setPostData([...res.data])
                setShowLoader(false)
            })
            .catch((err) => {
                console.log(err, 'no data get')
            })
    }


    useEffect(() => {
        getAPiData();
    }, [])

    return (
        <>
            <div>
                {showLoader ? (
                    <div className="fixed inset-0 flex flex-col items-center justify-start bg-white bg-opacity-80 z-50">
                    <div className="w-full flex justify-center mt-4">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" 
                            alt="Loading..." 
                            className="max-w-full h-auto" 
                        />
                        <h1 className="text-4xl">Plz Wait ......</h1>
                    </div>                
                    </div>

                ) : null}
                <div className="m-2">
                    {/* <button onClick={getAPiData} className="p-2 border rounded-sm">Get data</button> */}
                </div>
                <div className="flex flex-wrap justify-center m-2">
                    {postData.map((x, i) => (
                        <div className="border rounded-md w-[400px] m-1 text-start p-3" key={i}>
                            <video width="100%" controls>
                                <source src={x.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p><b>Id:</b> {x.id}</p>
                            <p><b>Movie:</b> {x.movie}</p>
                            <p><b>Title:</b> {x.title}</p>
                            <p><b>Duration:</b> {x.duration}</p>
                            <p><b>Views:</b> {x.views}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}