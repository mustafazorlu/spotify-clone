import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import { axiosInstance } from "./lib/axios";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
         </Routes>
      </>
   );
}

export default App;
