import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Navbar from "./components/navbar/Navbar";
import { CursorProvider } from "./components/customcursor/CursorContext";
import "./App.scss";
import CustomCursor from "./components/customcursor/CustomCursor";
import WaterDrops from "./components/waterdrop/WaterDrops";

const App = () => {
  return (
    <CursorProvider>
      <BrowserRouter basename="/sakthi-portfolio/">
        <div style={{ cursor: "none" }} className="app-root">
          <CustomCursor />
          <WaterDrops />
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <AppRoutes />
            </main>
          </div>
        </div>
      </BrowserRouter>
    </CursorProvider>
  );
};

export default App;
