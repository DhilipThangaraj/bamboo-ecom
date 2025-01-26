import { Link } from "react-router-dom";

const Header = () => {
  const appName = import.meta.env.VITE_APP_NAME;
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link to="/" className="flex-start">
            <img
              src="https://www.bamboo-card.com/wp-content/uploads/2022/04/bamboo_logo-180x32.png"
              alt={`${appName}`}
              height={100}
              width={100}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3"></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
