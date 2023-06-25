import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ContraptionDetailPage from "./pages/ContraptionDetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contraptions/:id" element={<ContraptionDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
