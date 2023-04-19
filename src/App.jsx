import useFetch from "./hooks/useFetch";
import BlogDetails from "./pages/BlogDetails";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  let { loading, data, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
