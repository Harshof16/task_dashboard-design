import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface CompanyAvatarProps {
  logo: string
  logoColor: string
  company: string
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8", 
  lg: "w-10 h-10"
}

const textSizeClasses = {
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}

export const CompanyAvatar = ({ 
  logo, 
  logoColor, 
  company, 
  size = "md" 
}: CompanyAvatarProps) => {
  return (
    <Avatar className={sizeClasses[size]} style={{ backgroundColor: logoColor }}>
      <AvatarFallback 
        className={`text-white font-medium border-0 ${textSizeClasses[size]}`}
        style={{ backgroundColor: logoColor }}
      >
        {logo}
      </AvatarFallback>
    </Avatar>
  )
}
