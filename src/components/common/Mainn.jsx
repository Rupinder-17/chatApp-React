// import React from 'react'

import { OneToOneChat } from "../features/OneToOneChat";
import { OnlineUsers } from "../features/Onlineusers";
import Tabs from "./Tabs"
const tabsData = [
  {
    id: "tab1",
    title: "OnlineUser",
    content: <OnlineUsers/>
  },
  {
    id: "tab2",
    title: "chat",
    content: <OneToOneChat/>
  },
  {
    id: "tab3",
    title: "Group",
    content:
      "Tab 3 is here. You can customize this content as needed for your project.",
  },
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
