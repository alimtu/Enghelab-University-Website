import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

function ContactInfoSection({ data }) {
  const { title, description, image, items } = data;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* تصویر */}
          <div className="lg:w-1/3">
            <div className="relative">
              <img src={image.src} alt={image.alt} className="w-full h-auto" />
            </div>
          </div>

          {/* محتوا */}
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
              <ChevronDown className="w-6 h-6 text-gray-600" />
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

            <div className="space-y-6">
              {items.map((item, idx) => (
                <Card key={idx} className="border-none shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`${item.iconBg} p-3 rounded-full`}>
                        <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className={`text-gray-700 ${item.color || ''}`} dir={item.dir || 'rtl'}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection;
