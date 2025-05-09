import Image from 'next/image';

import Link from "next/link";

export default function LowerFooter() {
    return (
        <div className="Footer-img relative z-0  w-full mx-auto mb-[76px] lg:mb-3  text-white">
                <div className="absolute z-10 inset-0 bg-[#181D27] bg-opacity-95 "></div>

            <div className="relative pb-[60px] z-20 grid grid-col-1 lg:grid-cols-3">
                {/* Easy Access Section */}
                <div className="easy-acess mr-[16px] ml-[16px] mt-[8px]">
                    <div className="flex gap-[8px] pt-[28px] pb-[24px]">
                        <Image
                            src="/Images/FooterIcons/FooterArrow.svg"
                            alt="Arrow icon"
                            width={20}
                            height={20}
                        />
                        <h3 className="text-white font-bold text-base pr-[8px]">دسترسی آسان</h3>
                    </div>
                    <ul className="flex flex-col gap-[16px] list-disc mr-[16px]">
                        {['ریاست محترم دانشگاه', 'معاونت آموزشی و پژوهشی', 'پست الکترونیک دانشگاه',
                            'معاونت پژوهش و فناوری', 'فناوری اطلاعات و ارتباطات', 'سامانه پاسخگویی به شکایات']
                            .map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="hover:text-orange-400 text-sm ">{item}</Link>
                                </li>
                            ))}
                    </ul>
                </div>

                {/* Useful Links Section */}
                <div className="useful-links mr-[16px] ml-[16px] mt-[8px]">
                    <div className="flex gap-[8px] pt-[28px] pb-[24px]">
                        <Image
                            src="/Images/FooterIcons/FooterArrow.svg"
                            alt="Arrow icon"
                            width={20}
                            height={20}
                        />
                        <h3 className="text-white pr-[8px] font-bold text-base">پیوند های مفید</h3>
                    </div>
                    <ul className="flex flex-col gap-[16px] list-disc mr-[16px]">
                        {['ایران پیپر', 'ایرانداک', 'سامانه دانا(درگاه آشنایی با نخبگان و آینده سازان)',
                            'پایگاه استنادی علوم جهان اسلام (isc)', 'سامانه نان(سامانه نظام ایده ها و نیازها)',
                            'سامانه ساتع( سامانه اجرایی تقاضا و عرضه)', 'سامانه مپفا (مدیریت پژوهش و فناوری ایران)',
                            'سامانه ساجد ( سامانه ارتباط جامعه و دانشگاه)', 'سامانه پرتال نشریات علمی']
                            .map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="hover:text-orange-400 text-sm">{item}</Link>
                                </li>
                            ))}
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div className="contact-us mr-[16px] ml-[16px] mt-[8px]">
                    <div className="flex gap-[8px] pt-[28px] pb-[24px]">
                        <Image
                            src="/Images/FooterIcons/FooterArrow.svg"
                            alt="Arrow icon"
                            width={20}
                            height={20}
                        />
                        <h3 className="text-white pr-[8px] font-bold text-base">ارتباط با ما</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-[67px] gap-y-[20px]">
                        {/* Postal Code */}
                        <div>
                            <div className="flex gap-[5px]">
                                <Image
                                    src="/Images/FooterIcons/archiveIcon.svg"
                                    alt="Archive icon"
                                    width={16}
                                    height={16}
                                />
                                <span className="hover:text-orange-400 text-sm">کد پستی</span>
                            </div>
                            <Link href="#">۵۵۵۵۵۵۵۵۵- ۵۵۵۵۵۵۵۵۵</Link>
                        </div>

                        {/* Address */}
                        <div>
                            <div className="flex gap-[5px]">
                                <Image
                                    src="/Images/FooterIcons/mapPin.svg"
                                    alt="Map pin icon"
                                    width={16}
                                    height={16}
                                />
                                <span className="hover:text-orange-400 text-sm">نشانی</span>
                            </div>
                            <Link href="#">تهران میدان، میدان سپاه، خیابان حضرت ولی‌عصر، دانشگاه جامع انقلاب اسلامی</Link>
                        </div>

                        {/* Email */}
                        <div>
                            <div className="flex gap-[5px]">
                                <Image
                                    src="/Images/FooterIcons/atSign.svg"
                                    alt="Email icon"
                                    width={16}
                                    height={16}
                                />
                                <span className="hover:text-orange-400 text-sm">ایمیل</span>
                            </div>
                            <Link href="#">email@example.com</Link>
                        </div>

                        {/* Phone */}
                        <div>
                            <div className="flex gap-[5px]">
                                <Image
                                    src="/Images/FooterIcons/Phone.svg"
                                    alt="Phone icon"
                                    width={16}
                                    height={16}
                                />
                                <span className="hover:text-orange-400 text-sm">شماره تماس</span>
                            </div>
                            <Link href="#">۰۲۱-۱۲۳۴۵۶۷۸ ۰۲۱-۱۲۳۴۵۶۷۸</Link>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="map flex justify-center pt-[38px] pb-[15px]">
                        <div className="relative w-full h-[200px]">
                            <Image
                                src="/Images/FooterIcons/image.png"
                                alt="Map"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center absolute bottom-0 w-full z-30">
                    <p className="p-[10px] m-auto max-w-[85%] border-solid border-t-2 border-white">
                        کلیه حقوق مادی و معنوی برای دانشگاه جامع انقلاب اسلامی محفوظ می‌باشد.
                    </p>
                </div>
            </div>
        </div>
    );
}