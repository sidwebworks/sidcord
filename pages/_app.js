import { wrapper } from "lib/redux/store";
import { Fragment } from "react";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(MyApp);
