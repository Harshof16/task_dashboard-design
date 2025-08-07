import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabType } from "@/types/dashboard"
import { BalanceChart } from "./BalanceChart"

interface BalanceSectionProps {
  balance: string
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export const BalanceSection = ({ balance, activeTab, onTabChange }: BalanceSectionProps) => {
  return (
    <Card className="mb-8 border-0 shadow-none bg-transparent">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 space-y-4 lg:space-y-0">
          <div>
            <p className="text-[#667085] text-sm mb-1">Your balance</p>
            <div className="flex items-center space-x-2">
              <span className="text-xl lg:text-2xl">🇺🇸</span>
              <span className="text-2xl lg:text-3xl font-bold text-[#101828]">{balance}</span>
            </div>
          </div>
          
          <Tabs
            value={activeTab}
            onValueChange={(value) => onTabChange(value as TabType)}
            className="w-auto"
          >
            <TabsList className="grid w-full grid-cols-3 bg-gray-50 border border-[#d0d5dd]">
              <TabsTrigger 
                value="Personal" 
                className="data-[state=active]:bg-gray-100 data-[state=active]:text-[#344054] data-[state=active]:border data-[state=active]:border-[#d0d5dd] text-[#667085] text-xs lg:text-sm cursor-pointer"
              >
                Personal
              </TabsTrigger>
              <TabsTrigger 
                value="Business"
                className="data-[state=active]:bg-gray-100 data-[state=active]:text-[#344054] data-[state=active]:border data-[state=active]:border-[#d0d5dd] text-[#667085] text-xs lg:text-sm cursor-pointer"
              >
                Business
              </TabsTrigger>
              <TabsTrigger 
                value="Credit"
                className="data-[state=active]:bg-gray-100 data-[state=active]:text-[#344054] data-[state=active]:border data-[state=active]:border-[#d0d5dd] text-[#667085] text-xs lg:text-sm cursor-pointer"
              >
                Credit
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <BalanceChart />
      </CardContent>
    </Card>
  )
}
