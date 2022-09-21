import type { NextPage } from "next";
import Layout from "../layouts/Layout";
import ArticleItem from "../components/ArticleItem";
import { ArticleItemsResType, ArticleItemType } from "../types";
import { GetStaticProps } from "next";

const URL = process.env.STRAPI_BASE_URL;

const fetchParams = {
  method: "GET",
  headers: {
    "content-type": "application/JSON",
  },
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${URL}/api/blog-post-links?populate=*`, fetchParams),
    blogPosts: ArticleItemsResType = await res.json();
  return {
    props: blogPosts,
  };
};

const Home: NextPage<{ data: ArticleItemType[] }> = ({ data }) => {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container py-5 mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
          {data.map((articleItem) => {
            return (
              <ArticleItem
                attributes={articleItem.attributes}
                key={articleItem.id}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
