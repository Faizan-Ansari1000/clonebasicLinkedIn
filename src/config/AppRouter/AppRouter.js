import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Message from "../../pages/Message";
import NotFound from "../../pages/NotFound";
import ProfilePage from "../../pages/Profile";
import Notification from "../../pages/Notification";
import Post from "../../pages/Post";
import Upload from '../../pages/Upload'
import MyInput from "../../Component/MyInput";
import Updates from "../../pages/Updates";
import Jobs from "../../pages/Jobs";
import JobsForm from "../../pages/JobsForm";

export default function AppRouter() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path='/' element={<Home />} />
                        <Route path="Message" element={<Message />} />
                        <Route path="Profile" element={<ProfilePage />} />
                        <Route path="Notification" element={<Notification />} />
                        <Route path="Post" element={<Post />} />
                        <Route path="Upload" element={<Upload />} />
                        <Route path="MyInput" element={<MyInput />} />
                        <Route path="Updates" element={<Updates />} />
                        <Route path="Jobs" element={<Jobs />} />
                        <Route path="JobsForm" element={<JobsForm />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}