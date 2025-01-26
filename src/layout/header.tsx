import Menu from "@/components/header/menu";
import Search from "@/components/header/search";
import { LOGO_URL } from "@/lib/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const appName = import.meta.env.VITE_APP_NAME;
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link to="/" className="flex-start">
            <img src={LOGO_URL} alt={`${appName}`} height={100} width={100} />
            <span className="hidden lg:block font-bold text-2xl ml-3"></span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
