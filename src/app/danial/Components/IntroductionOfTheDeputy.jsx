import Image from 'next/image';

export default function DepartmentInfo({ compTitle = "معرفی معاونت", info}) {




    return (
        <div className="flex flex-col lg:flex-row items-center w-11/12 py-8 mx-auto gap-6">
            <div className="title mb-[16px] flex flex-col lg:w-2/3 w-full">
                <h3 className="text-[#101828] mb-[16px]">{compTitle}</h3>
                <p
                    className="text-justify lg:pl-[30px]  leading-9"
                    style={{ textAlign: 'justify' }}
                >
                    {info.description}
                </p>
            </div>
            <div className="video  lg:w-2/3 w-full">
                <Image
                    className="w-full rounded-sm"
                    src={info.pic}
                    alt=""
                    width={500}  // Set appropriate width
                    height={300} // Set appropriate height
                    layout="responsive" // or "fill" depending on your needs
                />
            </div>
        </div>
    );
}