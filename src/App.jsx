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
      <div style={{ cursor: "none" }}>
        <CustomCursor />
        <WaterDrops />
        <BrowserRouter>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <AppRoutes />
            </main>
          </div>
        </BrowserRouter>
      </div>
    </CursorProvider>
  );
};

export default App;
