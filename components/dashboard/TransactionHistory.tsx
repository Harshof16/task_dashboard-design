import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, Filter } from 'lucide-react'
import { Transaction } from "@/types/dashboard"
import { TransactionTable } from "./TransactionTable"
import { TransactionCards } from "./TransactionCards"
import { TransactionPagination } from "./TransactionPagination"

interface TransactionHistoryProps {
  transactions: Transaction[]
}

export const TransactionHistory = ({ transactions }: TransactionHistoryProps) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
        <h2 className="text-lg lg:text-xl font-semibold text-[#101828]">Transaction history</h2>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <Button
            variant="outline"
            className="flex items-center justify-center space-x-2 text-[#344054] border-[#d0d5dd] bg-white text-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Select dates</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center space-x-2 text-[#344054] border-[#d0d5dd] bg-white text-sm"
          >
            <Filter className="w-4 h-4" />
            <span>Apply filter</span>
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <TransactionTable transactions={transactions} />
        <TransactionCards transactions={transactions} />
        <TransactionPagination />
      </div>
    </div>
  )
}
