import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

//header component for app
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Crockett Printing</h1>
          </Link>
          <p className="m-0">Your One Stop Print Shop</p>
        </div>
        <div>
          <Link className="text-light" to="/">
          <h2 className="m-0">Home</h2>
            </Link>
        </div>
        <div>
          <Link className="text-light" to="/products">
          <h2 className="m-0">Products</h2>
            </Link>
        </div>
        <div>
          <Link className="text-light" to="/messages">
          <h2 className="m-0">Messages</h2>
            </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
