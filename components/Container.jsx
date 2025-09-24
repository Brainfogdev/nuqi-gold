import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children,className}) => {
  return (
    <section className={cn('mx-5 sm:mx-20',className)}>
        {children}
    </section>
  )
}

export default Container