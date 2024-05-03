import { createFileRoute } from '@tanstack/react-router'

/**
 * Login component.
 * @component
 * @returns {JSX.Element} The rendered Login component.
 */
const Logout: React.FC = () => {
  return SignOut();
};

export const Route = createFileRoute('/logout')({
  component: Logout
})


/**
 * Sign in component.
 * @component
 * @returns {JSX.Element} The rendered Sign in component.
 */
export function SignOut(){
  return window.location.href = 'http://10.0.19.248:8888/logout';
}