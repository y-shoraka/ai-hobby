import { Card, CardContent } from "@/components/ui/card"

const metrics = [
  {
    value: "10M+",
    label: "Creators Analyzed",
    description: "Across multiple social platforms"
  },
  {
    value: "98%",
    label: "Accuracy Rate",
    description: "In audience analysis and predictions"
  },
  {
    value: "2.5B+",
    label: "Data Points",
    description: "Processed daily for insights"
  },
  {
    value: "500+",
    label: "Enterprise Clients",
    description: "Trust our platform globally"
  }
]

export function Metrics() {
  return (
    <section className="py-24 bg-[#1a0f4d] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by leading brands worldwide
          </h2>
          <p className="text-white/80 text-lg">
            Our platform processes billions of data points daily to provide the most accurate influencer marketing insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#5800FF] to-purple-500 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {metric.label}
                </div>
                <p className="text-white/70">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

