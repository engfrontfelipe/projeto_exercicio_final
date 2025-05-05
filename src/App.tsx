import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { GlobalCss } from "./style";

function App() {
  return (
    <Router>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/restaurantes/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
