import { useRouter } from "next/router";
import { Fragment, useEffect, useMemo } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import store from "../lib/redux";
import "../styles/globals.css";
import { openSocket } from "lib/socket";

const io = openSocket();

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Fragment;

  useEffect(() => {
    io.on("connect", () => {
      console.log("connected");
    });

    io.on("message", (m) => {
      console.log(m);
    });
    
  }, [io]);

  return (
    <Provider store={store}>
      <ThemeProvider
        defaultTheme="dark"
        attribute="class"
        enableColorScheme={false}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
