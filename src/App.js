import "./App.css";
import { FeedSection } from "./components/FeedSection/FeedSection";
import { Navbar } from "./components/Navbar/Navbar";
import { SortSection } from "./components/SortSection/SortSection";
import { useData } from "./contexts/DataContext";
import { Route, Routes } from "react-router-dom";
import { PostDetail } from "./pages/PostDetail/PostDetail";

function App() {
  const { data } = useData();
  return (
    <div className="App">
      <header>MyForum</header>
      <div className="main-section">
        <Navbar />
        <Routes>
          <Route path="/posts" element={<FeedSection />} />
          <Route path="/" element={<FeedSection />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route />
        </Routes>
        <SortSection />
      </div>
    </div>
  );
}

export default App;
