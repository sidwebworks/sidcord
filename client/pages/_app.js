import { useRouter } from "next/router";
import DashboardLayout from "../components/layouts/dashboard.layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  if (pathname.includes('/dashboard')) {
    return (
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
