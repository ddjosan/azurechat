import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { AI_NAME } from "@/features/theme/customise";
import { FC } from "react";
import { NewChat } from "../../chat-menu/new-chat";

interface Prop {}

export const StartNewChat: FC<Prop> = (props) => {
  return (
    <div className="flex flex-col w-full items-center justify-center h-full p-2">
      <div className="flex flex-col mb-8">
        <img src="/ai-icon2.png" className="w-36" />
      </div>
      <Card className="flex flex-col p-5 max-w-sm">
        <Typography variant="h4" className="text-primary">
          {AI_NAME}
        </Typography>
        <div className="flex flex-col gap-2">
          <p className="">
            Welcome to {AI_NAME}. This version of AI assitant is safe for usage in buisiness purposes
            with no chat history saved outside organization.
          </p>
          <p>You can start a new chat with me by clicking the button below.</p>
        </div>
        <div className="-mx-5 -mb-5 p-5 flex flex-col border-t bg-muted">
          <NewChat />
        </div>
      </Card>
    </div>
  );
};
