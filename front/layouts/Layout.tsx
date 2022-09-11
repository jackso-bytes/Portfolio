import Header from "../components/Header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
