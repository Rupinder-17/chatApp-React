// import React from 'react'

import Tabs from "./Tabs"
const tabsData = [
  {
    id: "tab1",
    title: "OnlineUser",
    content: "This is the content for Tab 1. You can put any information here.",
  },
  {
    id: "tab2",
    title: "chat",
    content:
      "Welcome to Tab 2! This area can contain text, images, or other components.",
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
