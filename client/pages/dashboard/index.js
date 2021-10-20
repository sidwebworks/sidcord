import { ChatBox } from "../../components/chatbox";
import { ChannelSidebar } from "../../components/chatbox/channels";
import { Sidebar } from "../../components/layouts/Sidebar";
import Announcement from "../../components/ui/Announcement";

export default function Dashboard() {
  return (
    <>
      <div className="w-full max-h-screen">
        <Announcement />
      </div>
    </>
  );
}
