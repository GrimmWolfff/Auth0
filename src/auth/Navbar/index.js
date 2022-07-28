import { lazy } from 'react';

export default function Navbar() {
    const Logout = lazy(() => import('./logoutButton'));
    const LoginButton = lazy(() => import('./loginButton'));

    return (
        <div style={{ width: "50%", height: "10vh", position: "relative", zIndex: "1" }}>
            <LoginButton />
            <Logout />
        </div>
    );
}