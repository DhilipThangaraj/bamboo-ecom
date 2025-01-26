const Footer = () => {
  const appName = import.meta.env.VITE_APP_NAME;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} {appName}. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
