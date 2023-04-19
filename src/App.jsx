import BlogDetails from "./pages/BlogDetails";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
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
