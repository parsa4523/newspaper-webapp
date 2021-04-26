import React, { useEffect, useContext } from 'react';
import DispatchContext from '../DispatchContext';

function SignIn() {
    const appDispatch = useContext(DispatchContext);
    return (
        <div className="container position-relative">
            <i
                onClick={e => {
                    appDispatch({ type: 'closeSignIn' });
                }}
                class="bx bx-x live-search-close text-muted"
            ></i>
            <div className="live-search shadow-lg p-5">
                <h4 className="h3 mb-3">Sign In</h4>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        ></input>
                        <small id="emailHelp" class="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                        ></input>
                    </div>
                    <div class="form-group form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                        ></input>
                        <label class="form-check-label" for="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
