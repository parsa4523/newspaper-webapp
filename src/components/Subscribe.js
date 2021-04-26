import React, { useEffect } from 'react';

function Subscribe() {
    return (
        <>
            <div className="bg-dark">
                <div className="container-lg py-5">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="h2 text-info">
                                Quality journalism from an Irish perspective.
                            </h2>
                            <h3 className="h4 text-white">
                                Unlimited access wherever you are, on any
                                device.
                            </h3>
                        </div>
                        <div className="col-5">
                            <img
                                className="w-100"
                                src="https://www.irishtimes.com/assets/images/subscriptions/digital.png"
                                alt="test"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md">
                        <div className="card shadow-sm h-100">
                            <div className="card-header bg-dark text-white text-center">
                                <i class="bx bx-desktop display-2"></i>
                                <span className="d-block">
                                    Unlimited Website
                                </span>
                                <span className="d-block">
                                    + News App Access
                                </span>
                                <h4>Standard</h4>
                                <br />
                                <span className="d-block h3">3$</span>
                                <span>USD per week</span>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <ul>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        Unlimited access to IrishTimes.com + iOS
                                        &amp; Android news apps
                                    </li>

                                    <li>
                                        <i class="fas fa-check"></i>
                                        Exclusive subscriber only articles,
                                        emails &amp; online comment{' '}
                                        <span>*</span>
                                    </li>

                                    <li>
                                        <i class="fas fa-check"></i>
                                        Subscriber rewards, events &amp; offers
                                        including 10% extra off Rewarding Times
                                    </li>

                                    <li>
                                        <i class="fas fa-check"></i>
                                        Over 160 years of Irish Times archives
                                    </li>

                                    <li>
                                        <i class="fas fa-check"></i>
                                        The Irish Times Crossword Club
                                    </li>
                                </ul>

                                <button className="btn btn-outline-dark btn-lg mx-auto d-block mt-auto">
                                    Get Standard
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md">
                        <div className="card shadow-sm h-100">
                            <div className="card-header bg-dark text-white text-center">
                                <i class="bx bx-desktop display-2"></i>
                                <span className="d-block">
                                    All Digital Access + ePaper digital replica
                                </span>

                                <h4>Premium</h4>
                                <br />
                                <span className="d-block h3">4.50$</span>
                                <span>USD per week</span>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <ul>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        Unlimited access to IrishTimes.com + iOS
                                        &amp; Android news apps
                                    </li>

                                    <li>
                                        <i class="fas fa-check"></i>
                                        Exclusive subscriber only articles,
                                        emails &amp; online comment{' '}
                                        <span>*</span>
                                    </li>

                                    <li>
                                        <i class="fas fa-check"></i>
                                        Subscriber rewards, events &amp; offers
                                        including 10% extra off Rewarding Times
                                    </li>

                                    <li>
                                        <i class="fas fa-check"></i>
                                        Over 160 years of Irish Times archives
                                    </li>

                                    <li>
                                        <i class="fas fa-check"></i>
                                        The Irish Times Crossword Club
                                    </li>

                                    <li class="check">
                                        <i class="fas fa-check"></i>
                                        <span>The ePaper,</span> Read The Irish
                                        Times exactly as it appears in print
                                        wherever you are
                                    </li>
                                </ul>

                                <button className="btn btn-dark btn-lg mx-auto d-block mt-auto">
                                    Get Standard
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-1"></div>
                </div>
            </div>
        </>
    );
}

export default Subscribe;
