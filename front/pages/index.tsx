import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "../layouts/Layout";
import { IconLink } from "../components/IconLink";
import { PortfolioItemsResType, PortfolioItemType } from "../types";
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const URL = process.env.STRAPI_BASE_URL;

const fetchParams = {
  method: "GET",
  headers: {
    "content-type": "application/JSON",
  },
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${URL}/api/portfolio-items`, fetchParams),
    portfolioItems: PortfolioItemsResType = await res.json();
  return {
    props: portfolioItems,
  };
};

const Home: NextPage<{ data: PortfolioItemType[] }> = ({ data }) => {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container py-5 mx-auto space-y-4">
          <img
            className="object-cover rounded-full w-52 h-52 ring-4 ring-gray-300 dark:ring-gray-700 m-auto"
            src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          ></img>
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white text-center">
            Hi, I'm Tom
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Hi I'm Tom a web developer with a passion for all things JavaScript
            related. I have a fair bit of experience with the usual front-end
            tools like React and I'm constantly looking to improve on that
            knowledge base. For example, I used Next to build this portfolio and
            set it up to consume a Strapi back-end. I love solving real world
            problems with code. In my spare time I make tutorials and interview
            cool people who inspire me.
          </p>
          <div className="flex justify-center space-x-8">
            <IconLink
              link="https://github.com/jackso-bytes"
              icon={faGithub}
              text="GitHub"
            />
            <IconLink
              link="https://www.youtube.com/watch?v=9l3r0EFp9ow&t=1235s"
              icon={faYoutube}
              iconColorClass="text-red-500"
              text="YouTube"
            />
            <IconLink
              link="https://www.linkedin.com/in/tom-jackson-9200429b/"
              icon={faLinkedin}
              iconColorClass="text-sky-700"
              text="LinkedIn"
            />
            <IconLink
              link="https://twitter.com/Tom0901S"
              icon={faTwitter}
              iconColorClass="text-sky-500"
              text="Twitter"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
