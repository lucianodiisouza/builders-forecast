export type NavigationMenuProps = {
  active: 'hoje' | 'amanha'
  setActive: (active: 'hoje' | 'amanha') => void
}

export type NextDaysScreen = {
  NextDays: string
}
