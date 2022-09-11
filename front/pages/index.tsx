import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold ">Hello world</h1>
    </Layout>
  );
};

export default Home;
