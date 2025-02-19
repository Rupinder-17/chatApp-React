"use client";

import { useState } from "react";

export default function Tabs({ tabsData = [] }) {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-8">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "block" : "hidden"}`}
          >
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
