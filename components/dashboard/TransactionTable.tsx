import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit } from 'lucide-react'
import { Transaction } from "@/types/dashboard"
import { CompanyAvatar } from "@/components/common/CompanyAvatar"
import { CategoryBadge } from "@/components/common/CategoryBadge"
import { PaymentMethodBadge } from "@/components/common/PaymentMethodBadge"
import { isIncomeTransaction } from "@/utils/formatters"

interface TransactionTableProps {
  transactions: Transaction[]
}

export const TransactionTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Card className="hidden lg:block border border-[#eaecf0] bg-white">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#eaecf0]">
            <TableHead className="text-[#667085] font-medium">Transaction</TableHead>
            <TableHead className="text-[#667085] font-medium">Amount</TableHead>
            <TableHead className="text-[#667085] font-medium">Date</TableHead>
            <TableHead className="text-[#667085] font-medium">Category</TableHead>
            <TableHead className="text-[#667085] font-medium">Account</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="border-b border-[#eaecf0] last:border-b-0">
              <TableCell className="py-3">
                <div className="flex items-center space-x-3">
                  <CompanyAvatar 
                    logo={transaction.logo}
                    logoColor={transaction.logoColor}
                    company={transaction.company}
                    size="md"
                  />
                  <span className="text-[#101828] font-medium">{transaction.company}</span>
                </div>
              </TableCell>
              <TableCell className="py-3">
                <span className={`font-medium ${
                  isIncomeTransaction(transaction.amount) ? "text-green-600" : "text-[#101828]"
                }`}>
                  {transaction.amount}
                </span>
              </TableCell>
              <TableCell className="py-3">
                <span className="text-[#667085]">{transaction.date}</span>
              </TableCell>
              <TableCell className="py-3">
                <CategoryBadge 
                  category={transaction.category}
                  categoryColor={transaction.categoryColor}
                />
              </TableCell>
              <TableCell className="py-3">
                <div className="flex items-center space-x-2">
                  <div className="text-sm">
                    <div className="text-[#101828] font-medium">{transaction.account}</div>
                    <div className="text-[#667085]">Expiry {transaction.expiry}</div>
                  </div>
                  <PaymentMethodBadge account={transaction.account} />
                </div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Edit className="w-4 h-4 text-[#667085]" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
