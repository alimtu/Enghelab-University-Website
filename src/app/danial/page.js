"use client";
import "../globals.css";
import {useState} from "react";

import FontSizeSlider from "@/app/danial/Components/FontSizeSlider";
import Notifications from "@/app/danial/Components/Notifications";
import ResearchCenter from "@/app/danial/Components/ResearchCenter";
import UpperFooter from "@/app/danial/Components/UpperFooter";
import LowerFooter from "@/app/danial/Components/LowerFooter";


export default function Danial() {


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
        <div dir="rtl" className="w-full">
        <FontSizeSlider />

            <Notifications items={NotificationsItems} />
            <ResearchCenter />
            <UpperFooter />
            <LowerFooter />
        </div>
    )
}