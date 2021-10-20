import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import DashboardLayout from "../components/layouts/DashboardLayout";
import store from "../lib/redux";
import "../styles/globals.css";
import Announcement from "../components/ui/Announcement";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  if (pathname.includes("/dashboard")) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return children;
};

function MyApp({ Component, pageProps }) {
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
