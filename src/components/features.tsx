import { BarChart3, Search, Users, FileText, TrendingUp, Target } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: "AI-Powered Creator Discovery",
    description: "Find the perfect creators for your brand using advanced AI algorithms that analyze engagement, audience demographics, and content performance."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track campaign performance with comprehensive analytics dashboards showing engagement rates, ROI, and audience insights."
  },
  {
    icon: Users,
    title: "Audience Analysis",
    description: "Get deep insights into creator audiences including demographics, interests, and brand affinities to ensure perfect alignment."
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    description: "Generate detailed campaign reports automatically with key metrics, insights, and recommendations for optimization."
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Monitor creator performance over time with historical data analysis and trend identification."
  },
  {
    icon: Target,
    title: "Campaign Management",
    description: "Streamline your influencer campaigns with integrated tools for outreach, coordination, and performance monitoring."
  }
]

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#1a0f4d] mb-4">
            Everything you need to run successful influencer campaigns
          </h2>
          <p className="text-gray-600 text-lg">
            Our comprehensive platform provides all the tools and insights you need to discover, manage, and optimize your influencer marketing campaigns.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#5800FF]/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#5800FF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a0f4d] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

