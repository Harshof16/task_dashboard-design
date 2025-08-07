import { Transaction, BuyItem, CreditCard } from "@/types/dashboard"

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    company: "Spotify",
    logo: "S",
    logoColor: "#1DB954",
    amount: "-$18.99",
    date: "Wed 1:00pm",
    category: "Subscriptions",
    categoryColor: "#2e90fa",
    account: "Visa 1234",
    expiry: "06/2024",
  },
  {
    id: 2,
    company: "A Coffee",
    logo: "AC",
    logoColor: "#8B4513",
    amount: "-$4.50",
    date: "Wed 7:20am",
    category: "Food and dining",
    categoryColor: "#ee46bc",
    account: "Visa 1234",
    expiry: "06/2024",
  },
  {
    id: 3,
    company: "Stripe",
    logo: "S",
    logoColor: "#635BFF",
    amount: "+$88.00",
    date: "Wed 2:45am",
    category: "Income",
    categoryColor: "#17b26a",
    account: "Mastercard 1234",
    expiry: "06/2024",
    isIncome: true,
  },
  {
    id: 4,
    company: "Figma",
    logo: "F",
    logoColor: "#F24E1E",
    amount: "-$15.00",
    date: "Tue 6:10pm",
    category: "Subscriptions",
    categoryColor: "#2e90fa",
    account: "Visa 1234",
    expiry: "06/2024",
  },
  {
    id: 5,
    company: "TBF Bakery",
    logo: "TB",
    logoColor: "#D2691E",
    amount: "-$12.50",
    date: "Tue 7:52am",
    category: "Food and dining",
    categoryColor: "#ee46bc",
    account: "Visa 1234",
    expiry: "06/2024",
  },
  {
    id: 6,
    company: "Fresh F&V",
    logo: "FV",
    logoColor: "#228B22",
    amount: "-$40.20",
    date: "Tue 12:15pm",
    category: "Groceries",
    categoryColor: "#f9a000",
    account: "Visa 1234",
    expiry: "06/2024",
  },
  {
    id: 7,
    company: "Stripe",
    logo: "S",
    logoColor: "#635BFF",
    amount: "+$88.00",
    date: "Tue 5:40am",
    category: "Income",
    categoryColor: "#17b26a",
    account: "Mastercard 1234",
    expiry: "06/2024",
    isIncome: true,
  },
]

export const MOCK_BUY_ITEMS: BuyItem[] = [
  { company: "Spotify", logo: "S", logoColor: "#1DB954", amount: "+$244.00" },
  { company: "A coffee", logo: "AC", logoColor: "#8B4513", amount: "+$244.00" },
  { company: "Stripe deposit", logo: "S", logoColor: "#635BFF", amount: "+$244.00" },
  { company: "Figma", logo: "F", logoColor: "#F24E1E", amount: "+$244.00" },
  { company: "TBF Bakery", logo: "TB", logoColor: "#D2691E", amount: "+$244.00" },
  { company: "Fresh F&V", logo: "FV", logoColor: "#228B22", amount: "+$244.00" },
  { company: "Stripe deposit", logo: "S", logoColor: "#635BFF", amount: "+$244.00" },
  { company: "Visa ending in 1234", logo: "V", logoColor: "#1A1F71", amount: "+$244.00" },
]

export const MOCK_CREDIT_CARD: CreditCard = {
  id: "1",
  name: "Untitled",
  cardNumber: "2341 1234 1234 1234",
  expiryDate: "06/24",
  holderName: "OLIVIA RHYE",
  cvv: "1234 1234 1234 1234",
  gradient: ["#7f56d9", "#b692f6", "#e9d7fe"]
}

export const CHART_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

export const CHART_MONTHS_SHORT = [
  "J", "F", "M", "A", "M", "J", 
  "J", "A", "S", "O", "N", "D"
]
