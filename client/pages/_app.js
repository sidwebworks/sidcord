import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import store from "../lib/redux";
import "../styles/globals.css";

const EmptyLayout = ({ children }) => {
  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;

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
