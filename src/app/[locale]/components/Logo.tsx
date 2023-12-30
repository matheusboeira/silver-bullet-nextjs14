'use client'

import { cn } from '@/utils/cn'
import { LucideProps } from 'lucide-react'
import { ComponentProps } from 'react'
import { GiSupersonicBullet } from 'react-icons/gi'

type LogoProps = ComponentProps<'span'> & LucideProps

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden lg:flex">
        <GiSupersonicBullet size={28} />
      </div>
      <span
        className={cn(
          'text-2xl font-bold dark:text-neutral-50 text-neutral-800',
          className
        )}
        {...props}
      >
        Silver Bullet
      </span>
    </div>
  )
}
