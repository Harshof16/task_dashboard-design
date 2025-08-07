import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, BarChart3, CreditCard, ArrowUpDown, Clock, Users, Settings } from 'lucide-react'

const navigationItems = [
  { icon: Home, isActive: true },
  { icon: BarChart3, isActive: false },
  { icon: CreditCard, isActive: false },
  { icon: ArrowUpDown, isActive: false },
  { icon: Clock, isActive: false },
  { icon: Users, isActive: false },
]

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Logo */}
      <div className="flex items-center justify-center py-6">
        <div className="w-8 h-8 bg-[#7f56d9] rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-2">
        <nav className="flex flex-col space-y-6 px-2">
          {navigationItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Button 
                key={index}
                variant="ghost" 
                size="icon" 
                className={`w-10 h-10 mx-auto ${
                  item.isActive ? 'text-[#7f56d9]' : 'text-[#667085]'
                }`}
              >
                <Icon className="w-5 h-5" />
              </Button>
            )
          })}
        </nav>
      </ScrollArea>

      <Separator />

      {/* Bottom Section */}
      <div className="p-4 space-y-4">
        <Button variant="ghost" size="icon" className="w-10 h-10 text-[#667085] mx-auto">
          <Settings className="w-5 h-5" />
        </Button>
        <div className="flex justify-center">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/abstract-profile.png" />
            <AvatarFallback className="bg-[#7f56d9] text-white text-xs">U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}
