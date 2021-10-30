import { useUser } from "lib/hooks/use-user";
import { Fragment } from "react";
import { wrapper } from "../lib/redux";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
