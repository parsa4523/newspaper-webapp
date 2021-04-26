import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Posts from './Posts';

function SportsPage() {
    return (
        <div className="container-lg">
            <div className="row my-4">
                <div className="col-12 col-md-7 py-1">
                    <Carousel />
                </div>
                <div className="col-12 col-md-5 py-1">
                    <span className="h3 text-success d-block mb-3">
                        Primer League &#8250;
                    </span>
                    <div className="pr-5 border-bottom">
                        <small className="text-muted d-block my-2">
                            Finished
                        </small>
                        <div className="d-flex justify-content-between align-items-center font-weight-bold mb-1">
                            <span>Chelsea</span>
                            <span className="h4">1</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center font-weight-bold mb-1">
                            <p>Licester city</p>
                            <p className="h4">0</p>
                        </div>
                    </div>
                    <div className="pr-5 border-bottom">
                        <small className="text-muted d-block my-2">
                            20 oct 6:30 pm
                        </small>
                        <div className="d-flex justify-content-between align-items-center font-weight-bold mb-1">
                            <span>Manchester united</span>
                            <span className="h4">&#8210;</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center font-weight-bold mb-1">
                            <p>Wolverchamptopn</p>
                            <p className="h4">&#8210;</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Posts />
            </div>
        </div>
    );
}

export default SportsPage;
