"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Home, BarChart3, CreditCard, ArrowUpDown, Clock, Users, Settings, Calendar, Filter, Edit, FolderSyncIcon as Sync, Plus, MoreHorizontal, Menu } from 'lucide-react'
import { useDashboard } from "@/hooks/useDashboard"
import { MOCK_TRANSACTIONS, MOCK_BUY_ITEMS, MOCK_CREDIT_CARD } from "@/constants/mockData"
import { Sidebar } from "@/components/layout/Sidebar"
import { MobileHeader } from "@/components/layout/MobileHeader"
import { BalanceSection } from "@/components/dashboard/BalanceSection"
import { TransactionHistory } from "@/components/dashboard/TransactionHistory"
import { RightSidebar } from "@/components/dashboard/RightSidebar"
import { MobileCardsSection } from "@/components/dashboard/MobileCardsSection"

export default function FinancialDashboard() {
  const { activeTab, sidebarOpen, handleTabChange, setSidebarOpen } = useDashboard()

  return (
    <div className="flex h-screen bg-[#f9fafb]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-16 border-r border-[#eaecf0]">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-16 p-0 border-r border-[#eaecf0]">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
            <ScrollArea className="h-full">
          <div className="p-6 lg:p-8 pb-0">
            <MobileHeader />
            
            <BalanceSection 
              balance="$40,206.20"
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          </div>
          
          <div className="flex-1 overflow-hidden px-6 lg:px-8">
              <div className="pb-6 lg:pb-8">
                <TransactionHistory transactions={MOCK_TRANSACTIONS} />
              </div>
          </div>
            </ScrollArea>
        </div>

        <RightSidebar 
          creditCard={MOCK_CREDIT_CARD}
          buyItems={MOCK_BUY_ITEMS}
        />

        <MobileCardsSection 
          creditCard={MOCK_CREDIT_CARD}
          buyItems={MOCK_BUY_ITEMS}
        />
      </div>
    </div>
  )
}
