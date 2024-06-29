"use client"
import { CldVideoPlayer } from 'next-cloudinary';


export default function VideoPlayer({ keys, w, h }: { keys: String, w: string, h: string }) {

    return (


        <div className='flex justify-center'>


            <iframe src={`https://www.youtube.com/embed/${keys}`} allowFullScreen width={w} height={h} allow="autoplay"></iframe>

        </div>

    )
}