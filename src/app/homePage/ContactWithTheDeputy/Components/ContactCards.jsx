
export default function ContactCards({items , title}){
    return (
        <div className="w-full h-full flex flex-col gap-9 bg-neutral-100 px-2 py-4 lg:px-6  lg:py-8 rounded-lg ">
            <div>
                <h3 className="text-xl font-medium">{title}</h3>
            </div>
            <div className="flex flex-col gap-4">
                {items.map((item,index)  => (
                    <div key={index} className="flex flex-col gap-3" >
                            <div className="flex flex-row gap-1 ">
                                {item.icon}
                                <h4 className="text-base font-medium">{item.title}:</h4>
                            </div>
                            <p className='text-neutral-600 text-base flex flex-wrap justify-end items-center'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}