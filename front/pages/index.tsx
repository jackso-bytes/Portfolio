import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "../layouts/Layout";
import { IconLink } from "../components/IconLink";
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
  const res = await fetch(`${URL}/api/about-contents?populate=*`, fetchParams),
    aboutContent = await res.json();
  return {
    props: aboutContent,
  };
};

const Home: NextPage<{ data: any }> = ({ data }) => {
  const { title, body, gitHubShowCase, youTubeShowCase, heroImage } =
    data[0].attributes;

  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-center py-5 mx-auto space-y-8 mt-8">
          <div className="w-14">
            <img
              className="object-cover rounded-full w-52 h-52 ring-4 ring-gray-300 dark:ring-gray-700 m-auto"
              src={heroImage.data[0].attributes.url}
              alt="hero-image"
            ></img>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white text-center">
            {title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-center">{body}</p>
          <div className="grid grid-cols-2 gap-2 m-auto mt-4 sm:flex sm:justify-center sm:flex-row sm:w-full sm:space-x-8">
            <IconLink link={gitHubShowCase} icon={faGithub} text="GitHub" />
            <IconLink
              link={youTubeShowCase}
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
