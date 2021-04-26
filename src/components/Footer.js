import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="border-top py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col d-flex flex-column">
                        <h3>The Newspaper</h3>
                        <div className="h3">
                            <Link>
                                <i className="bx bxl-youtube"></i>
                            </Link>{' '}
                            <Link>
                                <i className="bx bxl-twitter"></i>
                            </Link>{' '}
                            <Link>
                                <i className="bx bxl-facebook-circle"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled">
                            <li>
                                <Link className="text-muted">News</Link>
                            </li>
                            <li>
                                <Link className="text-muted">Sports</Link>
                            </li>
                            <li>
                                <Link className="text-muted">Bussiness</Link>
                            </li>
                            <li>
                                <Link className="text-muted">Opnion</Link>
                            </li>
                            <li>
                                <Link className="text-muted">Culture</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <span className="font-weight-bold">Subscribe</span>
                        <ul className="list-unstyled">
                            <li>
                                <Link className="text-muted">
                                    Why Subscribe
                                </Link>
                            </li>
                            <li>
                                <Link className="text-muted">
                                    Subscribtion Bundles
                                </Link>
                            </li>
                            <li>
                                <Link className="text-muted">
                                    Gift Subscription
                                </Link>
                            </li>
                            <li>
                                <Link className="text-muted">
                                    Home Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <span className="font-weight-bold">
                            Products and Services
                        </span>
                        <ul className="list-unstyled">
                            <li>
                                <Link className="text-muted">Epaper</Link>
                            </li>
                            <li>
                                <Link className="text-muted">Ebooks</Link>
                            </li>
                            <li>
                                <Link className="text-muted">
                                    Newspaper Archive
                                </Link>
                            </li>
                            <li>
                                <Link className="text-muted">Email Alerts</Link>
                            </li>
                            <li>
                                <Link className="text-muted">
                                    Exclusive jobs
                                </Link>
                            </li>
                            <li>
                                <Link className="text-muted">
                                    Article Archive
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <span className="font-weight-bold">About Us</span>
                        <ul className="list-unstyled">
                            <li>
                                <Link className="text-muted">Advertise</Link>
                            </li>
                            <li>
                                <Link className="text-muted">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="text-muted">Cariers</Link>
                            </li>
                            <li>
                                <Link className="text-muted">
                                    The Newspaper trust
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
