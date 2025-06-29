'use client'

import React from 'react'
import { MessageSquare, UserCheck, FileText, CheckCircle } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: '提交咨询问题',
      description: '通过电话、邮件或在线表单提交您想咨询的移民相关问题',
      step: '01'
    },
    {
      icon: UserCheck,
      title: '专属规划师联系',
      description: '您的专属移民规划师会第一时间联系您，了解您的具体情况',
      step: '02'
    },
    {
      icon: FileText,
      title: '制定专属方案',
      description: '根据您的详情进行专属一对一规划服务，制定最适合的移民方案',
      step: '03'
    },
    {
      icon: CheckCircle,
      title: '开始办理流程',
      description: '缴纳相关费用并开始正式办理流程，全程专业指导',
      step: '04'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            信达法律咨询流程
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            化繁为简，贴心服务，一步到位。我们的专业流程确保您的移民申请顺利进行。
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>
              
              {/* Step content */}
              <div className="bg-gray-50 rounded-xl p-6 h-full">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 p-4 rounded-lg">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              准备开始您的移民之旅？
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              立即提交您的咨询问题，我们的专业团队将为您提供免费的一对一咨询服务。
            </p>
            <button className="btn-primary">
              免费咨询
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process 