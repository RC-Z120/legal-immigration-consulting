'use client'

import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: '签证申请', href: '#' },
      { name: '移民规划', href: '#' },
      { name: '法律咨询', href: '#' },
      { name: '生活服务', href: '#' }
    ],
    company: [
      { name: '关于我们', href: '#' },
      { name: '成功案例', href: '#' },
      { name: '联系我们', href: '#' },
      { name: '加入我们', href: '#' }
    ],
    resources: [
      { name: '移民资讯', href: '#' },
      { name: '政策解读', href: '#' },
      { name: '常见问题', href: '#' },
      { name: '下载资料', href: '#' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-primary-400">信达法律</div>
              <div className="ml-2 text-sm text-gray-400">移民咨询</div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              信达法律移民咨询是加拿大联邦和安省政府注册的正规咨询类服务机构，
              专注移民法律服务10年，为您的移民之路保驾护航。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">+1 437-881-5731</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">info@xindalaw.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-1" />
                <span className="text-gray-400">
                  Unit 1008 – 250 Consumers Rd,<br />
                  North York, ON M2J 4V6, Canada
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">资源中心</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} 信达法律移民咨询. 保留所有权利.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm">
                隐私政策
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm">
                服务条款
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 