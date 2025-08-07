import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MoreHorizontal } from 'lucide-react'
import { Sidebar } from "./Sidebar"

export const MobileHeader = () => {
  return (
    <div className="lg:hidden mb-6">
      <div className="flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-16 p-0 border-r border-[#eaecf0]">
            <Sidebar />
          </SheetContent>
        </Sheet>
        
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
  )
}
