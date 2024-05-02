/**
 * @description This file contains the Login route component, which is responsible for rendering the login page.
 * @module routes/Login
 * @author Junior Moremong, 202001442
 */

import { createFileRoute } from "@tanstack/react-router";

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
  return window.location.href = 'http://10.0.19.248:8888/login';
}


