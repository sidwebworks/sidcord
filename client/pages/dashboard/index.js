import Announcement from "../../components/ui/Announcement";
import DashboardLayout from "../../components/layouts/DashboardLayout";
export default function Dashboard() {
  return (
    <>
      <div className="w-full max-h-screen">
        <Announcement />
      </div>
    </>
  );
}
Dashboard.Layout = DashboardLayout;
