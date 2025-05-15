import React from 'react';
import Image from 'next/image';


import bgImage from '../../../../../public/Images/confrancehall.jpg';
import img1 from '../../../../../public/Images/Frame 2649.png';
import img2 from '../../../../../public/Images/Frame 2649 (1).png';
import img3 from '../../../../../public/Images/Frame 2649 (2).png';
import img4 from '../../../../../public/Images/Frame 2649 (3).png';
import img5 from '../../../../../public/Images/Frame 2649 (4).png';
import img6 from '../../../../../public/Images/Frame 2649 (5).png';

const UniversityStats = () => {
    const stats = [
        { img: img1, text: '4 دانشکده' },
        { img: img2, text: '100 فارغ التحصیل' },
        { img: img3, text: '120 مقاله چاپ شده' },
        { img: img4, text: '40 رشته آموزشی' },
        { img: img5, text: '476 دانشجوی ارشد و دکتری' },
        { img: img6, text: '50 عضو هیئت علمی' },
    ];

    return (
        <div className="mt-8 relative h-fit bg-center bg-cover p-16 ">

            <div className="absolute inset-0 z-0 ">
                <Image
                    src={bgImage}
                    alt="Conference Hall"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#1C2833D9] bg-opacity-50 mix-blend-light "></div>
            </div>


            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-6 justify-items-center justify-content-center  text-white text-center gap-8">
                {stats.map((item, index) => (
                    <div key={index} className={"flex flex-col justify-center items-center"}>
                        <Image src={item.img} alt={`stat-${index}`} width={105}/>
                        <p className="mt-2 text-[12px] flex justify-center  text-center">{item.text}</p>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default UniversityStats;
