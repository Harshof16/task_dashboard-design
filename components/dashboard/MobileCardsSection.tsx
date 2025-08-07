import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FolderSyncIcon as Sync, Plus } from 'lucide-react'
import { BuyItem, CreditCard } from "@/types/dashboard"
import { CreditCardDisplay } from "./CreditCardDisplay"
import { BuySection } from "./BuySection"

interface MobileCardsSectionProps {
  creditCard: CreditCard
  buyItems: BuyItem[]
}

export const MobileCardsSection = ({ creditCard, buyItems }: MobileCardsSectionProps) => {
  return (
    <Card className="xl:hidden border-t border-[#eaecf0] border-x-0 border-b-0 bg-white rounded-none">
      <CardContent className="p-4 space-y-6">
        {/* Mobile Cards Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#101828] mb-2">Your cards</h3>
          <p className="text-[#667085] text-sm mb-4">Welcome back, Olivia!</p>

          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <Button
              variant="outline"
              className="flex items-center space-x-2 text-[#344054] border-[#d0d5dd] bg-white text-sm w-full sm:w-auto"
            >
              <Sync className="w-4 h-4" />
              <span>Sync accounts</span>
            </Button>
            <Button className="bg-[#7f56d9] hover:bg-[#6941c6] text-white text-sm w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add card
            </Button>
          </div>

          <CreditCardDisplay card={creditCard} className="h-40 sm:h-48 mb-6" />
        </div>

        <BuySection items={buyItems} isMobile />
      </CardContent>
    </Card>
  )
}
