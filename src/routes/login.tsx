/**
 * @description This file contains the Login route component, which is responsible for rendering the login page.
 * @module routes/Login
 * @author Junior Moremong, 202001442
 */

import { createFileRoute } from "@tanstack/react-router";
import useAuth from "../hooks/useAuth.tsx";
import Dashboard from "./dashboard.tsx"

/**
 * Login component.
 * @component
 * @returns {JSX.Element} The rendered Login component.
 */
const Login: React.FC = () => {
  return SignIn();
};

/**
 * Route configuration for the Login component.
 * @type {Object}
 * @property {React.FC} component - The Login component.
 */
export const Route = createFileRoute("/login")({
  component: Login,
});

/**
 * Sign in component.
 * @component
 * @returns {JSX.Element} The rendered Sign in component.
 */
export function SignIn(){

  const isLogin = useAuth();
  return isLogin ? <Dashboard/> : <Public />;
}

/**
 * Public component.
 * @component
 * @returns {JSX.Element} The rendered Public component.
 */
export const Public = () => {
  return <div>You are logged out.</div>;
};


