import useFetch from "./hooks/useFetch";
import BlogDetails from "./pages/BlogDetails";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let { loading, data, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage blogs={data ? data : ""} />} />
        <Route
          path="/blog/:id"
          element={<BlogDetails blogs={data ? data : ""} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
