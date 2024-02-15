"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.push("/dashboard");
    }
  }, [sessionStatus, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!email || !password) {
      toast.error("Please fill all the input fields.");
    }

    const res = await signIn("credientals", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      if (res?.url) {
        router.replace("/dashboard");
      }
      toast.error("Invalid Credientals");
    } else {
      toast.success("Successfully Logged In.");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading ...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mb-5 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </div>
            <span>Don't have an acccount?</span>{" "}
            <Link
              className="text-center text-blue-500 hover:underline mt-2"
              href="/register"
            >
              Register
            </Link>
          </form>
        </div>
      </div>
    )
  );
};
export default Login;
