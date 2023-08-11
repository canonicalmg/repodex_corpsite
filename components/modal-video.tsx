// modal-video.tsx

'use client'

import React, { useRef } from 'react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
      
      {/* Video */}
      <video 
        ref={videoRef} 
        width={videoWidth} 
        height={videoHeight} 
        autoPlay 
        muted 
        loop
        controls 
        className="absolute z-10"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Thumbnail (this can be removed if you don't need it, or can be used as a fallback) */}
      <Image src={''} width={thumbWidth} height={thumbHeight} alt={thumbAlt} className="z-0" />

    </div>
  )
}
