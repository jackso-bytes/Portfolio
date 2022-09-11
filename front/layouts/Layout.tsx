import Header from "../components/Header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container px-6 py-4 mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
