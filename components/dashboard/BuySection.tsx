import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BuyItem } from "@/types/dashboard"
import { CompanyAvatar } from "@/components/common/CompanyAvatar"

interface BuySectionProps {
  items: BuyItem[]
  isMobile?: boolean
}

export const BuySection = ({ items, isMobile = false }: BuySectionProps) => {
  const displayItems = isMobile ? items.slice(0, 4) : items

  return (
    <div className="border border-[#eaecf0] bg-[#fcfcfc] rounded-lg py-4">
      <h3 className="text-lg font-semibold text-[#101828] mb-4 px-4">Buy</h3>

      <div className={isMobile ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "space-y-2"}>
        {displayItems.map((item, index) => (
          <Card
            key={index}
            className={`${
              isMobile 
                ? "border border-[#eaecf0] bg-white hover:bg-gray-50" 
                : "border-0 shadow-none bg-transparent hover:bg-gray-50"
            } transition-colors cursor-pointer`}
          >
            <CardContent className="flex items-center justify-between px-3 py-1">
              <div className="flex items-center space-x-3">
                <CompanyAvatar 
                  logo={item.logo}
                  logoColor={item.logoColor}
                  company={item.company}
                  size="md"
                />
                <div>
                  <div className="text-sm font-medium text-[#101828]">{item.company}</div>
                  <div className="text-xs text-green-600">{item.amount}</div>
                </div>
              </div>
              <Button 
                size="sm" 
                className={`bg-[#7f56d9] hover:bg-[#6941c6] text-white ${
                  isMobile ? "px-3" : "px-4"
                }`}
              >
                Buy
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
