import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FolderSyncIcon as Sync, Plus, MoreHorizontal } from 'lucide-react'
import { BuyItem, CreditCard } from "@/types/dashboard"
import { CreditCardDisplay } from "./CreditCardDisplay"
import { BuySection } from "./BuySection"

interface RightSidebarProps {
  creditCard: CreditCard
  buyItems: BuyItem[]
}

export const RightSidebar = ({ creditCard, buyItems }: RightSidebarProps) => {
  return (
    <div className="hidden xl:block w-80 border-l border-[#eaecf0] flex flex-col">
      <div className="p-6 pb-4 border-b border-[#eaecf0]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-[#7f56d9] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="font-semibold text-[#101828]">Untitled UI</span>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="w-5 h-5 text-[#667085]" />
          </Button>
        </div>
      </div>

      <ScrollArea className="h-full">
        <div className="py-6 px-4 space-y-6">
          {/* Your Cards Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#101828] mb-2">Your cards</h3>
            <p className="text-[#667085] text-sm mb-4">Welcome back, Olivia!</p>

            <div className="flex items-center justify-between mb-4 gap-2">
              <Button
                variant="outline"
                className="flex items-center space-x-2 text-[#344054] border-[#d0d5dd] bg-white text-sm"
              >
                <Sync className="w-4 h-4" />
                <span>Sync accounts</span>
              </Button>
              <Button className="bg-[#7f56d9] hover:bg-[#6941c6] text-white text-sm">
                <Plus className="w-4 h-4 mr-2" />
                Add card
              </Button>
            </div>

            <CreditCardDisplay card={creditCard} className="h-48 mb-6" />
          </div>

          <BuySection items={buyItems} />
        </div>
      </ScrollArea>
    </div>
  )
}
