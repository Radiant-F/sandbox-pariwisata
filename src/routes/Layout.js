import { Outlet } from "react-router-dom";
import { Gap } from "../assets";
import { NavigationBar } from "../features/NavigationBar";

function Layout() {
  return (
    <main className="App">
      <NavigationBar />
      <Gap height={30} />
      <Outlet />
    </main>
  );
}

export default Layout;
