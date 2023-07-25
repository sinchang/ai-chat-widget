import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isArrayWithElement(arg: unknown): boolean {
  return Array.isArray(arg) && arg.length > 0
}

export function sleep(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay))
}
