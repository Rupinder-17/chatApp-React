import { OnlineUsers } from "../features/Onlineusers";
import { UserList } from "../features/UserList";
import Tabs from "./Tabs";
const tabsData = [
  {
    id: "tab1",
    title: "chats",
    content: <UserList />,
  },
  {
    id: "tab2",
    title: "Availble users",
    content: <OnlineUsers />,
  },
 
];

export const Mainn = () => {
  return (
    <div>
      <div>
        <Tabs tabsData={tabsData} />
      </div>
    </div>
  );
};
