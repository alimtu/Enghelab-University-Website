import React from 'react';
import Image from 'next/image';

const UniStats = () => {
    const stats = [
        { img: '/Images/Frame 2649.png', text: '4 دانشکده' },
        { img: '/Images/Frame 2649 (1).png', text: '100 فارغ التحصیل' },
        { img: '/Images/Frame 2649 (2).png', text: '120 مقاله چاپ شده' },
        { img: '/Images/Frame 2649 (3).png', text: '40 رشته آموزشی' },
        { img: '/Images/Frame 2649 (4).png', text: '476 دانشجوی ارشد و دکتری' },
        { img: '/Images/Frame 2649 (5).png', text: '50 عضو هیئت علمی' },
    ];

    return (
        <div className="mt-8 relative h-fit">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/Image/confrancehall.jpg"
                    alt="Conference Hall"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    quality={80}
                />
                <div className="absolute inset-0 bg-[#141B34] bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center p-8 text-white text-center gap-8 container mx-auto">
                {stats.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 p-4">
                        <div className="relative w-16 h-16">
                            <Image
                                src={item.img}
                                alt={`stat-${index}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                quality={70}
                            />
                        </div>
                        <p className="mt-2 text-lg font-medium">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UniStats;