import Loader from "react-loader-spinner";
import { useUser } from "lib/hooks/use-user";
import { Sidebar } from "./Sidebar";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const DashboardLayout = ({ children }) => {
  const { isLoading, user } = useUser("/");

  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loader type="Grid" color="#793EF9" height={90} width={90} />
      </div>
    );
  }

  return (
    <div className="flex max-h-screen bg-neutral-500">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
