import { Outlet } from "react-router-dom";
import { NavigationBar } from "../features/NavigationBar";

function Layout() {
  return (
    <main className="App">
      <NavigationBar />
      <Outlet />
    </main>
  );
}

export default Layout;
