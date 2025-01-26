import { Outlet } from "react-router-dom";

const Main = () => (
  <>
    <main className="flex-grow overflow-y-auto">
      <Outlet />
    </main>
  </>
);

export default Main;
