'use client'
import { Gluten } from 'next/font/google'
import ReactPlayer from 'react-player'
import Link from 'next/link'

const gluten = Gluten({
  weight: ['400'],
  subsets: ['latin']
})

export default function Videos() {
  return (
    <main>
     <div className='trapecio-l'>
      <div className='container-portafolio_header'>
        <h1 className={gluten.className} >Videos</h1>
      </div>
     </div>
     <div className='video_container'>
      <ReactPlayer url='/videos/video_001.mp4' controls light="/images/portada_vid_1.png" width='100%' />
      <ReactPlayer url='/videos/video_004.mp4' controls light="/images/portada_vid_2.png" width='100%' />
     </div>
      <div className='video_container'>
        <ReactPlayer url='/videos/video_003.mp4' controls light="/images/portada_vid_3.png"  width='100%' />
        <ReactPlayer url='/videos/video_011.mp4' controls light="/images/portada_vid_4.png"  width='100%' />
      </div>
      <div className='video_container'>
        <ReactPlayer url='/videos/video_005.mp4' controls light="/images/portada_vid_5.png"  width='100%' />
        <ReactPlayer url='/videos/video_006.mp4' controls light="/images/portada_vid_6.png"  width='100%' />
      </div>
      <div className='video_container'>
        <ReactPlayer url='/videos/video_007.mp4' controls light="/images/portada_vid_7.png"  width='100%' />
        <ReactPlayer url='/videos/video_008.mp4' controls light="/images/portada_vid_8.png"  width='100%' />
      </div>
      <div className='video_container'>
        <ReactPlayer url='/videos/video_009.mp4' controls light="/images/portada_vid_9.png"  width='100%' />
        <ReactPlayer url='/videos/video_010.mp4' controls light="/images/portada_vid_10.png"  width='100%' />
      </div>
      <div className='video_container'>
        <ReactPlayer url='/videos/video_011.mp4' controls light="/images/portada_vid_11.png"  width='100%' />
        <ReactPlayer url='/videos/video_012.mp4' controls light="/images/portada_vid_12.png"  width='100%' />
      </div>
      <div className='video_container'>
        <ReactPlayer url='/videos/video_013.mp4' controls light="/images/portada_vid_13.png"  width='100%' />
        <ReactPlayer url='/videos/video_014.mp4' controls light="/images/portada_vid_14.png"  width='100%' />
      </div>
      <div className='video_container'>
        <ReactPlayer url='/videos/video_015.mp4' controls light="/images/portada_vid_15.png"  width='100%' />
        <ReactPlayer url='/videos/video_016.mp4' controls light="/images/portada_vid_16.png"  width='100%' />
      </div>
      <div className='container_botones_ver' style={{display: 'flex', justifyContent: 'center'}}>
          <Link href={"/"}>Volver</Link>
      </div>
    </main>
  )
}
