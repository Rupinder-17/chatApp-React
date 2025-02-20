// import React from 'react'

// import { Group } from "../features/Group";
// import { OneToOneChat } from "../features/OneToOneChat";
import { OnlineUsers } from "../features/Onlineusers";
import { UserList } from "../features/UserList";
import Tabs from "./Tabs"
const tabsData = [
  {
    id: "tab1",
    title: "chats",
    content: <UserList/>
  },
  {
    id: "tab2",
    title: "Availble users",
    content: <OnlineUsers/>
  },
  // {
  //   id: "tab3",
  //   title: "Group",
  //   content:<Group/>
  // },
];

export const Mainn = () => {
  return (
    <div>
        <div>
            <Tabs tabsData={tabsData}/>
        </div>
    </div>
  )
}
