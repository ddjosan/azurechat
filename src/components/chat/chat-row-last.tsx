"use client";
import { ChatRole } from "@/features/chat/chat-services/models";
import { isNotNullOrEmpty } from "@/features/chat/chat-services/utils";
import { cn } from "@/lib/utils";
import { CheckIcon, ClipboardIcon, UserCircle } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";
import { Markdown } from "../markdown/markdown";
import Typography from "../typography";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { AI_NAME } from "@/features/theme/customise";
import { Timeout } from "microsoft-cognitiveservices-speech-sdk/distrib/lib/src/common/Timeout";
import { useChatContext } from "@/features/chat/chat-ui/chat-context";

interface ChatRowProps {
  name: string;
  profilePicture: string;
  message: string;
  type: ChatRole;
  messageDisplayed: (displayed: boolean) => void;
}

const ChatRowLast: FC<ChatRowProps> = (props) => {
 
  const { isLoading } = useChatContext();
  const [isIconChecked, setIsIconChecked] = useState(false);

  const [lastMessage, setLastMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    props.messageDisplayed(false)
  }, []);

  useEffect(() => {
    setLastMessage(props.message);
  }, [props.message]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < lastMessage.length) {
        setAnswer(prevMessage => prevMessage + lastMessage[index]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
        if(!isLoading){ 
          props.messageDisplayed(true);
        }
      }
    }, 13);

    return () => clearInterval(interval);
  }, [index, lastMessage.length]);

  const toggleIcon = () => {
    setIsIconChecked((prevState) => !prevState);
  };

  const handleButtonClick = () => {
    toggleIcon();
    navigator.clipboard.writeText(props.message);
  };

  return (
    <div
      className={cn(
        "container mx-auto max-w-4xl py-6 flex flex-col -w-full",
        props.type === "assistant" ? "items-start" : "items-end"
      )}
    >
      <div
        className={cn(
          "flex flex-col  max-w-full border rounded-lg overflow-hidden  p-2 gap-8"
        )}
      >
        <div className="flex flex-1">
          <div className="flex gap-4 items-center flex-1">
            <div className="">
              {(props.name === AI_NAME) ? (
                <img
                  width={23}
                  height={43}
                  alt=""
                  src="/undp-logo.png"
                />
              ) : (isNotNullOrEmpty(props.profilePicture) ? (
                <Avatar>
                  <AvatarImage src={props.profilePicture} />
                </Avatar>
              ) : (
                <UserCircle
                  width={40}
                  height={40}
                  strokeWidth={1.2}
                  className="text-primary"
                />
              )
              )}
              {/* {isNotNullOrEmpty(props.profilePicture) ? (
                <Avatar>
                  <AvatarImage src={props.profilePicture} />
                </Avatar>
              ) : (
                <UserCircle
                  width={40}
                  height={40}
                  strokeWidth={1.2}
                  className="text-primary"
                />
              )} */}
            </div>
            <Typography variant="h5" className="capitalize text-sm">
              {props.name}
            </Typography>
          </div>
          <Button
            variant={"ghost"}
            size={"sm"}
            title="Copy text"
            className="justify-right flex"
            onClick={handleButtonClick}
          >
            {isIconChecked ? (
              <CheckIcon size={16} />
            ) : (
              <ClipboardIcon size={16} />
            )}
          </Button>
        </div>

        <div
          className={cn(
            "-m-4 p-4 prose prose-slate dark:prose-invert break-words prose-p:leading-relaxed prose-pre:p-0 max-w-non",
            props.type === "assistant"
              ? "bg-secondary"
              : "bg-primary text-white"
          )}
        >
          <Markdown content={answer} pulse={true}/>
        </div>
      </div>
    </div>
  );
};

export default ChatRowLast;
