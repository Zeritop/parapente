'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarouselComp = () => {
    const imgs = [
        {
            'source': '/images/IMG_001.JPG'
        },
        {
            'source': '/images/IMG_002.JPG'
        },
        {
            'source': '/images/IMG_003.JPG'
        },
        {
            'source': '/images/IMG_004.JPG'
        },
        {
            'source': '/images/IMG_005.JPG'
        },
        {
            'source': '/images/IMG_006.JPG'
        },
        {
            'source': '/images/IMG_007.JPG'
        },
        {
            'source': '/images/IMG_008.JPG'
        },
        {
            'source': '/images/IMG_009.JPG'
        },
        {
            'source': '/images/IMG_010.JPG'
        },
    ]


  return (
    <Carousel 
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
    >
        {
            imgs.map( ({source}) => (
                <div>
                    <img src={source} className='img-carousel'/>
                </div>
            ))
        }
    </Carousel>
  )
}
