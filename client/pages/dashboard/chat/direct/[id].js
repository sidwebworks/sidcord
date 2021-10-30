import { ChatBox } from "@components/chatbox";
import DashboardLayout from "components/layouts/DashboardLayout";

export default function ChatPage() {
  return (
    <>
      <ChatBox />
    </>
  );
}

ChatPage.Layout = DashboardLayout;
