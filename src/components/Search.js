import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useImmer } from 'use-immer';
import DispatchContext from '../DispatchContext';

function Search() {
    const appDispatch = useContext(DispatchContext);
    const [state, setState] = useImmer({
        searchTerm: '',
        results: [],
        show: 'neither',
        requestCount: 0,
    });

    useEffect(() => {
        if (state.searchTerm.trim()) {
            setState(draft => {
                draft.show = 'loading';
            });
            const delay = setTimeout(() => {
                setState(draft => {
                    draft.requestCount++;
                });
            }, 1000);
            return () => clearTimeout(delay);
        } else {
            setState(draft => {
                draft.show = 'neither';
            });
        }
    }, [state.searchTerm]);

    useEffect(() => {
        if (state.requestCount) {
            setState(draft => {
                draft.show = 'results';
            });
        }
    }, [state.requestCount]);

    function handleInput(e) {
        const value = e.target.value;
        setState(draft => {
            draft.searchTerm = value;
        });
    }
    return (
        <div className="container position-relative">
            <i
                onClick={e => {
                    appDispatch({ type: 'closeSearch' });
                }}
                class="bx bx-x live-search-close text-muted"
            ></i>
            <div class="live-search shadow-lg">
                <form className="d-flex align-items-center" action="">
                    <input
                        onChange={handleInput}
                        type="text"
                        placeholder="Search anything here."
                        className="live-search-field"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    ></input>
                    <i class="live-search-icon bx bx-search text-muted"></i>
                </form>
                <div
                    className={
                        'live-search-results row mx-4 ' +
                        (state.show == 'results'
                            ? 'live-search-results--visible'
                            : '')
                    }
                >
                    <ul className="list-unstyled w-100">
                        <li className="border-bottom p-2 search-item">
                            <Link className="h5 text-decoration-none">
                                Gorgeous garden and an old world study in
                                Rathgar for €1.2m{' '}
                                <span class="badge badge-danger float-right">
                                    News
                                </span>
                            </Link>
                        </li>
                        <li className="border-bottom p-2 search-item">
                            <Link className="h5 text-decoration-none">
                                {' '}
                                The Music Quiz: Pick out the pop star who once
                                worked for Marvel Comics{' '}
                                <span class="badge badge-info float-right">
                                    Bussiness
                                </span>
                            </Link>
                        </li>
                        <li className="border-bottom p-2 search-item">
                            <Link className="h5 text-decoration-none">
                                {' '}
                                Kathy Sheridan: Journalists must stop giving
                                legs to fake news stories{' '}
                                <span class="badge badge-success float-right">
                                    Sports
                                </span>
                            </Link>
                        </li>
                        <li className="p-2 search-item">
                            <Link className="h5 text-decoration-none">
                                {' '}
                                Fintan O'Toole: English nationalism is too naive
                                to know its limits{' '}
                                <span class="badge badge-warning float-right">
                                    Life Style
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Search;
