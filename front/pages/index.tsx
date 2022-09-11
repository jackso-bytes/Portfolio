import type { NextPage } from "next";
import Layout from "../layouts/Layout";
import PortfolioItem from "../components/Portfolioite";

const fetchParams = {};

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <PortfolioItem />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
