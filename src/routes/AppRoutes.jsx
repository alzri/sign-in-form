import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from '../pages/SignInPage';
import Profile from '../pages/profile/Profile';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signin />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;