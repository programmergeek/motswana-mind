import { createFileRoute } from "@tanstack/react-router";
import useAuth from "../hooks/useAuth.tsx";
import Dashboard from "./dashboard.tsx"

const Login: React.FC = () => {
  return SignIn();
};

export const Route = createFileRoute("/login")({
  component: Login,
});

export function SignIn(){

  const isLogin = useAuth();
  return isLogin ? <Dashboard/> : <Public />;
}

export const Public = () => {
  return <div>You are logged out.</div>;
};


