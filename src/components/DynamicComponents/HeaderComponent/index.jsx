'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Accordion } from '@/components/ui/accordion';
import SubNav from '../HeaderComponent/SubNav/index';
import { ChevronDown, AlignRight, SquareMenu, MapPinned, Phone, Menu, Globe } from 'lucide-react';
import RecursiveAccordionItemComponent from './RecursiveAccordionItem/index';
import { useDeviceDetection } from '../../../lib/hooks/useDeviceDetection';

// Language management functions
const LANGUAGE_COOKIE_NAME = 'selectedLanguage';

const setLanguageCookie = language => {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1); // Cookie expires in 1 year
  document.cookie = `${LANGUAGE_COOKIE_NAME}=${language}; expires=${expires.toUTCString()}; path=/`;
};

const getLanguageCookie = () => {
  if (typeof document === 'undefined') return 'fa'; // Default for server-side

  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === LANGUAGE_COOKIE_NAME) {
      return value;
    }
  }
  return 'fa'; // Default language
};

const detectLanguageFromPath = pathname => {
  return pathname.startsWith('/ar') ? 'ar' : 'fa';
};

export const getSelectedLanguage = () => {
  return getLanguageCookie();
};

const BottomSideBarItems = [
  {
    id: 1,
    name: 'تماس با دانشگاه',
    data: '021-12345678',
    icon: <Phone />,
  },
  {
    id: 2,
    name: 'آدرس دانشگاه',
    data: 'تهران، میدان سپاه ، دانشگاه جامع انقلاب اسلامی',
    icon: <MapPinned />,
  },
];

