import { useUser } from "lib/hooks/use-user";
import { CHAT } from "lib/redux/actions";
import { createInstance } from "lib/utils/axiosInstance";
import { getSession } from "node_modules/next-auth/client";
import { useCallback, useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useDispatch } from "react-redux";
import { Sidebar } from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const { isLoading, user } = useUser("/");
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(CHAT.INIT_CONNECTION());
    }
  }, [user]);

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
