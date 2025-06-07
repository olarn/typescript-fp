export type CardRequest = Readonly<{
  name: string
  salary: number
  hasEmpCert: boolean
}>

export type CardApproved = Readonly<{
  name: string
  salary: number
  hasEmpCert: boolean
  card: string
}>

// ------------------------------------------------------------

export type CardCriteria = Readonly<{
  minSalary: number
  maxSalary: number
  requiredEmpCert: boolean
  card: string
}>

export const cardCriteria: CardCriteria[] = [
  { minSalary: 15000, maxSalary: 25000, requiredEmpCert: false, card: 'silver' },
  { minSalary: 25001, maxSalary: 35000, requiredEmpCert: true, card: 'gold' },
  { minSalary: 35001, maxSalary: 50000, requiredEmpCert: true, card: 'platinum' },
  { minSalary: 50001, maxSalary: 100000, requiredEmpCert: true, card: 'diamond' },
  { minSalary: 100001, maxSalary: 5000000, requiredEmpCert: true, card: 'prestige' },
]

export const salaryTooLow = (salary: number): boolean => salary < 15000