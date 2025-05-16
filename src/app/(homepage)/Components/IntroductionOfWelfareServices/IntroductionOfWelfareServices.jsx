import Image from "next/image";
import bg from "../../../../../public/Images/FooterIcons/BgResearch.jpg";


export default function IntroductionOfWelfareServices({ title, items }) {
    const column1Items = items.filter((_, index) => index % 2 === 0);
    const column2Items = items.filter((_, index) => index % 2 !== 0);


    const renderItem = (item, originalIndex, isFirstOverallItem) => (
        <div
            key={originalIndex}

            className="flex flex-col gap-5"
        >
            {isFirstOverallItem && (
                <h2 className="text-white w-full text-xl lg:text-3xl font-bold text-justify mb-4 lg:mb-28">
                    {title}
                </h2>
            )}
            <img
                src={item.img || ""}
                alt={`Image ${originalIndex}`}
                className="w-full h-auto lg:border-3 lg:border-white rounded-xl"
            />
            <p className="text-white text-sm leading-7 text-justify">
                {item.desc}
            </p>
        </div>
    );

    return (
        <div>
            <div className="relative Welfare-img bg-no-repeat bg-cover bg-center bg-fixed w-full bg-Footer-100 flex flex-col justify-center items-center mb-5 p-5 lg:p-20">
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

                <div className="z-20 w-full p-4 lg:p-0 lg:flex lg:justify-center">

                    <div className="grid grid-cols-1 gap-10 lg:hidden w-full max-w-[600px] mx-auto" >
                        {items.map((item, index) => renderItem(item, index, index === 0))}
                    </div>

                    <div className="hidden lg:flex lg:flex-row lg:gap-10 w-auto">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-10 w-full max-w-[600px]">
                            {column1Items.map((item) => {
                                const originalIndex = items.indexOf(item);
                                return renderItem(item, originalIndex, originalIndex === 0);
                            })}
                        </div>

                        {column2Items.length > 0 && (
                            <div className="flex flex-col gap-10 w-full max-w-[600px]"  >
                                {column2Items.map((item) => {
                                    const originalIndex = items.indexOf(item);
                                    // Title is only for originalIndex 0, which is always in column 1
                                    return renderItem(item, originalIndex, false);
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}