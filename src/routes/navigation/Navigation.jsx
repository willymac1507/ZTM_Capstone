import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import CrwnLogo from '../../assets/crown.svg?react';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';

export const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    };
    console.log(currentUser ? currentUser.uid : null);
    return (
        <>
            <div className={'navigation'}>
                <Link className={'logo-container'} to={'/'}>
                    <div><CrwnLogo className={'logo'}/></div>
                </Link>
                <div className="nav-links-container">
                    <Link className={'nav-link'} to={'/shop'}>SHOP</Link>
                    <Link className={'nav-link'} to={'/contact'}>CONTACT</Link>
                    {currentUser ? (
                            <span className={'nav-link'} onClick={signOutHandler}>SIGN OUT</span>)
                        : (<Link className={'nav-link'} to={'/auth'}>SIGN IN</Link>)}

                </div>
            </div>
            <Outlet/>
        </>
    );
};