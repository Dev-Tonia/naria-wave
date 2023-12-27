import React, { useState } from "react";
import Modal from "../Modal";
import AirTimeForm from "../forms/AirTimeForm";
export default function QuickAccessTab() {
  const [activeTab, setActiveTab] = useState(0);

  const [tabs, setTabs] = useState([
    { title: "Tab 1", content: "Content for Tab 1" },
    { title: "Tab 2", content: "Content for Tab 2" },
    { title: "Tab 3", content: "Content for Tab 3" },
  ]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="dynamic-tabs">
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
}
