import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

function RequestProcessSection({ data }) {
  const { title, subtitle, items, note, image } = data;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <img src={image.src} alt={image.alt} className="w-full h-auto rounded-md" />
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
              <ChevronDown className="w-6 h-6 text-gray-600" />
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{subtitle}</p>

            <div className="space-y-6">
              {items.map(step => (
                <div key={step.id} className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg">
                {note}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestProcessSection;