const menuItems = [
  { id: 1, name: 'صفحه اصلی', path: '/' },
  {
    id: 2,
    name: 'دانشکده ها',
    path: '',
    children: [
      { id: 21, name: 'دانشکده علوم انسانی', path: '/Colleges/Humanities' },
      { id: 22, name: 'دانشکده فنی و مهندسی', path: '/Colleges/Engineering' },
    ],
  },
  {
    id: 3,
    name: 'معاونت ها',
    path: '',
    children: [
      {
        id: 31,
        name: 'معاونت پژوهش',
        path: '/departments/research',
        children: [
          {
            id: 31,
            name: 'معاونت پژوهش',
            path: '/departments/research',
            isMobile: true,
          },
          { isMobile: true, id: 311, name: 'صفحه معاونت پژوهش', path: '/departments/research' },
          {
            name: 'مرکز نظریه پردازی',
            id: 312,
            path: '/departments/research/theorycenter',
          },
          {
            name: 'کارگاه های پژوهشی',
            id: 313,
            path: '/departments/research/researchgroups',
          },
          {
            name: 'آیین نامه ها، نظامات، شیوه نامه ها',
            id: 314,
            path: '/departments/research/regulations',
          },
          {
            name: 'بانک مسائل',
            id: 315,
            path: '/departments/research/questionbank',
          },
          {
            name: 'سوالات متداول معاونت',
            id: 316,
            path: '/departments/research/faq',
          },
          {
            name: 'سامانه ها',
            id: 317,
            path: '/departments/research/systems',
          },
        ],
      },
      {
        id: 32,
        name: 'معاونت دانشجویی',
        path: '/departments/student',
        children: [
          { isMobile: true, id: 321, name: 'صفحه معاونت دانشجویی', path: '/departments/student' },
          {
            name: 'مدیریت رفاه',
            id: 322,
            path: '',
            children: [
              { id: 3221, name: 'مرکز خدمات رفاهی', path: '/departments/student/welfare' },
              { id: 3222, name: 'اخبار و اطلاعیه های رفاه', path: '/departments/education' },
              { id: 3223, name: 'آیین نامه وام های دانشجویی', path: '/departments/education' },
              { id: 3224, name: 'شرایط تقسیط وام', path: '/departments/education' },
              { id: 3225, name: 'مراحل تسویه وام', path: '/departments/education' },
              { id: 3226, name: 'پرداخت آنلاین', path: '/departments/education' },
            ],
          },
          {
            id: 323,
            name: 'مدیریت سراها',
            path: '/departments/student/dormitory',
            children: [
              {
                id: 3231,
                name: 'معرفی سراهای دانشجویی',
                path: '/departments/student/dormitory',
              },
              { id: 3232, name: 'اخبار و اطلاعیه های سراها', path: '/departments/education' },
              { id: 3233, name: 'سراهای دانشجویی', path: '/departments/education' },
              { id: 3234, name: 'فرم های لازم', path: '/departments/education' },
              { id: 3235, name: 'راه های ارتباطی', path: '/departments/education' },
              { id: 3236, name: 'سوالات متداول', path: '/departments/education' },
            ],
          },
          {
            id: 324,
            name: 'مدیریت تغذیه',
            path: '',
            children: [
              { id: 3241, name: 'سامانه تغذیه', path: '/departments/student/food' },
              { id: 3242, name: 'معرفی اتوماسیون تغذیه', path: '/departments/education' },
              { id: 3243, name: 'راهنمایی و مقررات', path: '/departments/education' },
            ],
          },
          {
            id: 325,
            name: 'مرکز مشاوره',
            path: '/departments/student/counseling',
            children: [
              {
                id: 3251,
                name: 'معرفی مرکز مشاوره',
                path: '/departments/student/counseling',
              },
              { id: 3252, name: 'زمانبندی حضور', path: '/departments/student/ConsultationCenter' },
              {
                id: 3253,
                name: 'رزور وقت مشاوره',
                path: '/departments/student/ConsultationCenter',
                name: 'زمانبندی حضور',
                path: '/departments/student/ConsultationCenter',
              },
              {
                id: 32535,
                name: 'رزور وقت مشاوره',
                path: '/departments/student/ConsultationCenter',
              },
            ],
          },
          {
            id: 326,
            name: 'کمیسیون موارد خاص',
            path: '/departments/student/specialcases',
            children: [
              {
                id: 3261,
                name: 'معرفی کمیسیون موارد خاص',
                path: '/departments/student/specialcases',
              },
              { id: 3262, name: 'آیین نامه ها', path: '/departments/student/regulations' },
              { id: 3263, name: 'کاربرگ ها و فرم ها', path: '/departments/student/regulations' },
              {
                id: 3264,
                name: 'نمودار گردش کار در کمیسیون',
                path: '/departments/student/regulations',
              },
            ],
          },
          {
            id: 327,
            name: 'آیین نامه ها',
            path: '/departments/student/regulations',
            children: [
              { id: 3271, name: 'آیین نامه سراها', path: '/departments/student/regulations' },
              { id: 3272, name: 'آیین نامه های مهمان', path: '' },
              { id: 3273, name: 'آیین نامه تخلفات', path: '' },
            ],
          },
          // { id: 328, name: 'امور دانشجویان شاهد', path: '' },
          { id: 329, name: 'چارت سازمانی', path: '/departments/student/organizationalchart' },
          { id: 330, name: 'تماس با معاونت', path: '/departments/student/contact' },
          { id: '330_student', name: 'سوالات متداول', path: '/departments/student/faq' },
        ],
      },
      {
        id: 33,
        name: 'معاونت فرهنگی',
        path: '/departments/Cultural',
        children: [
          { isMobile: true, id: 331, name: 'صفحه معاونت پژوهش', path: '/departments/Cultural' },
        ],
      },
      {
        id: 34,
        name: 'معاونت آموزش',
        path: '/departments/education',
        children: [
          {
            isMobile: true,
            id: 341,
            name: 'صفحه معاونت پژوهش',
            path: '/departments/education',
          },
          {
            id: '343-ed',
            name: 'مدیران',
            path: '/departments/education/staff-groups',
          },
          {
            id: '344-ed',
            name: 'دفتر جذب هیئت علمی',
            path: '/departments/education/facultyrecruitment',
          },
          {
            id: '345-ed',
            name: 'دفتر جذب استعدادهای درخشان',
            path: '/departments/education/officeoftalent',
          },
          {
            id: '346-ed',
            name: 'امور دانش‌آموختگان',
            path: '/departments/education/alumni',
          },
          {
            id: '347-ed',
            name: 'آیین نامه ها',
            path: '/departments/education/regulations',
          },
          {
            id: '348-ed',
            name: 'سوالات متداول',
            path: '/departments/education/faq',
          },
        ],
      },
    ],
  },
  { id: 4, name: 'اداری و مالی', path: '/Admin' },
  {
    id: 5,
    name: 'سامانه ها',
    path: '',
    children: [
      { id: 51, name: 'سامانه ۱', path: '/Systems/System1' },
      { id: 52, name: 'سامانه ۲', path: '/Systems/System2' },
      { id: 53, name: 'سامانه ۳', path: '/Systems/System3' },
    ],
  },
  { id: 6, name: 'ثبت نام', path: '/Register' },
  { id: 7, name: 'پرتال خبری', path: '/newsPortal' },
  { id: 8, name: 'گالری تصاویر', path: '/gallery' },
  { id: 9, name: 'آموزش ها', path: 'departments/education' },
  { id: 10, name: 'تماس با دانشگاه', path: '/contact', isMobile: false },
];

