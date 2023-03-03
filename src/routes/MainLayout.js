import { Outlet } from "react-router-dom";
import { Footer, Gap, NavBar } from "../components";

export default function MainLayout() {
  return (
    <main className="App">
      <Gap height={20} />
      <NavBar />
      <Gap height={20} />
      <Outlet />
      <Footer />
    </main>
  );
}
