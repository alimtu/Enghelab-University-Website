
import LastNews from './Component/LastNews';
import WhyCuir from './Component/WhyCuir'
import Uniinonelook from './Component/uniinonelook'
const dummyNews = [
    {
        pic: require("../../../public/Images/Hero.png"),
        newstitle1: "رونمایی کتاب «کتاب شناسی اختصاصی غزّه»" ,
        desc1: "به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی، رونمایی کتاب «کتاب شناسی اختصاصی غزّه» به اهتمام دکتر سیّدحجّت الحق حسینی استاد دانشگاه صنعتی خواجه نصیرالدّین طوسی در تالار همایش های کوثر برگزار گردید. ",
        pic2: require("../../../public/Images/interview.png"),
        newstitle2: "دانشجویان دانشگاه تراز انقلاب باید پژوهشگر باشند.",
        desc2: "دانشجویان دانشگاه تراز انقلاب باید پژوهشگر باشند.\n" +
            "دکتر قدیانی رئیس دانشگاه جامع انقلاب اسلامی در شورای پژوهشی دانشگاه مطرح کرد:...",
        pic3: require("../../../public/Images/interview.png"),
        newstitle3: "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی",
        desc3: "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی"
    }
];

export default function Home() {
    return<>
        <div>
        <LastNews newstitle={dummyNews} />
        <WhyCuir/>
            <Uniinonelook />
        </div>
        </>;

}
