import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from '../pages/SignInPage';
import Profile from '../pages/profile/Profile';
import PasswordForgotten from '../pages/password-forgotten/PasswordForgotten';
import ConfirmPage from '../pages/confirm/Confirm';
import Newpassword from '../pages/new-password/NewPassword';
import PasswordChanged from '../pages/password-changed/PasswordChanged';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signin />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/password-forgotten' element={<PasswordForgotten />}></Route>
                <Route path='/confirm' element={<ConfirmPage />}></Route>
                <Route path="/new-password" element={<Newpassword />}></Route>
                <Route path="/password-changed" element={<PasswordChanged />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;