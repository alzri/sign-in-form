import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from '../pages/SignInPage';
import Profile from '../pages/profile/Profile';
import PasswordForgotten from '../pages/password-forgotten/PasswordForgotten';
import ConfirmPage from '../pages/confirm/Confirm';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signin />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/password-forgotten' element={<PasswordForgotten />}></Route>
                <Route path='/confirm' element={<ConfirmPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;