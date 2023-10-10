import { Menu, MenuContent, MenuHeader } from "@/components/menu";
import { FindAllChatThreadForCurrentUser } from "@/features/chat/chat-services/chat-thread-service";
import MenuItems from "./menu-items";
import { NewChat } from "./new-chat";
import './chat-menu.css'
import { UserProfile } from "@/features/user-profile";

export const ChatMenu = async () => {
  const items = await FindAllChatThreadForCurrentUser();

  return (
    <>
      <Menu className=" p-2 menu-desktop w-80">
        <MenuHeader className="justify-end">
          <NewChat closeOnChange={false}/>
        </MenuHeader>
        <MenuContent>
              <MenuItems menuItems={items}  closeOnChange={false}/>
        </MenuContent>
      </Menu>

      <Menu className=" p-2 menu-mobile w-full">
        <MenuHeader className="justify-between">
          <UserProfile />
          <NewChat closeOnChange={true}/>
        </MenuHeader>
        <MenuContent>
            <MenuItems menuItems={items}  closeOnChange={true}/>
        </MenuContent>
      </Menu>
    </>

  );
};
