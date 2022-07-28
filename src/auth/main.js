import { lazy } from 'react';

export default function Main() {
    const Profile = lazy(() => import('./Profile'));
    const Navbar = lazy(() => import('./Navbar'));
    return (
        <div>
            <Navbar />
            <Profile />
        </div>
    )
}