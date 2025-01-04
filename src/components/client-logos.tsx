import Image from "next/image";

export function ClientLogos() {
  return (
    <div className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Influencer Marketing Hub"
              width={180}
              height={40}
              className="h-10 w-auto grayscale"
            />
            <span className="text-3xl font-bold">4.7</span>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[...Array(6)].map((_, i) => (
            <Image
              key={i}
              src="/placeholder.svg"
              alt={`Client logo ${i + 1}`}
              width={120}
              height={40}
              className="h-8 w-auto grayscale opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
