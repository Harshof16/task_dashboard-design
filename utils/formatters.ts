export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const formatCardNumber = (cardNumber: string): string => {
  return cardNumber.replace(/(.{4})/g, '$1 ').trim()
}

export const getCardType = (account: string): 'visa' | 'mastercard' | null => {
  if (account.toLowerCase().includes('visa')) return 'visa'
  if (account.toLowerCase().includes('mastercard')) return 'mastercard'
  return null
}

export const isIncomeTransaction = (amount: string): boolean => {
  return amount.startsWith('+')
}
