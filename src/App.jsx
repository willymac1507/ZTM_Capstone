import { Home } from './routes/home/Home';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './routes/navigation/Navigation';
import { SignIn } from './routes/sign-in/SignIn';

const Shop = () => {
    return <h1 className={'text-4xl'}>I am the shop page</h1>;
};

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path={'shop'} element={<Shop/>}/>
                <Route path={'sign-in'} element={<SignIn/>}/>
            </Route>
        </Routes>
    );
};

