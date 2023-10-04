import { CategoriesMenu } from '../../components/categories-menu/CategoriesMenu';
import { Outlet } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <div className={'directory'}>
                <Outlet/>
                <CategoriesMenu/>
            </div>
        </>

    );
};