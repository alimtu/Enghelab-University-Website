import Image from 'next/image';
import Link from "next/link";

export default function UpperFooter() {
    return (
        <div className="h-20 w-[calc(100%-28px)] mx-auto bg-[#006273] mb-[8px] rounded-[12px] py-[60px] lg:py-[0px] flex justify-center items-center mt-5">
            <div className="connect-infos-container text-white m-[20px] grid grid-cols-2 gap-4 sm:grid-cols-3 sm:place-items-center md:grid-cols-6  w-full">
                {/* Phone Book */}
                <Link className="flex items-center gap-[8px] hover:text-orange-400 group hover:scale-110 transition-transform" href="#">
                    <Image
                        src="/Images/FooterIcons/book.svg"
                        alt="Phone Book"
                        width={20}
                        height={20}
                        className="group-hover:scale-110 transition-transform"
                    />
                    دفترچه تلفن
                </Link>

                {/* Contact President */}
                <Link className="flex items-center gap-[8px] hover:text-orange-400 group hover:scale-110 transition-transform" href="#">
                    <Image
                        src="/Images/FooterIcons/Phone.svg"
                        alt="Contact President"
                        width={20}
                        height={20}
                        className="group-hover:scale-110 transition-transform"
                    />
                    تماس با ریاست
                </Link>

                {/* Newsletter */}
                <Link className="flex items-center gap-[8px] hover:text-orange-400 group hover:scale-110 transition-transform" href="#">
                    <Image
                        src="/Images/FooterIcons/atSign.svg"
                        alt="Newsletter"
                        width={20}
                        height={20}
                        className="group-hover:scale-110 transition-transform"
                    />
                    خبرنامه
                </Link>

                {/* Instagram */}
                <Link className="flex items-center gap-[8px] hover:text-orange-400 group hover:scale-110 transition-transform" href="#">
                    <Image
                        src="/Images/FooterIcons/instagram.svg"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className="group-hover:scale-110 transition-transform"
                    />
                    اینستاگرام
                </Link>

                {/* Eitaa */}
                <Link className="flex items-center gap-[8px] hover:text-orange-400 group hover:scale-110 transition-transform" href="#">
                    <Image
                        src="/Images/FooterIcons/eitaa.svg"
                        alt="Eitaa"
                        width={20}
                        height={20}
                        className="group-hover:scale-110 transition-transform"
                    />
                    ایتا
                </Link>

                {/* WhatsApp */}
                <Link className="flex items-center gap-[8px] hover:text-orange-400 group hover:scale-110 transition-transform" href="#">
                    <Image
                        src="/Images/FooterIcons/whatsapp.svg"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                        className="group-hover:scale-110 transition-transform"
                    />
                    واتس‌آپ
                </Link>
            </div>
        </div>
    );
}