import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

    const nabItem = (
        <>
        
        <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/collages'>Collages</Link>
                
              </li>
              <li>
                <Link to='/admission'>Admission</Link>
              </li>
              <li>
                <Link to='/myCollage'>My Collage</Link>
              </li>
        </>
    );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {nabItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Choose Your Dream</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {nabItem}
          </ul>
        </div>
        <div className="navbar-end">
        {user && 
            <div className="me-8 text-4xl">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://i.ibb.co/p1pyJP1/chef-5.jpg" />
                </div>
              </div>
            </div>
          }
        </div>
        <div>
          {user ? 
            <button onClick={handleLogOut} className="btn me-5">
              Log Out
            </button>
          : 
            <Link to="/login" className="btn me-5">
              <button className="btn">Login</button>
            </Link>
          }
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
