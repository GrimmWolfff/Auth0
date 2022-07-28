npm install @auth/auth0-react
import { useAuth0 } from '@auth/auth0-react';
const { user, loginwithredirect, logout, isAuthenticated, isLoading } = useAuth0();

user field:
nickname, email, email_verified, name, picture, updated_at, sub


