'use client'
import { useState, useRef } from 'react'
import { PlayCircle, PauseCircle } from 'lucide-react'

export default function VideoPlayer({ videoSrc, thumbnail, alt = "Video" }) {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = () => {
        const video = videoRef.current
        if (!video) return

        if (video.paused) {
            video.play()
            setIsPlaying(true)
        } else {
            video.pause()
            setIsPlaying(false)
        }
    }

    return (
        <div className="relative w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg group">
            <video
                ref={videoRef}
                src={videoSrc}
                poster={thumbnail}
                controls={false}
                className="w-full h-auto object-cover"
                onClick={togglePlay}
            />
            {/* دکمه کنترل پخش */}
            <button
                className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-full z-10 hover:bg-black/80 transition"
                onClick={togglePlay}
            >
                {isPlaying ? <PauseCircle size={30} /> : <PlayCircle size={30} />}
            </button>
        </div>
    )
}
