import { BrowserRouter as Router, Route, Routes, Link } from 'react-router';

import About from "./About.tsx"

import Home from "./App.tsx"

const AppRouter = () => {
    return (
        <Router>
            <nav className="bg-blue-500 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to="/"
                                className="hover:bg-blue-600 px-3 py-2 rounded-md transition duration-200"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="hover:bg-blue-600 px-3 py-2 rounded-md transition duration-200"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </Router>
    );
};

export default AppRouter;
