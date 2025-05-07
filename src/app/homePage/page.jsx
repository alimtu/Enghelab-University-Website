'use client'
import {useState} from "react";
import Slider from "../homePage/Components/Slider/Slider";
import Features from "../homePage/Components/Features/Features";
import LastNews from "../homePage/Components/LastNews/LastNews";
import WhyCuIr from "../homePage/Components/WhyCuIr/WhyCuIr";
import UniStats from "../homePage/Components/UniStats/UniStats";
import Notifications from "../homePage/Components/Notifications/Notifications";
import ResearchCenter from "../homePage/Components/ResearchCenter/ResearchCenter";
import Gallery from "../homePage/Components/Gallery/Gallery";
import NavBar from "../homePage/Components/NavBar/NavBar";

export default function HomePage() {
    const dummyNews = [
        {
            pic: "/Images/Hero.png",
            newstitle1: "رونمایی کتاب «کتاب شناسی اختصاصی غزّه»",
            desc1: "به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی، رونمایی کتاب «کتاب شناسی اختصاصی غزّه» به اهتمام دکتر سیّدحجّت الحق حسینی استاد دانشگاه صنعتی خواجه نصیرالدّین طوسی در تالار همایش های کوثر برگزار گردید.",
            pic2: "/Images/interview.png",
            newstitle2: "دانشجویان دانشگاه تراز انقلاب باید پژوهشگر باشند.",
            desc2: "دانشجویان دانشگاه تراز انقلاب باید پژوهشگر باشند. دکتر قدیانی رئیس دانشگاه جامع انقلاب اسلامی در شورای پژوهشی دانشگاه مطرح کرد:...",
            pic3: "/Images/interview.png",
            newstitle3: "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی",
            desc3: "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی"
        }
    ];

    const [NotificationsItems, setNotificationsItems] = useState([
        {
            pic: require("../../../public/Images/Notifications/imagecard.png"),
            title:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            description:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            date: "۲۱ اردیبهشت ۱۴۰۳",
        },
        {
            pic: require("../../../public/Images/Notifications/imagecard.png"),
            title:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            description:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            date: "۲۱ اردیبهشت ۱۴۰۳",
        },
        {
            pic: require("../../../public/Images/Notifications/imagecard.png"),
            title:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            description:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            date: "۲۱ اردیبهشت ۱۴۰۳",
        },
        {
            pic: require("../../../public/Images/Notifications/imagecard.png"),
            title:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            description:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            date: "۲۱ اردیبهشت ۱۴۰۳",
        },
        {
            pic: require("../../../public/Images/Notifications/imagecard.png"),
            title:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            description:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            date: "۲۱ اردیبهشت ۱۴۰۳",
        },
        {
            pic: require("../../../public/Images/Notifications/imagecard.png"),
            title:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            description:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            date: "۲۱ اردیبهشت ۱۴۰۳",
        },
        {
            pic: require("../../../public/Images/Notifications/imagecard.png"),
            title:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            description:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            date: "۲۱ اردیبهشت ۱۴۰۳",
        },
        {
            pic: require("../../../public/Images/Notifications/imagecard.png"),
            title:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            description:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            date: "۲۱ اردیبهشت ۱۴۰۳",
        },
        {
            pic: require("../../../public/Images/Notifications/imagecard.png"),
            title:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            description:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            date: "۲۱ اردیبهشت ۱۴۰۳",
        },
        {
            pic: require("../../../public/Images/Notifications/imagecard.png"),
            title:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            description:
                "۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه",
            date: "۲۱ اردیبهشت ۱۴۰۳",
        },
    ]);


    return (
        <div dir="rtl" lang="fa" className=" h-full flex flex-col">
            <Slider />
            <Features />
            <LastNews newstitle={dummyNews} />
            <WhyCuIr />
            <UniStats />
            <Notifications items={NotificationsItems} />
            <ResearchCenter />
            <Gallery />
            {/*<UpperFooter />*/}
            {/*<LowerFooter />*/}
        </div>
    );
}