import { Sidebar } from "../sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex max-h-screen">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
