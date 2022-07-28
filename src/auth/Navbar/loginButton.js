import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <button className='button' onClick={() => loginWithRedirect()} style={{
            display : `${isAuthenticated ? "none" : ""}`,
            position: 'absolute'}}>
            Log In
        </button>
    );
}

export default LoginButton;
