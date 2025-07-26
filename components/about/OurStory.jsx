import Image from "next/image"

export default function OurStorySection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/placeholder.svg"
                alt="Team members celebrating with high-fives in modern office"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Story :</h2>
              <p className="text-xl text-gray-700 font-medium leading-relaxed">
                The Hires Lab was born out of a simple belief: hiring should be human.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Led by Mr. Abdallah Afifi and Mr. Hazem Ismail, we're a team of HR experts who came together to fix
                what's broken in recruitment — turning it from a rushed process into a meaningful one.
              </p>

              <p>
                We built Egypt's first one-stop hub for HR and recruitment solutions — helping companies grow, and
                people find real, life-changing opportunities.
              </p>

              <p className="font-medium text-gray-700">But we don't just look at CVs.</p>

              <p>
                We look at character, potential, and fit — long before day one. And while we hire smart, we also give
                back: training future HR professionals and building a stronger hiring culture across Egypt.
              </p>

              <p className="text-lg font-semibold text-gray-800">Because this isn't just business. Its impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
