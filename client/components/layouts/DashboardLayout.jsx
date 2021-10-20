import { Sidebar } from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex max-h-screen bg-neutral-500">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
