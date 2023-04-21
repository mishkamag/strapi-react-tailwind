import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://localhost:1337/api/auth/local/register`;
    try {
      if (username && email && password) {
        const res = await axios.post(url, { username, email, password });
        console.log(res);
      }
    } catch (error) {
      toast.error(error.message, { hideProgressBar: true });
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-full  flex flex-col items-center justify-center sshadow-md py-16 ">
        <span className="text-xl	">Register</span>
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
            type="submit"
            className="mt-5 cursor-pointer border-none  text-white rounded-[10px] p-4"
          >
            Register
          </button>
        </form>
        {/* <button
          className="absolute top-[80px] right-[20px] bg-red-500 border-none text-white cursor-pointer p-4 rounded-[10px]"
          type="submit"
        >
          <Link className="link" to="/signin">
            Login
          </Link>
        </button> */}
        {/* {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong{" "}
          </span>
        )} */}
      </div>
      <Footer />
    </>
  );
};

export default SignUp;

//   const [error, setError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(false);
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", {
//         username,
//         email,
//         password,
//       });
//       res.data && window.location.replace("/login");
//     } catch (error) {
//       setError(true);
//     }
//   };
