import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-start items-center px-16">
        <Image
          src="/coffee-cup.png"
          alt="coffee-cup"
          width={624}
          height={200}
          objectFit="contain"
        />
        <div className="text-center text-lg w-[80vmin] text-smoke-500">
          Coffee-cup is a collections of my css-animation works. I love coffee
          more than any drinks, and beside that i love CSS too. although
          sometimes it&apos;s painfull to write it from scratch
        </div>
        {/* <div className="grid grid-cols-4 gap-2 w-full">
          {animationItems.map(({ id, src }) => (
            <div key={id} className="bg-smoke-500 rounded-lg">
              {id}
            </div>
          ))}
        </div> */}
      </section>
    </Layout>
  );
};

export default Home;
