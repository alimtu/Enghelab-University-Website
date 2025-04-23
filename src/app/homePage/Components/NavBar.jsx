"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Change this line
import { FaBars, FaChevronDown, FaSearch } from 'react-icons/fa';

export default function NavBar() {
    const router = useRouter();
    const [openSideBar, setOpenSideBar] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false); // Consider using useEffect for window size

    // You might want to use useEffect to set isDesktop on mount and window resize
    // useEffect(() => {
    //   const handleResize = () => {
    //     setIsDesktop(typeof window !== 'undefined' && window.innerWidth >= 1024);
    //   };
    //   handleResize(); // Set initial value
    //   window.addEventListener('resize', handleResize);
    //   return () => window.removeEventListener('resize', handleResize);
    // }, []);


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
                { id: 31, name: "معاونت ها", path: "" },
                { id: 32, name: "معاونت ها", path: "" },
                { id: 33, name: "معاونت ها", path: "" },
            ],
        },
        { id: 6, name: "ثبت نام", path: "" },
        { id: 7, name: "پرتال خبری", path: "" },
        { id: 8, name: "گالری", path: "" },
        { id: 9, name: "آموزش ها", path: "" },
        { id: 10, name: "تماس با دانشگاه", path: "" },
    ];

    const mobileNavigationsItems = [
        { to: "/", name: "صفحه اصلی" },
        { to: "/departments/student", name: "معاونت دانشجویی" },
        { to: "/departments/education", name: "معاونت آموزشی" },
    ];

    return (
        <div className="absolute flex header-component max-lg:w-full lg:min-w-[calc(100vw*11/12)] min-h-18 h-18 bg-white lg:rounded-full border border-grey-100 top-0 lg:top-12 z-[1001] p-3 items-center justify-center">
            <div className="flex w-full justify-between items-center">
                {isDesktop ? (
                    <div className="min-w-10p max-w-10p">
                        <Image
                            className="w-14 bg-fixed"
                            src="/assets/images/Logo/Uni_Logo_Transparent.png"
                            alt="University Logo"
                            width={56}
                            height={56}
                        />
                    </div>
                ) : (
                    <FaBars
                        className="text-black text-lg cursor-pointer"
                        onClick={() => setOpenSideBar(true)}
                    />
                )}

                <div className="hidden lg:flex w-full justify-between items-center">
                    {menuItems.map((item) => (
                        <div key={`item_${item.id}`}>
                            {item.children ? (
                                <div className="dropdown">
                                    <div className="flex gap-1 items-center cursor-pointer">
                                        <div>{item.name}</div>
                                        <FaChevronDown className="text-xs text-black" />
                                    </div>
                                    <div className="dropdown-menu">
                                        {item.children.map((child) => (
                                            <div
                                                key={`child_${child.id}`}
                                                className="dropdown-item"
                                                onClick={() => router.push(child.path)}
                                            >
                                                {child.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className="cursor-pointer"
                                    onClick={() => router.push(item.path)}
                                >
                                    <div>{item.name}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex lg:hidden">دانشگاه جامع انقلاب اسلامی</div>

                {isDesktop ? (
                    <div className="min-w-20p flex justify-end items-end">
                        <div className="search-input w-3/4 relative">
                            <input
                                type="text"
                                placeholder="جستجو ..."
                                className="w-full p-2 border rounded"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                    </div>
                ) : (
                    <div className="min-w-10p">
                        <Image
                            className="w-10 bg-fixed"
                            src="/assets/images/Logo/Uni_Logo_Transparent.png"
                            alt="University Logo"
                            width={40}
                            height={40}
                        />
                    </div>
                )}
            </div>

            {!isDesktop && (
                <div className={`sidebar z-[1001] ${openSideBar ? 'sidebar-is-open' : ''}`}>
                    <div className="sidebar-overlay" onClick={() => setOpenSideBar(false)}></div>

                    <div className="sidebar-content">
                        <Image
                            className="w-14 bg-fixed"
                            src="/assets/images/Logo/Uni_Logo_Transparent.png"
                            alt="University Logo"
                            width={56}
                            height={56}
                        />
                        <hr className="border-dashed my-4" />

                        <div className="sidebar-items">
                            {mobileNavigationsItems.map((item, index) => (
                                <div
                                    key={`_mobile_sidebar_items_${index}`}
                                    className="sidebar-item flex items-center"
                                    onClick={() => {
                                        setOpenSideBar(false);
                                        router.push(item.to);
                                    }}
                                >
                                    <Link href={item.to} className="text-neutral-600">
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}