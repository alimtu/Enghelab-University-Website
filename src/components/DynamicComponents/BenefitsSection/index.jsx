import { ChevronDown } from "lucide-react";

export function BenefitsSection({ data }) {
  const { title, description, image, items } = data;
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
              <ChevronDown className="w-6 h-6 text-gray-600" />
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="lg:w-1/3">
            <div className="relative">
              <img src={image.src} alt={image.alt} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BenefitsSection;