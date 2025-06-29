'use client'

import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                您的移民之路
                <span className="text-primary-600 block">我们保驾护航</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                信达法律移民咨询，专注移民法律服务10年。专业团队为您提供一站式移民解决方案，
                从签证申请到移民规划，让您的移民之路更加顺畅。
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">专业律师团队</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">10年成功经验</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">一对一专属服务</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">高成功率保障</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>免费咨询</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary">
                了解服务
              </button>
            </div>
          </div>

          {/* Right content - Image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">信达法律移民咨询</h3>
                  <p className="text-primary-100">专业移民法律服务</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-sm text-primary-100">成功案例</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-primary-100">成功率</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">10年</div>
                    <div className="text-sm text-primary-100">专业经验</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-primary-100">在线服务</div>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium">
                    立即咨询
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 