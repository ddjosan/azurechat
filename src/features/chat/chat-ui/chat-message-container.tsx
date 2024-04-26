import ChatLoading from "@/components/chat/chat-loading";
import ChatRow from "@/components/chat/chat-row";
import { useChatScrollAnchor } from "@/components/hooks/use-chat-scroll-anchor";
import { AI_NAME } from "@/features/theme/customise";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { useChatContext } from "./chat-context";
import { ChatHeader } from "./chat-header";
import ChatRowLast from "@/components/chat/chat-row-last";
import ChatRowLoading from "@/components/chat/chat-row-loading";

export const ChatMessageContainer = () => {
  const { data: session } = useSession();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const { messages, isLoading } = useChatContext();

  useChatScrollAnchor(messages, scrollRef);

  const isLastLoadingAnswer = (role: string) => {
    return (isLoading || !isDisplayed) && role === 'assistant'
  }

  return (
    <div className="h-full rounded-md overflow-y-auto " ref={scrollRef}>
      <div className="flex justify-center p-4">
        <ChatHeader />
      </div>
      <div className=" pb-[80px] flex flex-col justify-end flex-1">
        {messages.map((message, index) => (
          ((index === messages.length-1) && isLastLoadingAnswer(message.role)) ? 
              <ChatRowLast
                name={message.role === "user" ? session?.user?.name! : AI_NAME}
                profilePicture={
                  message.role === "user" ? session?.user?.image! : "/undp-logo.png"
                }
                message={message.content}
                type={message.role}
                key={index}
                messageDisplayed={(displayed) => setIsDisplayed(displayed)}
              /> :
              <ChatRow
                name={message.role === "user" ? session?.user?.name! : AI_NAME}
                profilePicture={
                  message.role === "user" ? session?.user?.image! : "/undp-logo.png"
                }
                message={message.content}
                type={message.role}
                key={index}
              /> 
            ))}
        {(isLoading && messages[messages.length-1].role!='assistant') && <ChatRowLoading />}
      </div>
    </div>
  );
};
