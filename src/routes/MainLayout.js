import { Outlet } from "react-router-dom";
import { Footer, Gap } from "../components";
import NavBar from "../features/NavBar/components/NavBar";

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
