import Image from 'next/image';
import { Card } from '@/components/ui/card';

import { defaultImagePath } from '../../../../constants';

export function GalleryCard({ title, subtitle }) {
  return (
    <Card className="overflow-hidden border-1 transition-colors cursor-pointer group w-full py-0">
      <div className="relative aspect-[4/3]">
        <Image src={defaultImagePath} alt={title || ''} fill className="object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4 pt-6 text-white border-t-1 border-black/30 rounded-md">
            <div className="text-right" dir="rtl">
              <h3 className="text-lg font-bold mb-2 leading-tight">{title || ''}</h3>
              <p className="text-sm opacity-90 mb-1">{subtitle || ''}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
