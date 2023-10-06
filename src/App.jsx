import { Home } from './routes/home/Home';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './routes/navigation/Navigation';
import { Auth } from './routes/Auth/Auth';

const Shop = () => {
    return <h1 className={'text-4xl'}>I am the shop page</h1>;
};

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path={'shop'} element={<Shop/>}/>
                <Route path={'auth'} element={<Auth/>}/>
            </Route>
        </Routes>
    );
};

