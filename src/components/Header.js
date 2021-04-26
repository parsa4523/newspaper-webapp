import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import DispatchContext from '../DispatchContext';

function Header() {
    const appDispatch = useContext(DispatchContext);
    return (
        <>
            <header className="mb-3">
                <div className="container-lg py-4">
                    <div className="row flex">
                        <div className="col-md-3 d-none d-md-block"></div>
                        <h1 className="col-12 col-md-6 text-center noticia-font font-w700">
                            The Newspaper
                        </h1>
                        <div className="col-3 d-none d-md-flex justify-content-end align-items-center">
                            <div
                                onClick={e => {
                                    appDispatch({ type: 'openSignIn' });
                                }}
                                className="btn btn-light mr-3"
                            >
                                sign in
                            </div>
                            <Link
                                to="subscribe"
                                className="btn btn-outline-dark"
                            >
                                Subscribe
                            </Link>
                        </div>
                    </div>
                </div>
                <NavBar />
            </header>
        </>
    );
}

export default Header;
