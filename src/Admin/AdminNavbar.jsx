import React, { useState } from 'react';
import {
    Home,
    CalendarCheck,
    Users,
    BarChart2,
    Settings,
    Menu,
    X,
    User
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';

const IconDashboard = Home;
const IconBookings = CalendarCheck;
const IconAnalytics = BarChart2;
const IconSettings = Settings;
const IconMenu = Menu;
const IconClose = X;
const IconUser = User;
const IconContactUser = Users;


const navLinks = [
    { name: 'Dashboard', Link: '/admin', icon: IconDashboard, current: false },
    { name: 'Upload Images', Link: '/admin/event-image-uplode', icon: IconSettings, current: false },
    { name: 'Show Images', Link: '/admin/show-uplode-image', icon: IconAnalytics, current: false },
    { name: 'Bookings', Link: '/admin/show-booking', icon: IconBookings, current: false },
   { name: 'Contact User', Link: '/admin/contact-event', icon: IconContactUser, current: false },
   { name: 'All User', Link: '/admin/alluser', icon: IconUser, current: false },
];

const AdminNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const linkStyle = (isCurrent, isMobile = false) =>
        `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out ${isCurrent
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
            : 'text-gray-300 hover:bg-gray-700 hover:text-teal-400'
        } ${isMobile ? 'w-full justify-start' : ''}`;

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-gray-900 shadow-xl shadow-black/30 border-b border-gray-800">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="shrink-0">
                        <span className="text-xl font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-indigo-500">
                            EVENT-ADMIN
                        </span>
                    </div>
                    <div className="hidden md:flex md:space-x-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.Link}
                                className={linkStyle(item.current)}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition">
                                <span className="sr-only">View profile</span>
                                <NavLink to="/admin/profile" >
                                <IconUser className="h-6 w-6" />
                                </NavLink>
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden border-t border-gray-800 pb-3 pt-2"
                >
                    <div className="space-y-1 px-2">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.Link}
                                className={linkStyle(item.current, true)}
                                aria-current={item.current ? 'page' : undefined}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default AdminNavbar;