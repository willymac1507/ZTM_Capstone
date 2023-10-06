import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import CrwnLogo from '../../assets/crown.svg?react';

export const Navigation = () => {
    return (
        <>
            <div className={'navigation'}>
                <Link className={'logo-container'} to={'/'}>
                    <div><CrwnLogo className={'logo'}/></div>
                </Link>
                <div className="nav-links-container">
                    <Link className={'nav-link'} to={'/shop'}>SHOP</Link>
                    <Link className={'nav-link'} to={'/contact'}>CONTACT</Link>
                    <Link className={'nav-link'} to={'/auth'}>SIGN IN</Link>

                </div>
            </div>
            <Outlet/>
        </>
    );
};