import React, { useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import DispatchContext from '../DispatchContext';

function NavBar() {
    const appDispatch = useContext(DispatchContext);
    return (
        <nav className="border-bottom">
            <div className="container-lg">
                <div className="row">
                    <ul className="col-12 col-md-7 d-flex justify-content-between list-unstyled mb-0">
                        <li>
                            <NavLink
                                to="/"
                                exact
                                activeClassName="nav-item--active"
                                className="nav-item pb-3 mx-2 text-decoration-none"
                            >
                                News
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/sports"
                                activeClassName="nav-item--active"
                                className="nav-item pb-3 mx-2 text-decoration-none"
                            >
                                Sports
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/bussiness"
                                activeClassName="nav-item--active"
                                className="nav-item pb-3 mx-2 text-decoration-none"
                            >
                                Bussiness
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/opinion"
                                activeClassName="nav-item--active"
                                className="nav-item pb-3 mx-2 text-decoration-none"
                            >
                                Opinion
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lifestyle"
                                activeClassName="nav-item--active"
                                className="nav-item pb-3 mx-2 text-decoration-none"
                            >
                                Life Style
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/culture"
                                activeClassName="nav-item--active"
                                className="nav-item pb-3 mx-2 text-decoration-none"
                            >
                                Culture
                            </NavLink>
                        </li>
                    </ul>
                    <div className="col-1"></div>
                    <ul className="col-4 d-none d-md-flex justify-content-between list-inline mb-0">
                        <li>
                            <div
                                onClick={e => {
                                    appDispatch({ type: 'openSearch' });
                                }}
                                className="nav-item pb-3 mx-2 text-decoration-none pointer d-inline"
                            >
                                <i className="bx bx-search-alt align-middle"></i>{' '}
                                Search
                            </div>
                        </li>

                        <li>
                            <Link
                                to="/podcasts"
                                activeClassName="nav-item--active"
                                className="nav-item pb-3 mx-2 text-decoration-none"
                            >
                                <i className="bx bxs-microphone-alt align-middle"></i>{' '}
                                Podcast
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/videos"
                                activeClassName="nav-item--active"
                                className="nav-item pb-3 mx-2 text-decoration-none"
                            >
                                <i className="bx bx-video align-middle"></i>{' '}
                                Videos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
