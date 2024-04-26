import { createFileRoute } from '@tanstack/react-router'
import Layout from "@/components/layouts/main";
import { Button } from '@/components/ui/button';
import { Link } from "@tanstack/react-router";


function LogIn() {
	return (
		<Layout>
      <div className="w-full bg-[url('/circle-background.png')] bg-no-repeat bg-cover mt-10">
        <div className="flex items-center justify-center">
      
        
      <div className="w-full flex items-center justify-center mt-10 mb-10">
          <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100 shadow-2xl">
          <h1 className="text-5xl font-semibold">Welcome Back</h1>
          <p className="font-medium text-lg mt-4">Please enter your details</p>
          <form className="mt-8">
            <div>
              <label className="text-lg font-medium">Email</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-lg font-medium">Password</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div className="mt-3 ml-4">
              <button className="font-medium text-base text-violet-500">Forgot password</button>
            </div>
          </form>
          <div className="mt-8 flex justify-center items-center">
          <Button className=" text-lg font-bold py-5 px-8 rounded-xl">Log in</Button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Don't have an account?</p>
          <Link to="/signup">
          <button className="text-violet-500 text-base font-medium ml-2">Sign up</button>
          </Link>
        </div>
          </div>
        </div>
        </div>
      </div>
    </Layout>
	)
};

export const Route = createFileRoute("/login")({
	component: LogIn,
});