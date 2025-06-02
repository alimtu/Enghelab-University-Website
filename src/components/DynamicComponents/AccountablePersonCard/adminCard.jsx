import { EllipsisVertical } from 'lucide-react';
import AppAvatarComponent from '@/components/AppComponents/Avatar';

export default function AdminCardComponent({ data }) {
  return (
    <div
      className={`border rounded-md p-6 flex justify-between items-center flex-col max-lg:gap-8 lg:flex-row ${
        data.level > 1 ? 'lg:mr-12 bg-grey-100' : ''
      }`}
    >
      <div className="flex gap-3 items-center">
        <AppAvatarComponent
          data={{
            pic: 'https://github.com/shadcn.png',
            name: data.name,
            className: 'w-24 h-24',
          }}
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">{data.name}</h3>
          <p className="text-base text-gray-500">{data.description}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-24 items-center">
        <div className="flex flex-col gap-4 text-lg">
          <div className="flex gap-3">
            <span className="text-grey-500">اطلاعات تماس : </span>
            <div className="flex gap-2">
              <a
                href={`tel:${data.phone}`}
                className="font-bold hover:text-blue-600 transition-colors cursor-pointer"
              >
                {data.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-grey-500">آدرس دفتر : </span>
            <div className="flex gap-2">
              <span className="font-bold leading-9">{data.address}</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <EllipsisVertical strokeWidth={3} className="text-grey-700" />
        </div>
      </div>
    </div>
  );
}
