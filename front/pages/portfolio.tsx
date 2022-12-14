import type { NextPage } from "next";
import Layout from "../layouts/Layout";
import PortfolioItem from "../components/Portfolioitem";
import { PortfolioItemsResType, PortfolioItemType } from "../types";
import { GetStaticProps } from "next";

const URL = process.env.STRAPI_BASE_URL;

const fetchParams = {
  method: "GET",
  headers: {
    "content-type": "application/JSON",
  },
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${URL}/api/portfolio-items?populate=*`, fetchParams),
    portfolioItems: PortfolioItemsResType = await res.json();
  return {
    props: portfolioItems,
  };
};

const Home: NextPage<{ data: PortfolioItemType[] }> = ({ data }) => {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container py-5 mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
          {data.map((portfolioItem) => {
            return (
              <PortfolioItem
                attributes={portfolioItem.attributes}
                key={portfolioItem.id}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
