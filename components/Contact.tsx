'use client'

import React from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: '电话咨询',
      content: '+1 437-881-5731',
      description: '24/7 专业咨询服务'
    },
    {
      icon: Mail,
      title: '邮件咨询',
      content: 'info@xindalaw.com',
      description: '详细问题请发送邮件'
    },
    {
      icon: MapPin,
      title: '公司地址',
      content: 'Unit 1008 – 250 Consumers Rd, North York, ON M2J 4V6, Canada',
      description: '加拿大总部'
    },
    {
      icon: Clock,
      title: '营业时间',
      content: '周一至周五 9:00-18:00',
      description: '周末可预约咨询'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            联系我们
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            无论您有任何移民相关问题，我们的专业团队都随时为您提供帮助。
            立即联系我们，开始您的移民之旅。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                联系方式
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <info.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 ml-3">
                        {info.title}
                      </h4>
                    </div>
                    <div className="text-gray-700 font-medium">
                      {info.content}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {info.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                关注我们
              </h3>
              <div className="flex space-x-4">
                <button className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </button>
                <button className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </button>
                <button className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              免费咨询
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    电话 *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="请输入您的电话"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="请输入您的邮箱"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  咨询类型
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>请选择咨询类型</option>
                  <option>学习签证</option>
                  <option>工作签证</option>
                  <option>移民申请</option>
                  <option>法律咨询</option>
                  <option>其他服务</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  咨询内容 *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="请详细描述您的咨询内容"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 