import { Badge } from "@/components/ui/badge"
import { getCardType } from "@/utils/formatters"

interface PaymentMethodBadgeProps {
  account: string
}

export const PaymentMethodBadge = ({ account }: PaymentMethodBadgeProps) => {
  const cardType = getCardType(account)
  
  if (!cardType) return null

  const badgeProps = {
    visa: {
      className: "bg-[#1A1F71] text-white text-xs px-2 py-1 hover:bg-[#1A1F71]",
      text: "VISA"
    },
    mastercard: {
      className: "bg-[#EB001B] text-white text-xs px-2 py-1 hover:bg-[#EB001B]",
      text: "MC"
    }
  }

  const props = badgeProps[cardType]

  return (
    <Badge className={props.className}>
      {props.text}
    </Badge>
  )
}
