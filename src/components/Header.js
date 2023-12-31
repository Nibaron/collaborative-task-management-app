import { Link, NavLink, useNavigate } from "react-router-dom";

import logo from "../assets/image/checklist_2666505.png";
import profile from "../assets/image/profile.png";

import { useState, useEffect } from "react";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    );

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));

        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const navigate = useNavigate();

    const handleLogout = () => {
        return navigate('/login');
    }

    const handleProfile = () => {
        return navigate('/profile');
    }

    const activeHeader =
        "text-base block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
    const inactiveHeader =
        "text-base block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

    return (
        <header>
            <nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
                    {/* Logo and Link part on the left */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Task Management
                        </span>
                    </Link>

                    {/* Middle section for Home, Popular, Top, Upcoming */}
                    <div id="nav" className="hidden md:flex">
                        <ul className="flex space-x-4">
                            <li>
                                <NavLink
                                    to="/addtask"
                                    className={({ isActive }) =>
                                        isActive ? activeHeader : inactiveHeader
                                    }
                                    aria-current="page"
                                >
                                    ADD Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/team/1"
                                    className={({ isActive }) =>
                                        isActive ? activeHeader : inactiveHeader
                                    }
                                >
                                    Team 1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/team/2"
                                    className={({ isActive }) =>
                                        isActive ? activeHeader : inactiveHeader
                                    }
                                >
                                    Team 2
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/team/3"
                                    className={({ isActive }) =>
                                        isActive ? activeHeader : inactiveHeader
                                    }
                                >
                                    Team 3
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Right section for Dark Mode, Profile, and Logout */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
                            type="button"
                            data-toggle-dark="light"
                            className="flex items-center p-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            {darkMode ? (
                                <svg
                                    aria-hidden="true"
                                    data-toggle-icon="sun"
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    aria-hidden="true"
                                    data-toggle-icon="moon"
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 a0 0010.586 10.586z"></path>
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={handleProfile}
                            data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
                            type="button"
                            data-toggle-dark="light"
                            className="flex items-center p-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            <img src={profile} alt="" className="w-6 h-6" />
                        </button>

                        <button
                            onClick={handleLogout}
                            data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
                            type="button"
                            data-toggle-dark="light"
                            className="flex items-center p-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
