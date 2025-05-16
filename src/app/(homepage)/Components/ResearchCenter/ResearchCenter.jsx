'use client'; // Add this if you're using client-side features

import Image from 'next/image';
import bg from "../../../../../public/Images/FooterIcons/BgResearch.jpg";

export default function ResearchCenter() {
    return (
        <div className="relative  w-full flex flex-col justify-center items-center mb-5 sm:px-[60px]">
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={bg}
                    alt="University building"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-primary-950/85"></div>

            <div className="z-20 lg:grid lg:grid-cols-[minmax(auto,588px)_minmax(auto,588px)] p-4 lg:p-20 gap-20 w-full max-w-[1440px] mx-auto">
                <div className="upper pt-[24px]">
                    <h2 className="text-white  font-bold  text-2xl lg:text-4xl text-justify wrap-anywhere leading-relaxed mb-[24px] lg:mb-[48px]">
                        مراکز تحقیقاتی، پژوهشکده ها، کتابخانه مرکزی، علم سنجی، کتب و انتشارات
                        و نشریات دانشگاه
                    </h2>
                    <div className="relative w-full h-72 lg:h-100">
                        <Image
                            src="/Images/FooterIcons/library.png"
                            alt="Library Image"
                            fill
                            className=" md:border-4 md:border-white rounded-xl object-cover"
                            quality={90}
                        />
                    </div>
                </div>

                <div className="bottom lg:flex lg:flex-col-reverse mt-8 lg:mt-0">
                    <p className=" my-5 lg:my-10 text-white text-justify text-base px-5 pb-5 leading-7 custom-word-spacing">
                        دانشگاه جامع انقلاب اسلامی با درک ضرروت جهاد علمی و شکستن مرزهای دانش
                        بر اساس توصیه های اساسی امام خامنه ای (مدظله العالی) مندرج در بیانیه
                        گام دوم انقلاب اسلامی، با استفاده از راه های میانبر و تفکر جهادی و
                        بسیجی، لزوم بکارگیری توانمندی های علمی منحصربفرد نخبگان کشور و تأمین
                        کادر کارشناسی و مدیریتی مورد نیاز انقلاب اسلامی متناسب با راهبردها،
                        فسیاست ها و اقدامات اساسی اسناد بالا دستی نظام اسلامی، خود را ملزم
                        دانسته بستر شایسته و الزامات تحقق دانشگاهی این مهم را فراهم سازد.
                    </p>
                    <div className="relative w-full h-[300px] lg:h-[400px] mt-4 lg:mt-0">
                        <Image
                            src="/Images/FooterIcons/library2.png"
                            alt="Second Library Image"
                            fill
                            className="md:border-4 md:border-white rounded-xl object-cover"
                            quality={90}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}