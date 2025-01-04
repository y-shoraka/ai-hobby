import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "InsightIQ has transformed how we approach influencer marketing. The AI-powered insights have helped us increase our campaign ROI by 300%.",
    author: "Marketing Director",
    company: "Global Beauty Brand",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The depth of audience analysis and real-time tracking capabilities have made our influencer campaigns significantly more effective.",
    author: "Head of Digital",
    company: "Fashion Retailer",
    avatar: "/placeholder.svg"
  },
  {
    quote: "We've been able to discover perfect brand advocates and track their performance with unprecedented accuracy.",
    author: "Campaign Manager",
    company: "Tech Startup",
    avatar: "/placeholder.svg"
  }
]

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#1a0f4d] mb-4">
            Loved by marketing teams worldwide
          </h2>
          <p className="text-gray-600 text-lg">
            See what our customers have to say about their experience with InsightIQ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-[#1a0f4d]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

