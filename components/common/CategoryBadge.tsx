import { Badge } from "@/components/ui/badge"

interface CategoryBadgeProps {
  category: string
  categoryColor: string
}

export const CategoryBadge = ({ category, categoryColor }: CategoryBadgeProps) => {
  return (
    <Badge
      className="text-xs px-2 py-1 rounded-full border-0 hover:bg-current"
      style={{
        backgroundColor: `${categoryColor}20`,
        color: categoryColor,
      }}
    >
      {category}
    </Badge>
  )
}
