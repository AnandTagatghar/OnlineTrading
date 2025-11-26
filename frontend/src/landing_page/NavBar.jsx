import { useRef } from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const mobileMenuRef = useRef(null);

  function hamburgerButtonHandler() {
    mobileMenuRef.current.classList.toggle("hidden");
  }

  return (
    <div className="border-b-gray-400 border-b-1">
      <nav className="p-4">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                id="navbar-hamburger"
                className="text-black inline-flex items-center justify-center p-2 rounded-md hover:rounded hover:border focus:outline-none focus:ring-2 focus:ring-offset-2"
                aria-expanded="false"
                onClick={hamburgerButtonHandler}
              >
                <span className="sr-only">Open main menu</span>
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:justify-start">
              <div className="text-black font-bold text-2xl">
                <NavLink to="/">
                  <img src="logo.svg" alt="Logo" style={{ width: "150px" }} />
                </NavLink>
              </div>
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    (isActive ? "text-blue-500 " : "") +
                    "text-black hover:border hover:rounded px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Singup
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    (isActive ? "text-blue-500 " : "") +
                    "text-black hover:border hover:rounded px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  About
                </NavLink>

                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    (isActive ? "text-blue-500 " : "") +
                    "text-black hover:border hover:rounded px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Product
                </NavLink>

                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    (isActive ? "text-blue-500 " : "") +
                    "text-black hover:border hover:rounded px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Pricing
                </NavLink>

                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    (isActive ? "text-blue-500 " : "") +
                    "text-black hover:border hover:rounded px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Support
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className="hidden" ref={mobileMenuRef}>
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink
              to="/signup"
              className={(isActive) =>
                "text-black hover:border hover:rounded block px-3 py-2 rounded-md text-base font-medium" +
                (!isActive ? "text-blue-500" : "")
              }
            >
              Singup
            </NavLink>

            <NavLink
              to="/about"
              className={(isActive) =>
                (isActive ? "text-blue-500" : "") +
                "text-black hover:border hover:rounded block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/product"
              className={(isActive) =>
                (isActive ? "text-blue-500" : "") +
                "text-black hover:border hover:rounded block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Product
            </NavLink>

            <NavLink
              to="/pricing"
              className={(isActive) =>
                (isActive ? "text-blue-500" : "") +
                "text-black hover:border hover:rounded block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/support"
              className={(isActive) =>
                (isActive ? "text-blue-500" : "") +
                "text-black hover:border hover:rounded block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Support
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
