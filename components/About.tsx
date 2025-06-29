'use client'

import React from 'react'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, number: '1000+', label: '成功案例' },
    { icon: Award, number: '98%', label: '成功率' },
    { icon: Clock, number: '10年', label: '专业经验' },
    { icon: CheckCircle, number: '24/7', label: '在线服务' }
  ]

  const features = [
    '加拿大联邦和安省政府注册的正规咨询服务机构',
    '资深持牌移民顾问和律师团队',
    '一对一贴心沟通服务，制定专属方案',
    '丰富的北美各大院校、机构合作资源',
    '为留学生和华人提供优质服务',
    '致力于为客户提供有温度的移民建议'
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                关于信达法律移民咨询
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                信达法律移民咨询是加拿大联邦和安省政府注册的正规咨询类服务机构，
                秉承着为留学生和华人的留学移民生活带来优质服务为宗旨。
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                我们的优势
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                了解更多
              </button>
              <button className="btn-secondary">
                联系我们
              </button>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="flex justify-center mb-3">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <stat.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission statement */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                我们的使命
              </h3>
              <p className="text-primary-100 leading-relaxed">
                细节决定成功。您选择的路，我们精心为您铺就。
                信达法律为您的学业、生活及未来保驾护航。
                您的信任，我们的荣幸。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 