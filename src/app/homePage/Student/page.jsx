import Slider from '../Student/Components/Slider/Slider';
import Features from "../Student/Components/Features/Features";


export default function Student() {

    return (
        <div dir="rtl" lang="fa" className=" h-full flex flex-col">
            <Slider title={"معاونت دانشجویی"} />
            <Features />
        </div>
    )
}