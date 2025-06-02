import AppAvatar from '@/components/AppComponents/Avatar';

function getLink(desc) {
  const persianToEnglishDigits = str => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(str).replace(/[۰-۹]/g, d => persianDigits.indexOf(d).toString());
  };

  const normalized = persianToEnglishDigits(String(desc).trim());

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  const isPhone = /^(?:\+98|0)?\d{2,4}[-\s]?\d{3,4}[-\s]?\d{3,4}$/.test(normalized);
  const isAddress = !isEmail && !isPhone;

  if (isEmail) {
    return `mailto:${normalized}`;
  } else if (isPhone) {
    const digitsOnly = normalized.replace(/[^+\d]/g, '');
    return `tel:${digitsOnly}`;
  } else if (isAddress) {
    const encodedAddress = encodeURIComponent(String(desc));
    return `https://www.google.com/maps/search/?api=1&query=$${encodedAddress}`;
  }

  return '#';
}

export default function PersonalFullInfoCard({ data }) {
  return (
    <div className={`px-4 lg:px-20 bg-white ${data.className}`}>
      <div className="rounded-lg bg-neutral-50 p-2 lg:p-8 flex flex-col  gap-6">
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between lg:items-center items-start ">
          <div className="flex flex-row gap-6 ">
            <div className="rounded-full border-1 border-grey-100 overflow-hidden">
              <AppAvatar data={{ pic: data.imageSrc, name: data.name }} />
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <h3 className="font-medium text-xl">{data.name}</h3>
              <p className="text-neutral-600 text-base">{data.title}</p>
            </div>
          </div>
          <a
            href={data.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg hover:text-neutral-600 hover:border-neutral-400 cursor-pointer transition-all ease-in-out duration-200 text-neutral-500 border-1 border-neutral-200 font-medium text-sm lg:text-base p-2 lg:p-4"
          >
            {data.resumeButtonText}
          </a>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 flex flex-col gap-8 lg:px-8 lg:py-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <h4 className="self-start text-neutral-500 text-base">{data.biography.label}</h4>
              <p className="text-sm lg:text-base text-neutral-700 text-justify wrap-anywhere leading-7">
                {data.biography.text}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <h4 className="self-start text-neutral-500 text-base">{data.officeAddress.label}</h4>
              {data.officeAddress.link ? (
                <a
                  href={data.officeAddress.link}
                  className="text-sm lg:text-base text-neutral-700 text-justify wrap-anywhere leading-7 hover:text-primary-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.officeAddress.text}
                </a>
              ) : (
                <p className="text-sm lg:text-base text-neutral-700 text-justify wrap-anywhere leading-7">
                  {data.officeAddress.text}
                </p>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-8 lg:px-8 lg:py-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <h4 className="self-start text-neutral-500 text-base">{data.message.label}</h4>
              <p className="text-sm lg:text-base text-neutral-700 text-justify wrap-anywhere leading-7">
                {data.message.text}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-between ">
              <h4 className="self-start text-neutral-500 text-base">{data.email.label}</h4>
              <a
                href={getLink(data.email.value)}
                className="text-primary-600 text-base flex flex-wrap justify-end items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.email.value}
              </a>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-between">
              <h4 className="self-start text-neutral-500 text-base">{data.phone.label}</h4>
              <a
                href={getLink(data.phone.value)}
                className="text-primary-600 text-sm lg:text-base flex flex-wrap justify-end items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.phone.value}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
