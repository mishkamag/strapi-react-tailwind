import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://localhost:1337/api/auth/local/register`;
    try {
      if (username && email && password) {
        const res = await axios.post(url, { username, email, password });
        if (res) {
          toast.success("Signup successful!", { hideProgressBar: true });
          setUsername("");
          setEmail("");
          setPassword("");
          navigate("/signin");
        }
        console.log(res);
      }
    } catch (error) {
      toast.error("Wrong Credentials", { hideProgressBar: true });
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-full  flex flex-col items-center justify-center sshadow-md py-16 ">
        <span className="text-2xl font-bold	">Register</span>
        <form className="mt-5 flex flex-col" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="p-4 bg-white bg-none"
            type="text"
            placeholder="Enter your username..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
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
            className="mt-5 cursor-pointer bg-teal-500 border-none   text-white rounded-[10px] p-4"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
