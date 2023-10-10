"use client";

import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  PanelLeftClose,
  PanelRightClose,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme/theme-toggle";
import { UserProfile } from "../user-profile";

import { useSession } from "next-auth/react";
import { useMenuContext } from "./menu-context";
import './menu.css'
import { NewChat } from "../chat/chat-menu/new-chat";

export const MainMenu = () => {
  const { data: session } = useSession();
  const { isMenuOpen, toggleMenu } = useMenuContext();
  return (
    <div className="flex flex-col justify-between p-2 display-row">
      <div className="flex gap-2  flex-col  items-center display-row">
        <Button
          onClick={toggleMenu}
          className="rounded-full w-[40px] h-[40px] p-1 text-primary"
          variant={"outline"}
        >
          {isMenuOpen ? <PanelLeftClose /> : <PanelRightClose />}
        </Button>
        <NewChat closeOnChange={false}/>
        {session?.user?.isAdmin ? (
          <Button
            asChild
            className="rounded-full w-[40px] h-[40px] p-2 text-primary"
            variant={"outline"}
          >
            <Link href="/reporting" title="Reporting">
              <LayoutDashboard />
            </Link>
          </Button>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col gap-2 items-center hidden-element">
        <ThemeToggle />
        <UserProfile />
      </div>
    </div>
  );
};
