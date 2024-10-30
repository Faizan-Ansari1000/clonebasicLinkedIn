import React from 'react';
import { Link } from 'react-router-dom';
import { FaSquarePlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { IoHomeSharp } from "react-icons/io5";
import { PiVideoFill } from "react-icons/pi";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { IoNotifications } from "react-icons/io5";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

const Content = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="w-full bg-gray-900 fixed top-0 left-0 right-0 z-50">
                <div className="flex items-center justify-between w-full p-3">
                    <div className="w-8 h-8 rounded-full">
                        <Link to={'/Profile'}>
                            <CgProfile className='text-3xl text-white' />
                        </Link>
                    </div>

                    <div className="relative flex-grow mx-3 text-start">
                        <input
                            type="text"
                            placeholder="Search"
                            className="max-w-md w-full bg-gray-800 text-white placeholder-gray-400 text-sm focus:outline-none p-2 pr-10 rounded pl-10"
                        />
                        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                    </div>

                    <Link to={'/Upload'} className="w-8 h-8 rounded-full flex items-center justify-center">
                        <FaSquarePlus className='text-white text-2xl ms-1' />
                    </Link>

                    <Link to={'/Message'} className="w-8 h-8 rounded-full flex items-center justify-center">
                        <AiFillMessage className='text-white text-2xl ms-2' />
                    </Link>
                </div>
            </header>
            {/* Footer for Large Screen */}
            <div className='mt-14'>

                <nav className="hidden lg:flex bg-white p-4 justify-end space-x-8">
                    <div className="flex flex-col items-center relative">
                        <button className="flex-1 relative">
                            <Link to={'/'}> <IoHomeSharp className='text-3xl text-black' /></Link>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center relative">
                        <button className="flex-1 relative">
                            <Link to={'/Post'}><PiVideoFill className='text-3xl text-black' /></Link>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center relative">
                        <button className="flex-1 relative">
                            <Link to={'/Network'}><LiaNetworkWiredSolid className='text-3xl text-black' /></Link>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center relative">
                        <button className="flex-1 relative">
                            <Link to={'/Notification'}><IoNotifications className='text-3xl text-black' /></Link>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center relative">
                        <button className="flex-1 relative">
                            <Link to={'/Jobs'}><PiHandbagSimpleFill className='text-3xl text-black' /></Link>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800" />
                        </button>
                    </div>
                </nav>
            </div>

            <div className="flex flex-1 overflow-hidden p-4">
                {/* Sidebar (User Info) */}
                <aside className="hidden lg:block w-1/4 p-4 bg-gray-100 border rounded-md m-2 h-screen">
                    <h2 className="text-lg font-semibold">User Info</h2>
                    <div className="flex items-center mt-2 text-start">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img
                                src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-1/424586757_374732075293499_5336115622331505308_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGCIHVqpynZzn_yx5L63aeGOCdY1E9yhP04J1jUT3KE_WOaASG0Oe9B1PtC-lWEEntzXJbWni3b98I2KFboUs1t&_nc_ohc=myF2Eey46mIQ7kNvgFS3VYD&_nc_zt=24&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=ApQJxPPTGCrBR9fSY6N2msk&oh=00_AYAMWEOG_Uok0yy9_ORDqlDnS5LTqfAOTAHvAkJHNmoudw&oe=6728142F"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p>Name: Faizan Ansari</p>
                            <p>Title: Beginner</p>
                            <p>Age: 21</p>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Posts Section */}
                        <div className="flex flex-col lg:flex-col space-y-4">
                            {/* Posts Section */}
                            <section className="flex-1 mb-4 p-4">
                                <div className="flex items-center mb-4 w-full">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/365387946_267010789398962_1416105461503148986_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHWsJ_0r337myjpnHUoB6bTVp9aZ4-q0FJWn1pnj6rQUhqqdnsCYtYH5sQPr5B50PSThcFuJgXqPDLBgAraDvl5&_nc_ohc=EPB4dMtYCecQ7kNvgHBLxNP&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&_nc_gid=AzCEwLG_-XM6yAiqL2Wv_QF&oh=00_AYBdoMGm45l4u47dxDG1qRgN1NT8XHzMivU5qNU2e2BRCQ&oe=67287964"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Faizan Ansari</h3>
                                        <h3>4 hours ago</h3>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <img
                                        src="https://media.istockphoto.com/id/505547667/photo/road-on-tropical-beach.jpg?s=612x612&w=0&k=20&c=kgKwbr9Q-nACb88JOQVVu1ouj-jfxJuyohxfMAWMaz4="
                                        alt="Post"
                                        className="rounded w-full"
                                    />
                                </div>
                                <div className='text-start mb-2'>
                                    <p><b>Ticket:</b> $5</p>
                                    <p>Family Allowed</p>
                                </div>
                                <p className='text-start'>This is the very beautiful place.</p>
                            </section>

                            {/* Repeat the section for other posts */}
                            <section className="flex-1 mb-4 p-4">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/347437897_919593629098359_1866670197653801389_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFpZMyxHb1QrF9wDwRywbqAWWVXMCsJ1GFZZVcwKwnUYRNmIcK8eWwHLJGmJGSC7C27PgiZsURqyFg5bWk94ek3&_nc_ohc=AiuakVFaNJMQ7kNvgFtEIVk&_nc_zt=23&_nc_ht=scontent.fkhi6-2.fna&_nc_gid=A6UCSKj3vAPCFMOaEFVujAW&oh=00_AYBPhdzLTVzOfHJfgSaYj52wxzENQDv9QQaNETmF_He5AQ&oe=672859EB"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold">Abc</h3>
                                </div>
                                <div className="mb-2">
                                    <img
                                        src="https://media.istockphoto.com/id/505547667/photo/road-on-tropical-beach.jpg?s=612x612&w=0&k=20&c=kgKwbr9Q-nACb88JOQVVu1ouj-jfxJuyohxfMAWMaz4="
                                        alt="Post"
                                        className="rounded w-full"
                                    />
                                </div>
                                <div className='text-start mb-2'>
                                    <p><b>Ticket:</b> $5</p>
                                    <p>Family Allowed</p>
                                </div>
                                <p className='text-start'>This is the very beautiful place.</p>
                            </section>

                            {/* Repeat more sections as needed */}
                        </div>

                        {/* Connections Section */}
                        <section className="flex-1 border rounded bg-white p-4 shadow mb-24 h-screen">
                            <h2 className="text-lg font-semibold">Connections</h2>
                            <div className="mt-4">
                                {/* Sample Connection */}
                                <div className="bg-gray-100 p-4 rounded shadow flex items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/347437897_919593629098359_1866670197653801389_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFpZMyxHb1QrF9wDwRywbqAWWVXMCsJ1GFZZVcwKwnUYRNmIcK8eWwHLJGmJGSC7C27PgiZsURqyFg5bWk94ek3&_nc_ohc=AiuakVFaNJMQ7kNvgFtEIVk&_nc_zt=23&_nc_ht=scontent.fkhi6-2.fna&_nc_gid=A6UCSKj3vAPCFMOaEFVujAW&oh=00_AYBPhdzLTVzOfHJfgSaYj52wxzENQDv9QQaNETmF_He5AQ&oe=672859EB"
                                            alt="Connection"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-bold">Connection 1</p>
                                    </div>
                                    <button className="text-blue-500">Show More</button>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow flex items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/336679994_618354926814220_3212879156435347795_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHsp8HBbH532GpIV-NG6fFIP9Fonb3_T84_0Widvf9Pzhhws97XRwNiuRpTLhEamLnxDOAK-BzzJRLHHiMzZldD&_nc_ohc=y_NyuNFQcosQ7kNvgFlsiqY&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&_nc_gid=A3x-ih9VhFGfe9L08sL0X-J&oh=00_AYADCCTB0_QO0jwvWSWUMpGHN_RC5L9lprzhlIwfFCOfYA&oe=67285192"
                                            alt="Connection"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-bold">Connection 1</p>
                                    </div>
                                    <button className="text-blue-500">Show More</button>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow flex items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/340108293_979305756815017_2902137289574060955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvlrtNql0XCqFb3VK7GPFjCJ3n05Az8lMInefTkDPyU24eJYBVV2yy45wyfnkYVmrdVBspfnJbvce1gLuiFFP1&_nc_ohc=J0Xvi7pnBzgQ7kNvgEjHNuh&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&_nc_gid=ADpBDab19CdFRHGFkzvLYmS&oh=00_AYDSBjPE-Jp9t9QYEBCfCyLNgnCeLGwgissF-ICX7qfSgQ&oe=672872B1"
                                            alt="Connection"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-bold">Connection 1</p>
                                    </div>
                                    <button className="text-blue-500">Show More</button>
                                </div>
                            </div>
                        </section>

                    </div>
                </main>
            </div>

            {/* Footer for Mobile View */}
            <footer className=" lg:hidden fixed bottom-0 w-full bg-gray-800 text-white p-3 flex justify-around rounded-t-xl">
                <div className="flex flex-col items-center space-y-1">
                    <Link to={'/'}> <IoHomeSharp className='text-3xl text-white' /></Link>
                    <p className='text-xs'>Home</p>
                </div>
                <div className="flex flex-col items-center space-y-1">
                    <Link to={'/Post'}><PiVideoFill className='text-3xl text-white' /></Link>
                    <p className='text-xs'>video</p>
                </div>
                <div className="flex flex-col items-center space-y-1">
                    <LiaNetworkWiredSolid to={'/'} className='text-3xl text-white' />
                    <p className='text-xs'>Network</p>
                </div>
                <div className="flex flex-col items-center space-y-1">
                    <Link to={'/Notification'}><IoNotifications className='text-3xl text-white' /></Link>
                    <p className='text-xs'>Notification</p>
                </div>
                <div className="flex flex-col items-center space-y-1">
                    <Link to={'/Jobs'}><PiHandbagSimpleFill className='text-3xl text-white' /></Link>
                    <p className='text-xs'>Jobs</p>
                </div>
            </footer>
        </div>
    );
};

export default Content;
