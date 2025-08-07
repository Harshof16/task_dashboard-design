import { useState } from "react"
import { TabType } from "@/types/dashboard"

export const useDashboard = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Personal")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return {
    activeTab,
    sidebarOpen,
    handleTabChange,
    toggleSidebar,
    closeSidebar,
    setActiveTab,
    setSidebarOpen
  }
}
