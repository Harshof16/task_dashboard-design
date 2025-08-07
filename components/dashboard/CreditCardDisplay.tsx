import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard } from "@/types/dashboard"

interface CreditCardDisplayProps {
  card: CreditCard
  className?: string
}

export const CreditCardDisplay = ({ card, className = "" }: CreditCardDisplayProps) => {
  return (
    <Card className={`relative border-0 shadow-lg overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 bg-gradient-to-br"
        style={{
          background: `linear-gradient(135deg, ${card.gradient.join(', ')})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      <CardContent className="relative p-4 sm:p-6 h-full flex flex-col justify-between text-white">
        <div className="flex justify-between items-start">
          <span className="text-sm opacity-90">{card.name}</span>
          <div className="flex space-x-1">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full"></div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full -ml-3 sm:-ml-4"></div>
          </div>
        </div>

        <div>
          <div className="text-sm opacity-90 mb-1">{card.holderName}</div>
          <div className="text-base sm:text-lg font-mono tracking-wider mb-2">{card.cardNumber}</div>
          <div className="flex justify-between items-end">
            <div className="text-sm opacity-90">{card.expiryDate}</div>
            <Badge className="text-xs bg-black/30 px-2 py-1 text-white border-0 hover:bg-black/30">
              {card.cvv}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
