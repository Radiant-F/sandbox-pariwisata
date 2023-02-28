import { Outlet } from "react-router-dom";
import { Gap } from "../assets";
import Footer from "../features/Footer/components/Footer";
import { NavigationBar } from "../features/NavigationBar";

function Layout() {
  return (
    <main className="App">
      <NavigationBar />
      <Gap height={50} />
      <Outlet />
      <Gap height={50} />
      <Footer />
    </main>
  );
}

export default Layout;
