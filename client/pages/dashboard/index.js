import Announcement from "../../components/ui/Announcement";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { CHAT } from "lib/redux/actions";
import { wrapper } from "lib/redux";
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      store.dispatch(CHAT.SEND_MESSAGE({ title: "Hello", body: "Maja aagya" }));

      console.log("State on server", store.getState());

      return {
        props: {},
      };
    }
);
