import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header-section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
              <img
                src="assets/logo.svg"
                width={40}
                className="img-fluid"
                alt=""
              />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/create"
                    className="nav-link active text-white dropbtn"
                    aria-current="page"
                  >
                    <div className="dropdown">
                      <img
                        src="assets/create.svg"
                        width={30}
                        className="img-fluid"
                        alt=""
                      />
                      <p>Create</p>

                      <div className="dropdown-content">
                        <Link to="/create">DEMO iNET</Link>
                        <Link to="/content">CONTENT</Link>
                        <Link to="/">SELECT INFO </Link>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    <img
                      src="assets/my-assets.svg"
                      width={30}
                      className="img-fluid"
                      alt=""
                    />
                    <p>My Assets</p>
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    to="/fuse"
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    <img
                      src="assets/fuse.svg"
                      width={30}
                      className="img-fluid"
                      alt=""
                    />
                    <p>Fuse</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    <img
                      src="assets/market.svg"
                      width={30}
                      className="img-fluid"
                      alt=""
                    />
                    <p>Market</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    <img
                      src="assets/dapps.svg"
                      width={30}
                      className="img-fluid"
                      alt=""
                    />
                    <p>Dapps</p>
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/leaderboard"
                  >
                    <img
                      src="assets/leader-board.svg"
                      width={30}
                      className="img-fluid"
                      alt=""
                    />
                    <p>Leaderboard</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    <img
                      src="assets/about.svg"
                      width={30}
                      className="img-fluid"
                      alt=""
                    />
                    <p>About</p>
                  </a>
                </li>
              </ul>
              <div className="socials-icons d-flex flex-wrap">
                <div className="icon">
                  <a href="/">
                    <img
                      src="assets/discord-active.svg"
                      width={30}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="icon">
                  <a href="/">
                    <img
                      src="assets/twitter-active.svg"
                      width={30}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="icon">
                  <a href="/">
                    <img
                      src="assets/telegram-active.svg"
                      width={30}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <button type="button" className="login-btn btn">
                SIGN IN
              </button>
              <button type="button" className="login-btn btn">
                SIGN UP
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
