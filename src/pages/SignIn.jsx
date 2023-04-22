import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/login-context";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const SignIn = () => {
  const { setIsLoggedIn, email, setEmail, password, setPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (email && password) {
        const { data } = await axios.post(url, { identifier: email, password });
        if (data.jwt) {
          toast.success(`Signin successful, Welcome ${email}!`, {
            hideProgressBar: true,
          });
          setIsLoggedIn(true);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error("Wrong Credentials", { hideProgressBar: true });
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-full  flex flex-col items-center justify-center sshadow-md py-16 ">
        <span className="text-2xl font-bold">Sign In</span>
        <form className="mt-5 flex flex-col" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            className="p-4 bg-white bg-none"
            type="email"
            placeholder="Enter your email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            className="p-4 bg-white bg-none"
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="mt-5 cursor-pointer bg-teal-500 border-none text-white rounded-[10px] p-4"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
