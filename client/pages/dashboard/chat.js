import { ChatBox } from "../../components/chatbox";
import { ChannelSidebar } from "../../components/chatbox/channels";

export default function ChatPage() {
  return (
    <>
      <ChannelSidebar />
      <ChatBox />
    </>
  );
}
