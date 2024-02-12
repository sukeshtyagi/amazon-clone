import "./App.css";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <h1>checkout comp</h1>
              </>
            }
          />
          <Route
            path="/*"
            element={<Navigate to='/'/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
