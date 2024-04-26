"use client";
import { cn } from "@/lib/utils";
import { FC  } from "react";
import Typography from "../typography";
import { AI_NAME } from "@/features/theme/customise";
import './chat.css'

const ChatRowLoading: FC = () => {

  return (
    <div
      className={cn(
        "container mx-auto max-w-4xl py-6 flex flex-col -w-full",
        "items-start"
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
              {
                <img
                  width={23}
                  height={43}
                  alt=""
                  src="/undp-logo.png"
                />
              }
            </div>
            <Typography variant="h5" className="capitalize text-sm">
              {AI_NAME}
            </Typography>
          </div>
        </div>

        <div
          className={cn(
            "-m-4 p-4 prose prose-slate dark:prose-invert break-words prose-p:leading-relaxed prose-pre:p-0 max-w-non",
            "bg-secondary"
              
          )}
        >
          <div className="pulse-loading"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatRowLoading;
