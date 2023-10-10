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
        <img src="/undp-logo.png" className="w-1/4" />
      </div>
      <Card className="flex flex-col p-5 max-w-sm">
        <Typography variant="h4" className="text-primary">
          {AI_NAME}
        </Typography>
        <div className="flex flex-col gap-2">
          <p className="">
            Welcome to {AI_NAME}. You should interact in a friendly manner with
            the AI assistant and refrain from participating in any harmful
            activities.
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
