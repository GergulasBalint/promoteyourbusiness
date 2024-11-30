interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

export const Sheet = ({ children, open, onOpenChange }: SheetProps) => {
  return <div>{children}</div>
}

export const SheetTrigger = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const SheetContent = ({ 
  children,
  side = 'right',
  className = ''
}: { 
  children: React.ReactNode
  side?: 'left' | 'right'
  className?: string
}) => {
  return (
    <div className={`fixed ${side}-0 top-0 h-full bg-white shadow-lg ${className}`}>
      {children}
    </div>
  )
} 