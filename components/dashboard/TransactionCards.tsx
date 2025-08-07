import { Card, CardContent } from "@/components/ui/card"
import { Transaction } from "@/types/dashboard"
import { CompanyAvatar } from "@/components/common/CompanyAvatar"
import { CategoryBadge } from "@/components/common/CategoryBadge"
import { PaymentMethodBadge } from "@/components/common/PaymentMethodBadge"
import { isIncomeTransaction } from "@/utils/formatters"

interface TransactionCardsProps {
  transactions: Transaction[]
}

export const TransactionCards = ({ transactions }: TransactionCardsProps) => {
  return (
    <div className="lg:hidden space-y-4">
      {transactions.map((transaction) => (
        <Card key={transaction.id} className="border border-[#eaecf0] bg-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <CompanyAvatar 
                  logo={transaction.logo}
                  logoColor={transaction.logoColor}
                  company={transaction.company}
                  size="lg"
                />
                <div>
                  <div className="text-[#101828] font-medium">{transaction.company}</div>
                  <div className="text-[#667085] text-sm">{transaction.date}</div>
                </div>
              </div>
              <div
                className={`font-medium text-lg ${
                  isIncomeTransaction(transaction.amount) ? "text-green-600" : "text-[#101828]"
                }`}
              >
                {transaction.amount}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <CategoryBadge 
                category={transaction.category}
                categoryColor={transaction.categoryColor}
              />
              <div className="flex items-center space-x-2">
                <div className="text-xs text-[#667085]">{transaction.account}</div>
                <PaymentMethodBadge account={transaction.account} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
