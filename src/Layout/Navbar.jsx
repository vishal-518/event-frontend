import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, User, EvCharger, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

 useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowUserMenu(false);
    navigate('/login');
  };
  const hoverTimeout = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    {
      name: "Services",
      dropdown: [
        { name: "Wedding Planning", to: "/services/wedding" },
        { name: "Corporate Events", to: "/services/corporate" },
        { name: "Birthday Parties", to: "/services/birthday" },
        { name: "Decor & Design", to: "/services/decor" },
      ],
    },
    {
      name: "Events",
      dropdown: [
        { name: "Live Concerts", to: "/events/concerts" },
        { name: "Fashion Shows", to: "/events/fashion" },
        { name: "Destination Events", to: "/events/destination" },
      ],
    },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  const handleMouseEnter = (name) => {
    clearTimeout(hoverTimeout.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setOpenDropdown(null), 300);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-pink-200">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="flex items-center gap-2">
          <Link to="/" onClick={scrollToTop}>
            <img
              src="/genix_events.png"
              alt="Genix Events Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-gray-800 hover:text-pink-600 font-medium transition text-sm">
                  {link.name}
                  <ChevronDown size={14} className="ml-1" />
                </button>

                {openDropdown === link.name && (
                  <div className="absolute top-7 left-0 bg-white shadow-lg rounded-xl py-2 w-44 animate-fadeIn">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="block px-4 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-600 text-sm transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.to}
                onClick={link.name === "Home" ? scrollToTop : undefined}
                className="text-gray-800 hover:text-pink-600 font-medium transition text-sm"
              >
                {link.name}
              </Link>
            )
          )}

          <Link
            to="/booknow"
            className="ml-3 bg-pink-600 text-white px-4 py-1.5 rounded-full font-medium text-sm hover:bg-pink-700 transition"
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
                      className="flex items-center space-x-2 w-full px-5 py-2 text-dark hover:bg-pink-50 hover:text-primary transition"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to='/login'
                className=" bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="flex flex-col items-center space-y-3 py-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <details key={link.name} className="w-full text-center">
                  <summary className="cursor-pointer text-gray-800 hover:text-pink-600 font-medium text-sm">
                    {link.name}
                  </summary>
                  <div className="flex flex-col mt-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 hover:text-pink-600 py-1 text-sm transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => {
                    setIsOpen(false);
                    if (link.name === "Home") scrollToTop();
                  }}
                  className="text-gray-800 hover:text-pink-600 font-medium text-sm transition"
                >
                  {link.name}
                </Link>
              )
            )}

            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="bg-pink-600 text-white px-5 py-1.5 rounded-full font-medium text-sm hover:bg-pink-700 transition"
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
