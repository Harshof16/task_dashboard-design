import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export const TransactionPagination = () => {
  return (
    <div className="mt-6">
      <Pagination>
        <PaginationContent className="flex flex-col sm:flex-row items-center justify-between w-full space-y-4 sm:space-y-0">
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              className="text-[#344054] border-[#d0d5dd] bg-white w-full sm:w-auto"
            />
          </PaginationItem>
          
          <div className="flex space-x-1">
            <PaginationItem>
              <PaginationLink 
                href="#" 
                isActive 
                className="bg-[#7f56d9] text-white hover:bg-[#6941c6] w-8 h-8 lg:w-10 lg:h-10"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink 
                href="#" 
                className="text-[#344054] hover:bg-gray-50 w-8 h-8 lg:w-10 lg:h-10"
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink 
                href="#" 
                className="text-[#344054] hover:bg-gray-50 w-8 h-8 lg:w-10 lg:h-10"
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="text-[#344054]" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink 
                href="#" 
                className="text-[#344054] hover:bg-gray-50 w-8 h-8 lg:w-10 lg:h-10"
              >
                8
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink 
                href="#" 
                className="text-[#344054] hover:bg-gray-50 w-8 h-8 lg:w-10 lg:h-10"
              >
                9
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink 
                href="#" 
                className="text-[#344054] hover:bg-gray-50 w-8 h-8 lg:w-10 lg:h-10"
              >
                10
              </PaginationLink>
            </PaginationItem>
          </div>

          <PaginationItem>
            <PaginationNext 
              href="#" 
              className="text-[#344054] border-[#d0d5dd] bg-white w-full sm:w-auto"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
