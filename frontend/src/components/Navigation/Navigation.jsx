import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';

const Navigation = props => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.currentUser);

    const handleLogOut = e => {
        dispatch(sessionActions.logout());
    };

    const handleDemoLogin = e => {

    };

    let sessionLinks;
    if (currentUser) {
        sessionLinks = (
            <ul id="account-buttons">
                <li><p className="button-light">Account</p></li>
                {/* <button onClick={handleLogOut}>Log Out</button> */}
                <li><p className="button-dark" onClick={handleLogOut}>Log Out</p></li>
            </ul>
        );
    } else {
        sessionLinks = (
            <ul id="account-buttons">
                <li><NavLink to='/login' className="button-light">Log In</NavLink></li>
                <li><NavLink to='/signup' className="button-dark">Sign Up</NavLink></li>
            </ul>
        );
    }
    
    return (
        <>
            <header>
                <div id="navigation">
                    <NavLink to="/" id="logo">heap<span id="logo-bold">overflow</span></NavLink>
                    {sessionLinks}
                </div>
            </header>
        </>
    );
};

export default Navigation;