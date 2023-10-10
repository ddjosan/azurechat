import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { FC } from "react";
import { useChatContext } from "../chat-context";
import { ChatFileUI } from "../chat-file/chat-file-ui";
import { ChatStyleSelector } from "./chat-style-selector";
import { ChatTypeSelector } from "./chat-type-selector";

interface Prop {}

export const ChatMessageEmptyState: FC<Prop> = (props) => {
  const { fileState } = useChatContext();

  const { showFileUpload } = fileState;

  return (
    <div className="flex flex-col w-full h-full p-2 items-center justify-center">
      <div className="flex flex-col justify-center items-center p-3 mb-8">
        <img src="/ai-icon2.png" className="w-36" />
        <p className="max-w-sm">
          Start by just typing your message in the box below. You can also
          personalise the chat by making changes to the settings on the right.
        </p>
      </div>
      <Card className="flex flex-col max-w-sm p-2">
        <Typography variant="h4" className="text-primary">
          Personalise
        </Typography>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            Choose a conversation style
          </p>
          <ChatStyleSelector disable={false} />
        </div>
        {/* <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            How would you like to chat?
          </p>
          <ChatTypeSelector disable={false} />
        </div> */}
        {showFileUpload === "data" && <ChatFileUI />}
      </Card>
    </div>
  );
};
