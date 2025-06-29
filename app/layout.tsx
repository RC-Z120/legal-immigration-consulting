import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '信达法律移民咨询 - 专业移民法律服务',
  description: '信达法律移民咨询公司提供专业的移民法律服务，包括各类签证申请、移民规划、法律咨询等一站式服务。',
  keywords: '移民咨询,法律咨询,签证申请,加拿大移民,移民律师',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 