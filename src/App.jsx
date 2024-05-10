import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SubmitForm from "./pages/SubmitForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/submit" element={<SubmitForm />} />
      </Routes>
    </Router>
  );
}

export default App;
