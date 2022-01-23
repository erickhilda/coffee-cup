import type { NextPage } from "next";
import Layout from "../components/layout";
import style from "../styles/typing.module.css";

const WordleFlip: NextPage = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center h-full px-16 text-smoke-500">
        <div className={style.demo}>This is a typing demo.</div>
        <div className={style.demoTwo}>This is a typing demo.</div>
      </section>
    </Layout>
  );
};

export default WordleFlip;
