import Head from "next/head";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: Props) => (
  <>
    {title ? (
      <Head>
        <title>Rice Ball | {title}</title>
      </Head>
    ) : null}

    <main className="h-screen p-6">{children}</main>
  </>
);

export default Layout;
