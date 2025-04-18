import Link from 'next/link';
import Image from 'next/image';

export default function notFound() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center m-auto">
            <div>
                <div className="h-[400px] w-[400px] relative flex flex-col justify-center items-center m-auto">
                    <Image src="/develop.jpg" className="absolute" fill alt="logo" />
                </div>

                <div className="flex flex-col justify-center items-center m-auto">
                    <h2 className="font-bold text-2xl lg:text-4xl my-4">این صفحه در حال توسعه میباشد</h2>
                    <Link className=" w-48 lg:w-64 h-16 bg-secondary-400 text-white px-6 lg:text-xl text-center rounded-lg flex items-center justify-center" href="/">
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            </div>
        </div>
    );
}