import { createFileRoute } from "@tanstack/react-router";
import useAuth from "../hooks/useAuth.tsx";

const Login: React.FC = () => {
  return SignIn();
};

export const Route = createFileRoute("/login")({
  component: Login,
});

export function SignIn(){

  const isLogin = useAuth();
   return isLogin ? <Protected/> : <Public />
}

export const Public = () => {
  return <div>Public</div>;
};


export const Protected = () => {
  return <div>Protected</div>;
};


