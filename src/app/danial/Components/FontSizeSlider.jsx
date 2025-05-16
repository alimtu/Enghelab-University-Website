'use client';

import { useState, useEffect } from 'react';

export default function FontSizeSlider() {
    const [textScale, setTextScale] = useState(16); // مقدار پیش‌فرض


    useEffect(() => {
        document.documentElement.style.setProperty('--text-scale', `${textScale}px`);
        localStorage.setItem('textScale', textScale.toString());
    }, [textScale]);


    useEffect(() => {
        const savedTextScale = localStorage.getItem('textScale');
        if (savedTextScale) {
            setTextScale(Number(savedTextScale));
        }
    }, []);


    const handleSliderChange = (e) => {
        setTextScale(Number(e.target.value));
    };

    return (
        <div>
            <div className="w-[600px] h-60 flex flex-col justify-center items-center m-auto">
                <h2 className="text-xl font-bold text-blue-600 py-6">
                    فونت وبسایت را تغییر بدهید
                </h2>
                <h1 className="text-[var(--font-size-dynamic)]">تست فونت داینامیک</h1>
                <input
                    type="range"
                    min="12"
                    max="36"
                    value={textScale}
                    onChange={handleSliderChange}
                    className="w-1/2 accent-blue-500 cursor-pointer"
                    aria-label="تغییر اندازه فونت وبسایت"
                />
                <p className="mt-4 text-gray-600">اندازه فونت: {textScale}px</p>
            </div>
        </div>
    );
}