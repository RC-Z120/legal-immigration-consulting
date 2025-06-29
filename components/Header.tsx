'use client'

import React, { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: '首页', href: '#' },
    { name: '服务项目', href: '#services' },
    { name: '关于我们', href: '#about' },
    { name: '成功案例', href: '#testimonials' },
    { name: '联系我们', href: '#contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container-max">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 437-881-5731</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@xindalaw.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>免费咨询</span>
              <button className="bg-white text-primary-600 px-4 py-1 rounded text-sm font-medium">
                预约咨询
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">信达法律</div>
            <div className="ml-2 text-sm text-gray-600">移民咨询</div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">免费咨询</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary w-full mt-4">免费咨询</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 