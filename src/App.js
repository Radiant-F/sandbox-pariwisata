import React from "react";
import {
  Home,
  LibsDemo,
  Missing,
  PasswordRecovery,
  Profile,
  Tourist,
  UserTourist,
} from "./pages";
// import { NavigationBar } from "./features/NavigationBar";
// import { Footer } from "./features/Footer";
import { Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import RequireAuth from "./routes/RequireAuth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="pariwisata" element={<Tourist />} />
        <Route path="demo" element={<LibsDemo />} />

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="profile" element={<Profile />} />
          <Route path="profile/tourist" element={<UserTourist />} />
          <Route path="profile/recovery" element={<PasswordRecovery />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}
