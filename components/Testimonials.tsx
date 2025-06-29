'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: '张女士',
      location: '多伦多',
      service: '学习签证申请',
      content: '信达法律团队非常专业，从申请到获批只用了3个月时间。他们的服务很贴心，每个步骤都有详细指导，让我对整个过程很有信心。',
      rating: 5
    },
    {
      name: '李先生',
      location: '温哥华',
      service: '省提名移民',
      content: '通过信达法律的帮助，我成功获得了省提名。他们的专业知识和丰富经验让我少走了很多弯路，强烈推荐！',
      rating: 5
    },
    {
      name: '王女士',
      location: '卡尔加里',
      service: '家庭团聚移民',
      content: '信达法律帮我完成了家庭团聚移民申请，整个过程很顺利。他们的律师团队很专业，服务态度也很好。',
      rating: 5
    },
    {
      name: '陈先生',
      location: '渥太华',
      service: '工作签证续签',
      content: '我的工作签证续签遇到了问题，信达法律的专业团队帮我解决了所有困难，现在我已经成功续签了。',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            客户评价
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            听听我们客户的真实反馈，了解信达法律如何帮助他们实现移民梦想。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              {/* Quote icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Quote className="w-6 h-6 text-primary-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-sm text-primary-600">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-gray-600">成功案例</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">客户满意度</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">10年</div>
            <div className="text-gray-600">专业经验</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">在线支持</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="btn-primary">
            查看更多成功案例
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 