import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './_custom.scss';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';
import Header from './components/Header';
import NewsPage from './components/NewsPage';
import SportsPage from './components/SportsPage';
import PodcastsPage from './components/PodcastsPage';
import VideosPage from './components/VideosPage';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Search from './components/Search';
import SignIn from './components/SignIn';
import { useImmerReducer } from 'use-immer';
import 'regenerator-runtime/runtime';
import ViewSinglePost from './components/ViewSinglePost';

function Main() {
    const initialState = {
        isSearchOpen: false,
        isSignInOpen: false,
    };

    function ourReducer(draft, action) {
        switch (action.type) {
            case 'openSearch':
                draft.isSearchOpen = true;
                break;
            case 'closeSearch':
                draft.isSearchOpen = false;
                break;
            case 'openSignIn':
                draft.isSignInOpen = true;
                break;
            case 'closeSignIn':
                draft.isSignInOpen = false;
                break;
        }
    }

    const [state, dispatch] = useImmerReducer(ourReducer, initialState);
    return (
        <>
            <StateContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route path="/" exact>
                                <NewsPage />
                            </Route>
                            <Route path="/sports">
                                <SportsPage />
                            </Route>
                            <Route path="/podcasts">
                                <PodcastsPage />
                            </Route>
                            <Route path="/videos">
                                <VideosPage />
                            </Route>
                            <Route path="/subscribe">
                                <Subscribe />
                            </Route>
                            <Route path="/:id">
                                <ViewSinglePost />
                            </Route>
                        </Switch>
                        <CSSTransition
                            timeout={330}
                            in={state.isSearchOpen}
                            classNames="search-overlay"
                            unmountOnExit
                        >
                            <div className="search-overlay">
                                <Search />
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            timeout={330}
                            in={state.isSignInOpen}
                            classNames="search-overlay"
                            unmountOnExit
                        >
                            <div className="search-overlay">
                                <SignIn />
                            </div>
                        </CSSTransition>
                        <Footer />
                    </BrowserRouter>
                </DispatchContext.Provider>
            </StateContext.Provider>
        </>
    );
}

ReactDOM.render(<Main />, document.querySelector('#app'));
