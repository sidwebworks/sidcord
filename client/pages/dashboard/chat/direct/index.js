import { ChatBox } from "@components/chatbox";
import ChatLayout from "@components/layouts/ChatLayout";

export default function ChatPage() {
  return (
    <>
      <ChatBox />
    </>
  );
}

ChatPage.Layout = ChatLayout;
