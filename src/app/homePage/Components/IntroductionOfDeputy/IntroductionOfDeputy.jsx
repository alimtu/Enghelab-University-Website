


const DefaultData = {
    Title:"معرفی معاونت",
    description: "معاونت دانشجویی دانشگاه جامع انقلاب اسلامی، با هدف ایجاد محیطی پویا و حمایت‌گر برای دانشجویان، خدمات متنوعی در حوزه‌های رفاهی، فرهنگی، بهداشتی و مشاوره‌ای ارائه می‌دهد. این معاونت با تأمین امکاناتی مانند خوابگاه‌های مجهز، تغذیه سالم، بیمه درمانی و برنامه‌های فرهنگی، تلاش می‌کند تا دوران تحصیل دانشجویان را به تجربه‌ای ارزشمند تبدیل کند. حمایت از تشکل‌های دانشجویی، برگزاری اردوها، مسابقات و مراسم‌های مذهبی، از جمله فعالیت‌هایی است که به رشد شخصیتی و اجتماعی دانشجویان کمک می‌کند. همچنین، خدمات مشاوره‌ای در زمینه‌های تحصیلی، شغلی و روان‌شناختی به دانشجویان ارائه می‌شود تا در مواجهه با چالش‌ها راهنمایی لازم را دریافت کنند. معاونت دانشجویی با نگاهی آینده‌نگر و مبتنی بر ارزش‌های اسلامی، در تلاش است تا دانشجویان را به عنوان انسان‌هایی مسئولیت‌پذیر و تأثیرگذار در جامعه تربیت کند. دانشجویان می‌توانند برای دریافت خدمات و اطلاعات بیشتر به دفتر معاونت دانشجویی مراجعه یا از طریق سامانه‌های ارتباطی دانشگاه با این معاونت در تماس باشند.",
    video: "/Images/introductionOfTheDeputy/test.mp4"
}

export default function IntroductionOfDeputy({ data = DefaultData }) {
    return (
        <div className="w-full bg-white flex flex-col xl:flex-row justify-center items-center gap-4 lg:gap-8 px-7 py-6 lg:px-20 lg:py-16">
            <div className="w-full xl:w-1/2 flex flex-col gap-4 justify-center items-start">
                <h2 className="font-medium text-2xl lg:text-3xl">{data.Title}</h2>
                <p className="flex-1 text-sm lg:text-base leading-7 lg:leading-8 text-justify wrap-anywhere">
                    {data.description}
                </p>
            </div>
            <div className="w-full xl:w-1/2 ">
                <video className="w-full h-auto rounded-lg" controls preload="auto">
                    <source src={data.video} type="video/mp4" />
                    مرووگر شما بخش ویدیو را پشتبانی نمیکند!
                </video>
            </div>
        </div>
    );
}