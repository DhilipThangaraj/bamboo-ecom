import Header from "./header";
import Footer from "./footer";
import Main from "./main";

//Header and Footer Layout

export default function Layout() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
