'use client'

import React from 'react'
import { FileText, Users, Building, Globe, Shield, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: '签证申请服务',
      description: '提供各类签证申请服务，包括学习签证、工作签证、访问签证等，专业团队确保申请成功率。',
      features: ['学习签证', '工作签证', '访问签证', '返加小签']
    },
    {
      icon: Users,
      title: '移民规划咨询',
      description: '根据个人情况制定专属移民方案，从联邦经济移民到省提名项目，为您选择最适合的移民路径。',
      features: ['联邦快速通道', '省提名移民', '家庭团聚', '投资移民']
    },
    {
      icon: Building,
      title: '法律咨询服务',
      description: '专业律师团队提供移民法律咨询，解答各类法律问题，确保您的权益得到充分保护。',
      features: ['法律风险评估', '文件审核', '上诉服务', '法律代理']
    },
    {
      icon: Globe,
      title: '海外生活服务',
      description: '提供全方位的海外生活服务，从住宿安排到银行开户，让您的海外生活更加便利。',
      features: ['住宿安排', '银行开户', '保险服务', '生活指导']
    },
    {
      icon: Shield,
      title: '身份恢复服务',
      description: '专业处理身份恢复申请，帮助您重新获得合法身份，继续在加拿大的生活和工作。',
      features: ['身份恢复', '逾期居留', '驱逐令', '特殊许可']
    },
    {
      icon: Award,
      title: '永居入籍服务',
      description: '协助您申请永久居民身份和加拿大国籍，完成您的移民梦想。',
      features: ['枫叶卡申请', '入籍申请', '公民考试', '宣誓仪式']
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            专业服务项目
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            信达法律移民咨询提供全方位的移民法律服务，从签证申请到移民规划，
            从法律咨询到生活服务，我们致力于为您的移民之路提供最专业的支持。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-primary-600 font-medium hover:text-primary-700 transition-colors">
                了解更多 →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              需要专业移民法律服务？
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              我们的专业团队随时为您提供免费咨询服务，根据您的具体情况制定专属方案。
            </p>
            <button className="btn-primary">
              立即预约免费咨询
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 