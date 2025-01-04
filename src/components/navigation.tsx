import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg"
            alt="InsightIQ"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1">
            <Link href="/solutions" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Solutions
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/tools" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Free AI Tools
            </Link>
            <Badge variant="secondary" className="bg-[#e8faf0] text-[#16a34a] border-0">
              NEW
            </Badge>
          </div>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Contact us
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Blog
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-[#5800FF] hover:text-[#5800FF]/90"
          >
            Sign In
          </Link>
          <Button
            asChild
            className="bg-[#5800FF] text-white hover:bg-[#5800FF]/90"
          >
            <Link href="/try-free">
              Try For Free
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

