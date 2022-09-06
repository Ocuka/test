import { Route, Routes, } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/redux-store'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { getAuthUserProfile } from './redux/auth-reducer'
import Preloader from "./components/Common/Preloader/Preloader";
import { initializeApp } from './redux/app-reducer'
import WithSuspense from "./HOC/WithSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


class App extends React.Component {

    componentDidUpdate() {
        this.props.getAuthUserProfile(this.props.userId)
    }

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {

        if (!this.props.initialized) {
            return <Preloader />
        } else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Routes>

                            <Route
                                path="dialogs/*"
                                element={WithSuspense(DialogsContainer)} />

                            <Route
                                path="profile" element={WithSuspense(ProfileContainer)}>
                                <Route path=":userId" element={WithSuspense(ProfileContainer)} />
                            </Route>
                            <Route path='news' element={<News />} />
                            <Route path='music' element={<Music />} />
                            <Route path='users' element={<UsersContainer />} />
                            <Route path='settings' element={<Settings />} />
                            <Route path='login' element={<Login />} />
                        </Routes>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    userId: state.auth.id,
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, { initializeApp, getAuthUserProfile })(App)

const MyJSApp = (props) => {
    return <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <AppContainer />
        </BrowserRouter>
    </Provider>
}

export default MyJSApp
