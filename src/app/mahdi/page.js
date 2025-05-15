'use client';
// import { redirect } from 'next/navigation';
import LastNews from './Component/LastNews';
import WhyCuir from './Component/WhyCuir';
import Uniinonelook from './Component/uniinonelook';
import NewsSection from "./Component/NewsSection";
import Groups, {Accordion, AccordionItem} from './Component/Groups'

const dummyNews = [
    {
        pic: "/Images/interview.png",
        newstitle1: "رونمایی کتاب «کتاب شناسی اختصاصی غزّه» به اهتمام دکتر سیّدحجّت الحق حسینی استاد دانشگاه صنعتی خواجه نصیرالدّین طوسی",
        desc1: "به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی، رونمایی کتاب «کتاب شناسی اختصاصی غزّه» به اهتمام دکتر سیّدحجّت الحق حسینی استاد دانشگاه صنعتی خواجه نصیرالدّین طوسی در تالار همایش های کوثر برگزار گردید.",
        pic2: "/Images/interview.png",
        newstitle2: "دانشجویان دانشگاه تراز انقلاب باید پژوهشگر باشند.",
        desc2: "دانشجویان دانشگاه تراز انقلاب باید پژوهشگر باشند. دکتر قدیانی رئیس دانشگاه جامع انقلاب اسلامی در شورای پژوهشی دانشگاه مطرح کرد:...",
        pic3: "/Images/interview.png",
        newstitle3: "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی",
        desc3: "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی",
        pic4: "/Images/interview.png",
        newstitle4: "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی",
        desc4: "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی"
    }
];
const data = [{
    innovative: "نوآور",
    innovativedesc: "دانشگاه جامع انقلاب اسلامی با شعار \"نوآور\"، همواره در تلاش است تا با بهره‌گیری از آخرین دستاوردهای علمی و فناوری، فضایی پویا و خلاق برای دانشجویان و پژوهشگران فراهم کند. این دانشگاه با تشویق به تفکر خارج از چارچوب‌های سنتی و حمایت از ایده‌های نو، به پرورش نسل آینده‌ی متفکران و مخترعان کشور می‌پردازد. نوآوری در این دانشگاه تنها به معنای پیشرفت تکنولوژیکی نیست، بلکه شامل ایجاد تحول در روش‌های آموزشی، پژوهشی و مدیریتی نیز می‌شود تا بتواند پاسخگوی نیازهای جامعه در عصر حاضر باشد.",
    Transformational: "تحول گرا",
    Transformationaldesc: "شعار \"تحول گرا\" در دانشگاه جامع انقلاب اسلامی بیانگر تعهد این نهاد به ایجاد تغییرات مثبت و پایدار در جامعه است. این دانشگاه با نگاهی آینده‌نگر و با تکیه بر ارزش‌های اسلامی و انقلابی، درصدد است تا با تربیت نیروهای متخصص و متعهد، زمینه‌ساز تحولات اساسی در عرصه‌های علمی، فرهنگی و اجتماعی شود. تحول‌گرایی در این دانشگاه به معنای حرکت به سمت تعالی و پیشرفت در تمامی ابعاد است، به گونه‌ای که بتواند الگویی برای سایر مراکز علمی و آموزشی در سطح ملی و بین‌المللی باشد.",
    civilizationmaker: "تمدن ساز",
    civilizationmakerdesc: "دانشگاه جامع انقلاب اسلامی با شعار \"تمدن ساز\"، رسالت خود را ایجاد پایه‌های تمدن نوین اسلامی می‌داند. این دانشگاه با تأکید بر نقش علم و دانش در شکل‌گیری تمدن‌ها، در تلاش است تا با ترکیب دانش روز و ارزش‌های اسلامی، گام‌های مؤثری در جهت پیشرفت جامعه بردارد. تمدن‌سازی در این دانشگاه به معنای ایجاد جامعه‌ای است که در آن عدالت، اخلاق، علم و معنویت در کنار یکدیگر قرار گرفته و الگویی برای جهانیان ارائه می‌دهد. این دانشگاه با تربیت انسان‌هایی آگاه، مسئول و متعهد، به ساختن آینده‌ای روشن و متعالی برای ایران و جهان اسلام کمک می‌کند. "
}
]
const accordionItems = [
    {
        id: "cultural-social",
        title: "فرهنگی اجتماعی",
        content: (
            <div className="space-y-2 rtl">
                <p className="font-medium">شکل گیری‌های پژوهشی</p>
                <p className="text-sm text-gray-700">
                    بررسی مسائل مختلف پژوهشی و کشف استعدادهای پژوهشی و گسترش آن در میان دانشجویان پژوهشی، انتشار مجلات
                    پژوهشی،
                    حمایت پژوهشی و غیره. هدف اصلی گروه پژوهشی، حمایت پژوهشی محتوای پژوهشی است.
                </p>
                <ol className="list-decimal list-inside space-y-1 pr-4">
                    <li>تحلیل مسائل مهم کشور و جهان</li>
                    <li>گسترش فرهنگ پژوهش و تحقیق</li>
                    <li>ارتقای علمی دانشگاه‌ها و مراکز علمی</li>
                    <li>تشویق پژوهشگران و محققان در راستای پژوهشی</li>
                    <li>کمک به حل مشکلات علمی، فرهنگی، اجتماعی و اقتصادی از طریق تحقیق و پژوهش</li>
                    <li>پشتیبانی جهت توسعه و گسترش پژوهش</li>
                    <li>تهیه و ارائه پژوهش‌های علمی و آثار</li>
                    <li>همکاری با دولت و جامعه دانشگاهی و پژوهشگران مردم ستاد</li>
                    <li>تهیه و توزیع کتب و مجلات</li>
                    <li>کمک به توسعه مطبوعات، پایگاه‌ها در راستای پژوهشی</li>
                    <li>هم‌اندیشی با سایر مراکز علمی و پژوهشی داخلی و خارجی</li>
                </ol>
            </div>
        ),
        defaultOpen: false
        ,
    },
    {
        id: "rights",
        title: "حقوق",
        content: <div className="ltr">محتوای بخش حقوق</div>,
    },
    {
        id: "resistance",
        title: "جبهه مقاومت",
        content: <div className="rtl">محتوای بخش جبهه مقاومت</div>,
    },
    {
        id: "islamic-management",
        title: "مدیریت اسلامی",
        content: <div className="rtl">محتوای بخش مدیریت اسلامی</div>,
    },
    {
        id: "economy",
        title: "اقتصاد",
        content: <div className="rtl">محتوای بخش اقتصاد</div>,
    },
    {
        id: "crisis-management",
        title: "مدیریت بحران",
        content: <div className="rtl">محتوای بخش مدیریت بحران</div>,
    },
    {
        id: "sociology",
        title: "جامعه شناسی",
        content: <div className="rtl">محتوای بخش جامعه شناسی</div>,
    },
    {
        id: "media",
        title: "رسانه و مطبوعات مرجع",
        content: <div className="rtl">محتوای بخش رسانه و مطبوعات مرجع</div>,
    },
    {
        id: "islamic-revolution",
        title: "آینده پژوهی انقلاب اسلامی",
        content: <div className="rtl">محتوای بخش آینده پژوهی انقلاب اسلامی</div>,
    },
    {
        id: "psychology",
        title: "روانشناسی",
        content: <div className="rtl">محتوای بخش روانشناسی</div>,
    },
]
const researchdata = [
    {
        id: "",
        title: <div className={" w-full flex"}>
            <p>آخرین</p>
        </div>,
        content: (
            <div className={"flex flex-col gap-6"}>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
            </div>
        ),
        defaultOpen: true,
    },
    {
        id: "",
        title: <div className={" w-full flex"}>
            <p>نظامات پژوهشی</p>
        </div>,
        content: (
            <div className={"flex flex-col gap-6"}>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
            </div>
        )
    },
    {
        id: "",
        title: <div className={" w-full flex"}>
            <p>شیوه نامه های پژوهشی</p>
        </div>,
        content: (
            <div className={"flex flex-col gap-6"}>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
                <div className={'flex justify-between px-20 items-center'}>
                    <p className={"text-lg font-medium"}>
                        مقررات نگارش پایان نامه
                    </p>
                    <p className={"text-sm text-gray-400"}>
                        آخرین بروزرسانی:23اسفند 1403
                    </p>
                    <button className={"w-40 h-10 rounded-md bg-[#0CC0BA] text-white"}>
                        دانلود فایل
                    </button>
                </div>
            </div>
        )
    }

]
export default function Home() {

    return <>
        <div>
            <Accordion items={researchdata}/>
            <AccordionItem title="نام کارگروه ها" defaultOpen={true}>
                <p className=" text-gray-600 mb-6 text-right text-sm font-bold">
                    در این بخش، برنامه‌ها و خدماتی که برای دانشجویان استعداد درخشان طراحی شده‌اند را معرفی می‌کنیم. هر
                    برنامه با هدف توانمندسازی شما شکل گرفته است.
                </p>
                <Accordion items={accordionItems}/>
            </AccordionItem>
            <LastNews newstitle={dummyNews}/>
            <WhyCuir data={data}/>
            <Uniinonelook/>
            <NewsSection/>
        </div>
    </>;

}


