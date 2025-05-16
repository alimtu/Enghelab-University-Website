"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../../../@/components/ui/dropdown-menu"

const menuItems = [
    { id: 1, name: "صفحه اصلی", path: "/" },
    { id: 2, name: "دانشکده ها", path: "" },
    {
        id: 3,
        name: "معاونت ها",
        path: "",
        children: [
            { id: 31, name: "معاونت دانشجویی", path: "/departments/student" },
            { id: 32, name: "معاونت آموزش", path: "/departments/education" },
        ],
    },
    { id: 4, name: "اداری و مالی", path: "" },
    {
        id: 5,
        name: "سامانه ها",
        path: "",
        children: [
            { id: 51, name: "سامانه ۱", path: "" },
            { id: 52, name: "سامانه ۲", path: "" },
            { id: 53, name: "سامانه ۳", path: "" },
        ],
    },
    { id: 6, name: "ثبت نام", path: "" },
    { id: 7, name: "پرتال خبری", path: "" },
    { id: 8, name: "گالری", path: "" },
    { id: 9, name: "آموزش ها", path: "" },
    { id: 10, name: "تماس با دانشگاه", path: "" },
]

const mobileNavigationsItems = [
    { to: "/", name: "صفحه اصلی" },
    { to: "/departments/student", name: "معاونت دانشجویی" },
    { to: "/departments/education", name: "معاونت آموزشی" },
]

export default function Header() {
    const [openSideBar, setOpenSideBar] = useState(false)
    const router = useRouter()

    return (
        <div className="fixed top-0 lg:top-10 left-0 right-0 z-50 flex justify-center">
            <div className="w-full lg:w-11/12 mx-auto h-18 flex items-center justify-center bg-white lg:rounded-full border border-gray-200 p-3 relative">
                <div className="flex w-full justify-between items-center">
                    {/* Desktop Logo / Mobile Menu Toggle */}
                    <div className="lg:min-w-[10%] lg:max-w-[10%]">
                        <div className="hidden lg:block">
                            <Link href="/" aria-label="بازگشت به صفحه اصلی">
                                <Image
                                    src="/Images/Logo/Uni_Logo_Transparent.png"
                                    alt="لوگوی دانشگاه جامع انقلاب اسلامی"
                                    width={50}
                                    height={50}
                                    className="object-contain mr-2"
                                />
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button
                                onClick={() => setOpenSideBar(true)}
                                aria-label="باز کردن منو"
                                className="text-black text-lg flex items-center"
                            >
                                <Image
                                    src="/Images/Header/menu.svg"
                                    alt="آیکون منو"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex w-full justify-between items-center space-x-4 font-semibold">
                        {menuItems.map((item) => (
                            <div key={`item_${item.id}`}>
                                {item.children ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="cursor-pointer text-black hover:text-gray-700 inline-flex items-center">
                                            {item.name}
                                            <Image
                                                src="/Images/Header/Polygon.svg"
                                                alt="آیکون کشویی"
                                                width={10}
                                                height={10}
                                                className="object-contain ml-1"
                                            />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="mt-6" align="start" dir="rlt">
                                            {item.children.map((child) => (
                                                <DropdownMenuItem key={child.id} asChild>
                                                    <Link href={child.path || "#"} className="w-full">
                                                        {child.name}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <Link href={item.path || "#"} className="text-black cursor-pointer hover:text-gray-700">
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile University Name */}
                    <div className="lg:hidden font-bold absolute font-semiboldbold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-center">
                        دانشگاه جامع انقلاب اسلامی
                    </div>

                    {/* Desktop Search / Mobile Logo */}
                    <div className="min-w-1/10 lg:min-w-2/10 flex justify-end items-center">
                        <div className="hidden lg:block w-3/4">
                            <div className="relative">
                                <input
                                    id="search-input"
                                    type="text"
                                    placeholder="جستجو ..."
                                    className="w-full pl-10 pr-4 bg-[#006273]/60 placeholder-white py-2 text-white rounded-full focus:outline-none"
                                />
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <Link href="/" aria-label="بازگشت به صفحه اصلی">
                                <Image
                                    src="/Images/Logo/Uni_Logo_Transparent.png"
                                    alt="لوگوی دانشگاه جامع انقلاب اسلامی"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <div
                    className={`lg:hidden fixed inset-0 z-50 transition-transform duration-300 ${
                        openSideBar ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="absolute inset-0" onClick={() => setOpenSideBar(false)}></div>
                    <div className="relative w-3/4 max-w-xs bg-white h-full p-4 ml-auto">
                        <button
                            onClick={() => setOpenSideBar(false)}
                            aria-label="بستن منو"
                            className="absolute top-4 left-4 text-black"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Link href="/" aria-label="بازگشت به صفحه اصلی">
                            <Image
                                src="/Images/Logo/Uni_Logo_Transparent.png"
                                alt="لوگوی دانشگاه جامع انقلاب اسلامی"
                                width={50}
                                height={50}
                                className="object-contain mb-4"
                            />
                        </Link>
                        <hr className="border-dashed border-gray-300 mb-4" />
                        <div className="space-y-4">
                            {mobileNavigationsItems.map((item, index) => (
                                <div key={`_mobile_sidebar_items_${index}`} className="flex items-center">
                                    <svg className="h-5 w-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <Link
                                        href={item.to}
                                        className="text-gray-600 hover:text-gray-800"
                                        onClick={() => setOpenSideBar(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
