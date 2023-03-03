import { Route, Routes } from "react-router-dom";
import { Home, Missing, UserProfile } from "./pages";
import MainLayout from "./routes/MainLayout";
import RequireAuth from "./routes/RequireAuth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public route */}
        <Route path="/" element={<Home />} />

        {/* Protected route */}
        <Route element={<RequireAuth />}>
          <Route path="/user" element={<UserProfile />} />
        </Route>

        {/* Catcher */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}
