import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
                    <h1 className="text-6xl font-bold text-gray-700">404</h1>
                    <p className="mt-4 text-xl text-gray-600">Oops! Page Not Found</p>
                    <p className="mt-2 text-gray-500">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to='/' className="mt-6 px-4 py-2 bg-red-700 text-white rounded white transition duration-300">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </>
    )
}