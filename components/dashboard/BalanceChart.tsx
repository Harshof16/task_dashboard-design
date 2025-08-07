import { Card, CardContent } from "@/components/ui/card"
import { CHART_MONTHS, CHART_MONTHS_SHORT } from "@/constants/mockData"

export const BalanceChart = () => {
  return (
    <Card className="h-32 lg:h-48 bg-gradient-to-r from-[#f9f5ff] to-[#ffffff] border-0 shadow-none">
      <CardContent className="p-4 lg:p-6 h-full relative overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 800 150">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7f56d9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7f56d9" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b692f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#b692f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <path
            d="M 0 80 Q 100 75 200 70 T 400 65 T 600 60 T 800 55"
            stroke="#7f56d9"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 0 80 Q 100 75 200 70 T 400 65 T 600 60 T 800 55 L 800 150 L 0 150 Z"
            fill="url(#gradient1)"
          />

          <path
            d="M 0 100 Q 100 95 200 90 T 400 85 T 600 80 T 800 75"
            stroke="#b692f6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 0 100 Q 100 95 200 90 T 400 85 T 600 80 T 800 75 L 800 150 L 0 150 Z"
            fill="url(#gradient2)"
          />
        </svg>

        <div className="absolute bottom-2 left-0 right-0 flex justify-between text-xs text-[#667085] px-2 lg:px-4">
          {CHART_MONTHS.map((month) => (
            <span key={month} className="hidden sm:inline lg:inline">
              {month}
            </span>
          ))}
          {CHART_MONTHS_SHORT.map((month, index) => (
            <span key={index} className="sm:hidden">
              {month}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
