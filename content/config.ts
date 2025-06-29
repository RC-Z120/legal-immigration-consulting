// 网站内容配置文件
// 修改此文件来更新网站内容，无需修改代码

export const siteConfig = {
  // 基本信息
  company: {
    name: '信达法律移民咨询',
    shortName: '信达法律',
    description: '专业移民法律服务',
    phone: '+1 437-881-5731',
    email: 'info@xindalaw.com',
    address: 'Unit 1008 – 250 Consumers Rd, North York, ON M2J 4V6, Canada',
    businessHours: '周一至周五 9:00-18:00',
    website: 'https://xindalaw.com'
  },

  // 统计数据
  stats: {
    successCases: '1000+',
    successRate: '98%',
    experience: '10年',
    support: '24/7'
  },

  // 服务项目
  services: [
    {
      id: 'visa',
      title: '签证申请服务',
      description: '提供各类签证申请服务，包括学习签证、工作签证、访问签证等，专业团队确保申请成功率。',
      features: ['学习签证', '工作签证', '访问签证', '返加小签'],
      icon: 'FileText'
    },
    {
      id: 'immigration',
      title: '移民规划咨询',
      description: '根据个人情况制定专属移民方案，从联邦经济移民到省提名项目，为您选择最适合的移民路径。',
      features: ['联邦快速通道', '省提名移民', '家庭团聚', '投资移民'],
      icon: 'Users'
    },
    {
      id: 'legal',
      title: '法律咨询服务',
      description: '专业律师团队提供移民法律咨询，解答各类法律问题，确保您的权益得到充分保护。',
      features: ['法律风险评估', '文件审核', '上诉服务', '法律代理'],
      icon: 'Building'
    },
    {
      id: 'life',
      title: '海外生活服务',
      description: '提供全方位的海外生活服务，从住宿安排到银行开户，让您的海外生活更加便利。',
      features: ['住宿安排', '银行开户', '保险服务', '生活指导'],
      icon: 'Globe'
    },
    {
      id: 'restoration',
      title: '身份恢复服务',
      description: '专业处理身份恢复申请，帮助您重新获得合法身份，继续在加拿大的生活和工作。',
      features: ['身份恢复', '逾期居留', '驱逐令', '特殊许可'],
      icon: 'Shield'
    },
    {
      id: 'citizenship',
      title: '永居入籍服务',
      description: '协助您申请永久居民身份和加拿大国籍，完成您的移民梦想。',
      features: ['枫叶卡申请', '入籍申请', '公民考试', '宣誓仪式'],
      icon: 'Award'
    }
  ],

  // 客户评价
  testimonials: [
    {
      id: 1,
      name: '张女士',
      location: '多伦多',
      service: '学习签证申请',
      content: '信达法律团队非常专业，从申请到获批只用了3个月时间。他们的服务很贴心，每个步骤都有详细指导，让我对整个过程很有信心。',
      rating: 5
    },
    {
      id: 2,
      name: '李先生',
      location: '温哥华',
      service: '省提名移民',
      content: '通过信达法律的帮助，我成功获得了省提名。他们的专业知识和丰富经验让我少走了很多弯路，强烈推荐！',
      rating: 5
    },
    {
      id: 3,
      name: '王女士',
      location: '卡尔加里',
      service: '家庭团聚移民',
      content: '信达法律帮我完成了家庭团聚移民申请，整个过程很顺利。他们的律师团队很专业，服务态度也很好。',
      rating: 5
    },
    {
      id: 4,
      name: '陈先生',
      location: '渥太华',
      service: '工作签证续签',
      content: '我的工作签证续签遇到了问题，信达法律的专业团队帮我解决了所有困难，现在我已经成功续签了。',
      rating: 5
    }
  ],

  // 服务流程
  process: [
    {
      step: '01',
      title: '提交咨询问题',
      description: '通过电话、邮件或在线表单提交您想咨询的移民相关问题',
      icon: 'MessageSquare'
    },
    {
      step: '02',
      title: '专属规划师联系',
      description: '您的专属移民规划师会第一时间联系您，了解您的具体情况',
      icon: 'UserCheck'
    },
    {
      step: '03',
      title: '制定专属方案',
      description: '根据您的详情进行专属一对一规划服务，制定最适合的移民方案',
      icon: 'FileText'
    },
    {
      step: '04',
      title: '开始办理流程',
      description: '缴纳相关费用并开始正式办理流程，全程专业指导',
      icon: 'CheckCircle'
    }
  ],

  // 社交媒体
  socialMedia: {
    wechat: 'xindalaw',
    weibo: '信达法律移民',
    instagram: 'xindalaw',
    facebook: 'xindalaw'
  },

  // SEO 配置
  seo: {
    title: '信达法律移民咨询 - 专业移民法律服务',
    description: '信达法律移民咨询公司提供专业的移民法律服务，包括各类签证申请、移民规划、法律咨询等一站式服务。',
    keywords: '移民咨询,法律咨询,签证申请,加拿大移民,移民律师',
    ogImage: '/og-image.jpg'
  }
}

export default siteConfig 