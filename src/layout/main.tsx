import { Outlet } from "react-router-dom";

const Main = () => (
  <>
    <main className="flex-1 wrapper">
      <Outlet />
    </main>
  </>
);

export default Main;