function getLink(desc) {
  const isEmail = desc.includes('@');
  const isPhone = /^0\d{2,}-\d{3,}/.test(desc);
  const isAddress = !isEmail && !isPhone;

  if (isEmail) {
    return `mailto:${desc}`;
  } else if (isPhone) {
    return `tel:${desc.replace(/[^+\d]/g, '')}`;
  } else if (isAddress) {
    const encodedAddress = encodeURIComponent(desc);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }

  return '#';
}

export default function HeaderComponent() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isDesktop } = useDeviceDetection();
  const [sidebarItems, setSidebarItems] = useState([]);
  const [navbarItems, setNavbarItems] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('fa');

  // Detect if we're currently on an Arabic route
  const isArabicRoute = pathname.startsWith('/ar');
  const currentLanguage = isArabicRoute ? 'ar' : 'fa';

  // Helper function to add language prefix to paths
  const addLanguagePrefix = (path, language = currentLanguage) => {
    if (!path || path === '#') return path;
    if (language === 'ar') {
      return path.startsWith('/ar') ? path : `/ar${path}`;
    } else {
      return path.startsWith('/ar') ? path.replace('/ar', '') || '/' : path;
    }
  };

  // Initialize language from cookies and URL
  useEffect(() => {
    const urlLanguage = detectLanguageFromPath(pathname);
    const savedLanguage = getLanguageCookie();

    // Prioritize URL language over cookie
    if (urlLanguage !== savedLanguage) {
      setLanguageCookie(urlLanguage);
      setSelectedLanguage(urlLanguage);
    } else {
      setSelectedLanguage(savedLanguage);
    }
  }, [pathname]);

  const handleLanguageChange = language => {
    setSelectedLanguage(language);
    setLanguageCookie(language);

    if (language === 'ar') {
      if (!pathname.startsWith('/ar')) {
        const newPath = pathname === '/' ? '/ar' : `/ar${pathname}`;
        router.push(newPath);
      }
    } else {
      if (pathname.startsWith('/ar')) {
        const newPath = pathname.replace('/ar', '') || '/';
        router.push(newPath);
      }
    }
  };

  useEffect(() => {
    const deepCloneItems = items => {
      return items.map(item => {
        const newItem = { ...item };
        if (newItem.children && newItem.children.length > 0) {
          newItem.children = deepCloneItems(newItem.children);
        }
        return newItem;
      });
    };

    // Add language prefix to menu items
    const addLanguagePrefixToItems = (items, language) => {
      return items.map(item => {
        const newItem = { ...item };
        newItem.path = addLanguagePrefix(item.path, language);

        if (newItem.children && newItem.children.length > 0) {
          newItem.children = addLanguagePrefixToItems(newItem.children, language);
        }
        return newItem;
      });
    };

    // Filter items for navbar (desktop) - exclude items with isMobile: true
    const filterForNavbar = items => {
      return items.map(item => {
        const newItem = { ...item };
        if (newItem.children && newItem.children.length > 0) {
          newItem.children = newItem.children
            .filter(child => !child.isMobile) // Exclude isMobile: true items
            .map(child => {
              // Recursively filter nested children
              if (child.children && child.children.length > 0) {
                return {
                  ...child,
                  children: filterForNavbar(child.children),
                };
              }
              return child;
            });
        }
        return newItem;
      });
    };

    // Filter items for sidebar (mobile) - exclude items with isMobile: false
    const filterForSidebar = items => {
      return items
        .filter(item => item.isMobile !== false) // Exclude items with isMobile: false
        .map(item => {
          const newItem = { ...item };
          if (newItem.children && newItem.children.length > 0) {
            newItem.children = filterForSidebar(newItem.children);
          }
          return newItem;
        });
    };

    // Apply filters to cloned menu items and add language prefixes
    const clonedMenuItems = deepCloneItems(menuItems);
    const languagePrefixedItems = addLanguagePrefixToItems(clonedMenuItems, currentLanguage);

    const sidebarFilteredItems = filterForSidebar(languagePrefixedItems);
    const navbarFilteredItems = filterForNavbar(languagePrefixedItems);

    // Set the filtered items
    setSidebarItems(sidebarFilteredItems);
    setNavbarItems(navbarFilteredItems);
  }, [currentLanguage, pathname]);

  // Find the department from the original menuItems to get all children
  // Handle Arabic routes by removing /ar prefix for matching
  const currentPath = pathname.startsWith('/ar') ? pathname.replace('/ar', '') || '/' : pathname;
  const department = menuItems
    .flatMap(item => (item.children ? item.children : []))
    .find(child => child.path && currentPath.startsWith(child.path) && child.children);

  // Filter out items with isMobile: true from the department children for SubNav
  // and add language prefix to paths
  const filteredDepartmentChildren = department?.children
    ? department.children
        .filter(item => !item.isMobile)
        .map(item => ({
          ...item,
          path: addLanguagePrefix(item.path),
        }))
    : [];

  useEffect(() => {
    if (openSideBar && !isDesktop) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isDesktop, openSideBar]);

  return (
    <div className="fixed top-0 lg:top-10 left-0 right-0 z-50 flex justify-center w-full">
      {pathname !== '/news' && (
        <>
          <div className="w-full lg:w-11/12 h-18 flex items-center justify-center bg-white lg:rounded-full border border-gray-200 py-3 px-4 relative">
            <div className="flex w-full justify-between items-center">
              <div className="lg:min-w-[10%] lg:max-w-[10%]">
                <div className="hidden lg:inline-flex">
                  <Link href={addLanguagePrefix('/')} aria-label="بازگشت به صفحه اصلی">
                    <Image
                      src="/Images/Logo/Uni_Logo_Transparent.png"
                      alt="لوگوی دانشگاه جامع انقلاب اسلامی"
                      width={50}
                      height={50}
                      className="object-contain "
                    />
                  </Link>
                </div>
                <div className="lg:hidden">
                  <button
                    onClick={() => setOpenSideBar(true)}
                    aria-label="باز کردن منو"
                    className="text-black text-lg flex items-center"
                  >
                    <Menu size={35} className="stroke-1" />
                  </button>
                </div>
              </div>

              <div className="hidden lg:flex w-full justify-between items-center space-x-4 font-medium">
                {navbarItems.map(item => (
                  <div key={`item_${item.id}`}>
                    {item.children ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          className="cursor-pointer w-full flex text-neutral-800 text-sm font-medium
                           gap-1"
                        >
                          {item.name}
                          <ChevronDown className="w-4 h-4 text-neutral-800" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="mt-7  px-4 py-4 z-[60]"
                          align="start"
                          dir="rtl"
                        >
                          {item.children.map((child, index) => (
                            <React.Fragment key={child.id}>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={child.path || '#'}
                                  className="w-full flex flex-col items-start text-sm font-medium py-3 !rounded-sm cursor-pointer"
                                >
                                  {child.name}
                                </Link>
                              </DropdownMenuItem>
                              {index < item.children.length - 1 && <Separator className="" />}
                            </React.Fragment>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        href={item.path || '#'}
                        className="text-neutral-800 text-sm font-medium cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="lg:hidden font-bold absolute font-semiboldbold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-center">
                دانشگاه جامع انقلاب اسلامی
              </div>

              <div className="min-w-1/10 lg:min-w-2/10 flex justify-end items-center ">
                <div className="hidden lg:flex items-center gap-4 w-full">
                  {/* Language Toggle Button */}

                  {/* Search Input */}
                  <div className="flex-1 flex gap-3 items-center w-full mr-8 ">
                    <div className="relative w-3/5 ">
                      <input
                        id="search-input"
                        type="text"
                        placeholder="جستجو ..."
                        className="w-full pl-10 pr-4 bg-[#006273]/60 placeholder-white py-2 text-white rounded-full focus:outline-none"
                      />
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="flex items-center w-2/5">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-full bg-black  transition-colors cursor-pointer">
                          <Globe size={16} className="text-white" />
                          <span className="text-white text-sm font-medium">
                            {selectedLanguage === 'fa' ? 'فا' : 'عر'}
                          </span>
                          <ChevronDown className="w-3 h-3 text-white" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="mt-2 px-2 py-2 z-[60]"
                          align="end"
                          dir="rtl"
                        >
                          <DropdownMenuItem
                            onClick={() => handleLanguageChange('fa')}
                            className={`cursor-pointer px-3 py-2 rounded-sm ${
                              selectedLanguage === 'fa' ? 'bg-primary/10' : ''
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm">🇮🇷</span>
                              <span className="text-sm font-medium">فارسی</span>
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleLanguageChange('ar')}
                            className={`cursor-pointer px-3 py-2 rounded-sm ${
                              selectedLanguage === 'ar' ? 'bg-primary/10' : ''
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm">🇸🇦</span>
                              <span className="text-sm font-medium">العربية</span>
                            </div>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden">
                  <Link href={addLanguagePrefix('/')} aria-label="بازگشت به صفحه اصلی">
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

            <div
              className={`lg:hidden fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
                openSideBar ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setOpenSideBar(false)}
            >
              <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-white rounded-tl-xl rounded-bl-xl transition-transform duration-300 overflow-y-auto ${
                  openSideBar ? 'translate-x-0' : 'translate-x-full'
                }`}
                onClick={e => e.stopPropagation()}
                dir="rtl"
              >
                <div className="p-4 sticky top-0 z-10 bg-white drop-shadow-sm drop-shadow-neutral-100  flex justify-between items-center">
                  <Link href={addLanguagePrefix('/')} aria-label="بازگشت به صفحه اصلی">
                    <Image
                      src="/Images/Logo/Uni_Logo_Transparent.png"
                      alt="لوگوی دانشگاه جامع انقلاب اسلامی"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setOpenSideBar(false)}
                    aria-label="بستن منو"
                    className="p Wey-1 rounded-full hover:bg-gray-100"
                  >
                    <AlignRight size={35} className="stroke-1" />
                  </button>
                </div>

                <div className="p-2">
                  <Accordion
                    type="multiple"
                    className="w-full text-sm font-medium text-gray-900  mb-20"
                  >
                    {sidebarItems.map(item => (
                      <RecursiveAccordionItemComponent
                        key={item.id}
                        item={item}
                        setOpenSideBar={setOpenSideBar}
                      />
                    ))}
                  </Accordion>
                </div>

                <div className="sticky z-10 bottom-0 bg-white flex flex-col justify-center gap-4 py-2 px-4 shadow-sm">
                  {/* <Separator className="top-0 w-full" /> */}
                  {BottomSideBarItems.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <div className="flex flex-row gap-4 items-center pb-3">
                        <span className="text-primary-500">
                          {React.cloneElement(item.icon, { size: 20 })}
                        </span>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-gray-900 font-medium text-sm">{item.name}</h3>
                          <a
                            className="text-gray-700 text-sm"
                            href={getLink(item.data)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.data}
                          </a>
                        </div>
                      </div>
                      {index < BottomSideBarItems.length - 1 && (
                        <Separator className="bg-neutral-200" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <SubNav data={filteredDepartmentChildren} />
        </>
      )}
    </div>
  );
}
