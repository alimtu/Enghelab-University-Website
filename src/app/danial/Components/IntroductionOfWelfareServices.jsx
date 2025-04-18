import Image from 'next/image';

    export default function IntroductionOfWelfareServices() {
        return (
            <div className="relative w-full flex flex-col justify-center items-center mb-[20px] sm:px-[60px]">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/Images/IntroductionOfWelfareServices/background.jpg" // Update with your actual background image path
                        alt="Background"
                        fill
                        className="object-cover object-center"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-[#181D27] bg-opacity-80"></div>
                </div>

                <div className="z-20 lg:grid lg:grid-cols-[minmax(auto,588px)_minmax(auto,588px)] p-4 lg:p-[80px] gap-[83px]">
                    <div className="upper pt-[24px]">
                        <h2 className="text-white md:text-[26px] xl:text-[36px] font-bold lg:leading-[4rem] text-justify mb-[24px] lg:mb-[48px]">
                            معرفی خدمات رفاهی دانشگاه جامع انقلاب اسلامی
                        </h2>

                        <div className="relative w-full h-[300px] border-4 rounded-md mb-[24px] lg:mb-0 lg:my-auto">
                            <Image
                                src="/Images/IntroductionOfWelfareServices/self.png"
                                alt="Self service"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-white text-justify px-[20px] pb-[20px] lg:leading-[40px] custom-word-spacing py-8">
                            علاوه بر این، دانشگاه برای رفاه بیشتر دانشجویان، خدمات مشاوره‌ای و
                            روانشناختی نیز ارائه می‌دهد. تیم‌های متخصص مشاوره در زمینه‌های تحصیلی،
                            خانوادگی و روانی آماده کمک به دانشجویان هستند تا بتوانند چالش‌های
                            مختلف را پشت سر بگذارند. همچنین، برنامه‌های فرهنگی و تفریحی متنوعی
                            مانند اردوهای دانشجویی، کارگاه‌های آموزشی و مسابقات ورزشی به طور منظم
                            برگزار می‌شود تا دانشجویان بتوانند در کنار تحصیل، از زندگی دانشجویی
                            لذت ببرند.
                        </p>

                        <div className="relative w-full h-[300px] border-4 rounded-md mb-[24px] lg:mb-0 lg:my-auto">
                            <Image
                                src="/Images/IntroductionOfWelfareServices/library.png"
                                alt="Library"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="bottom lg:flex lg:flex-col">
                        <div className="relative w-full h-[300px] border-4 rounded-md mb-[24px]">
                            <Image
                                src="/Images/IntroductionOfWelfareServices/class.png"
                                alt="Classroom"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-white text-justify px-[20px] pb-[20px] lg:leading-[40px] custom-word-spacing">
                            علاوه بر این، دانشگاه برای رفاه بیشتر دانشجویان، خدمات مشاوره‌ای و
                            روانشناختی نیز ارائه می‌دهد. تیم‌های متخصص مشاوره در زمینه‌های تحصیلی،
                            خانوادگی و روانی آماده کمک به دانشجویان هستند تا بتوانند چالش‌های
                            مختلف را پشت سر بگذارند. همچنین، برنامه‌های فرهنگی و تفریحی متنوعی
                            مانند اردوهای دانشجویی، کارگاه‌های آموزشی و مسابقات ورزشی به طور منظم
                            برگزار می‌شود تا دانشجویان بتوانند در کنار تحصیل، از زندگی دانشجویی
                            لذت ببرند.
                        </p>

                        <div className="relative w-full h-[300px] border-4 rounded-md mb-[24px]">
                            <Image
                                src="/Images/IntroductionOfWelfareServices/salon.png"
                                alt="Salon"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-white text-justify px-[20px] pb-[20px] lg:leading-[40px] custom-word-spacing">
                            علاوه بر این، دانشگاه برای رفاه بیشتر دانشجویان، خدمات مشاوره‌ای و
                            روانشناختی نیز ارائه می‌دهد. تیم‌های متخصص مشاوره در زمینه‌های تحصیلی،
                            خانوادگی و روانی آماده کمک به دانشجویان هستند تا بتوانند چالش‌های
                            مختلف را پشت سر بگذارند. همچنین، برنامه‌های فرهنگی و تفریحی متنوعی
                            مانند اردوهای دانشجویی، کارگاه‌های آموزشی و مسابقات ورزشی به طور منظم
                            برگزار می‌شود تا دانشجویان بتوانند در کنار تحصیل، از زندگی دانشجویی
                            لذت ببرند.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
