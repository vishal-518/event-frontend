import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User, LogOut, EvCharger } from "lucide-react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowUserMenu(false);
    window.location.href = '/';
  };

  const navLinks = [
    { name: "Home", Link: '/', },
    { name: "About", href: "#about" },
    {
      name: "Services",
      dropdown: [
        { name: "Wedding Planning", href: "#wedding" },
        { name: "Corporate Events", href: "#corporate" },
        { name: "Birthday Parties", href: "#birthday" },
        { name: "Decor & Design", href: "#decor" },
      ],
    },
    {
      name: "Events",
      dropdown: [
        { name: "Live Concerts", href: "#concerts" },
        { name: "Fashion Shows", href: "#fashion" },
        { name: "Destination Events", href: "#destination" },
      ],
    },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md border-b border-pink-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-primary tracking-wide">
          <Link to='/'>
            Genix<span className="text-dark">Events</span>
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center text-dark hover:text-primary font-medium transition">
                  {link.name}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {openDropdown === link.name && (
                  <div className="absolute top-8 left-0 bg-white shadow-lg rounded-xl py-2 w-48 animate-fadeIn">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        to={item.Link}
                        className="block px-4 py-2 text-dark hover:bg-pink-50 hover:text-primary transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.Link || link.href}
                className="text-dark hover:text-primary font-medium transition"
              >
                {link.name}
              </Link>
            )
          )}

          {/* Auth Section */}
          <div className="flex items-center space-x-2">
            <Link to='/book-event'
              className="bg-primary  px-5 py-2 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition"
            >
              Book Now
            </Link>

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-blue-500 text-white px-2 py-2 cursor-pointer rounded-full font-semibold hover:bg-blue-600 transition"
                >
                  <User size={18} />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 top-12 bg-white shadow-lg rounded-xl py-2 w-40">
                    {/* <Link to='/profile'>
                      <button
                        onClick={()=>setShowUserMenu(!showUserMenu)}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-dark hover:bg-pink-50 hover:text-primary transition"
                      >
                        <CgProfile size={16} />
                        <span>Show Profile</span>
                      </button>
                    </Link> */}
                    <Link to='/show-event'>
                      <button
                        onClick={()=>setShowUserMenu(!showUserMenu)}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-dark hover:bg-pink-50 hover:text-primary transition"
                      >
                        <EvCharger size={16} />
                        <span>Show Event</span>
                      </button>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-dark hover:bg-pink-50 hover:text-primary transition"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to='/login'
                className="bg-blue-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <details key={link.name} className="w-full text-center">
                  <summary className="cursor-pointer text-dark hover:text-primary font-medium">
                    {link.name}
                  </summary>
                  <div className="flex flex-col mt-2">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-700 hover:text-primary py-1 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={link.name}
                  to={link.Link || link.href}
                  className="text-dark hover:text-primary font-medium transition"
                >
                  {link.name}
                </Link>
              )
            )}

            <Link to='/book-event'
              className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Book Now
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link to='/auth'
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
