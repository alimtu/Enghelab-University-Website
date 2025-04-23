import Slider from "@/app/homePage/Components/Slider/Slider";
import Features from "@/app/homePage/Components/Features/Features";
export default function homePage() {

    return (
        <div className="w-full h-full flex flex-col ">
            {/*<NavBar />*/}
            <Slider />
            <Features />
        </div>
    )
}