"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { CreateChatThread } from "../chat-services/chat-thread-service";
import { useMenuContext } from "@/features/menu/menu-context";

interface NewChatProps extends React.HTMLAttributes<HTMLLinkElement> {
  closeOnChange?: boolean;
}

export const NewChat = ( props : NewChatProps ) => {

  const { closeMenu } = useMenuContext()

  const router = useRouter();
  const startNewChat = async () => {
    try {
      const newChatThread = await CreateChatThread();
      if (newChatThread) {
        router.push("/chat/" + newChatThread.id);
        router.refresh();
        if(props.closeOnChange) closeMenu();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button
      className="gap-2 rounded-full w-[40px] h-[40px] p-1 text-primary"
      variant={"outline"}
      onClick={() => startNewChat()}
    >
      <PlusCircle size={40} strokeWidth={1.2} />
    </Button>
  );
};
