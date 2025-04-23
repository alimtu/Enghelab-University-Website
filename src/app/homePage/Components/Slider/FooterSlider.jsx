
export default function FooterSlider() {
    return (
        <div
            className="min-w-full min-h-8 h-8 flex absolute bottom-0 z-20 items-center justify-center" // Use a high z-index to ensure it's above the slider images
        >
            {/* This div acts as the background with low opacity */}
            <div className="absolute inset-0  bg-opacity-20 backdrop-blur-sm  "></div>

            <div className="relative text-white opacity-100 z-30">
                آخرین اخبار مربوط به دانشگاه جامع انقلاب اسلامی
            </div>
        </div>
    );
}