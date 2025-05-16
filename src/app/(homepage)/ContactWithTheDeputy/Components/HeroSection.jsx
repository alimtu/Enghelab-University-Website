"use client"

import Image from "next/image"
import Link from "next/link"


export default function HeroSection({ heroSectionData}) {
    return (
        <div className="relative w-full h-[400px] lg:h-[700px]  overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={heroSectionData.backgroundImage || "/placeholder.svg"}
                    alt="University building"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-primary-950/90"></div>

            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 lg:px-8">
                <h1 className="text-3xl lg:text-6xl font-bold text-white mb-4">{heroSectionData.title}</h1>
            </div>
        </div>
    )
}
