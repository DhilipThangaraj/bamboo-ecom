import { FC } from "react";

const Footer: FC = () => {
  const appName = import.meta.env.VITE_APP_NAME;
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} `${appName} All rights reserved.`
      </div>
    </footer>
  );
};

export default Footer;
