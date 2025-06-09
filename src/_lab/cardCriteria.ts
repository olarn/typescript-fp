export type CardRequest = Readonly<{
  name: string
  salary: number
  hasEmpCert: boolean
}>

export type ApprovalResult = Readonly<{
  name: string
  salary: number
  hasEmpCert: boolean
  cardType: string
}>

// ------------------------------------------------------------

export type CardCriteria = Readonly<{
  cardType: string
  minSalary: number
  maxSalary: number
  requiredEmpCert: boolean
}>

export const cardCriteria: CardCriteria[] = [
  { cardType: 'silver', minSalary: 15000, maxSalary: 25000, requiredEmpCert: false },
  { cardType: 'gold', minSalary: 25001, maxSalary: 35000, requiredEmpCert: true },
  { cardType: 'platinum', minSalary: 35001, maxSalary: 50000, requiredEmpCert: true },
  { cardType: 'diamond', minSalary: 50001, maxSalary: 100000, requiredEmpCert: true },
  { cardType: 'prestige', minSalary: 100001, maxSalary: 5000000, requiredEmpCert: true },
]

export const salaryTooLow = (salary: number): boolean => salary < 15000