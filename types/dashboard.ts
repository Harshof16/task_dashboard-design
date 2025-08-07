export interface Transaction {
  id: number
  company: string
  logo: string
  logoColor: string
  amount: string
  date: string
  category: string
  categoryColor: string
  account: string
  expiry: string
  isIncome?: boolean
}

export interface BuyItem {
  company: string
  logo: string
  logoColor: string
  amount: string
}

export interface CreditCard {
  id: string
  name: string
  cardNumber: string
  expiryDate: string
  holderName: string
  cvv: string
  gradient: string[]
}

export type TabType = "Personal" | "Business" | "Credit"
